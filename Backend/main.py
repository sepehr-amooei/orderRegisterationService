import datetime
from fastapi import FastAPI, Depends, Path, Query, HTTPException
import models
from models import Orders
from dataBase import engine, session_local
from typing import Annotated
from sqlalchemy.orm import Session
from starlette import status
from pydantic import BaseModel,Field
import json



app = FastAPI()

models.Base.metadata.create_all(engine)


def get_db():
    db = session_local()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]

class OrderRequest(BaseModel):
    name : str = Field(min_length= 3)
    phone_number: str = Field(min_length=10, max_length=11)
    eyeglass_lense : str | None = Field(default=None)
    eyeglass_lense_price : int
    frame_Type  : str | None = Field(default=None)
    frame_brand : str | None = Field(default=None)
    frame_price : int
    od :str
    os : str
    pd : str
    checkOut : bool

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "jafar akbari",
                    "phone_number": "09155555555",
                    "eyeglass_lense": "Blue Optex",
                    "eyeglass_lense_price": 6000000,
                    "frame_Type": "medical",
                    "frame_brand": "comfort",
                    "frame_price": 20000000,
                    "od": "{'SPH': '-1.00', 'CYL': '-1.25', 'AXIS': '180'}",
                    "os": "{'SPH': '-1.00', 'CYL': '-1.25', 'AXIS': '180'}",
                    "pd": '65',
                    "checkOut": False
                }
            ]
        }
    }

@app.get("/")
def read_all(db: db_dependency):
    return db.query(Orders).all()

@app.get("/orders/{order_id}", status_code= status.HTTP_200_OK)
async def read_order(db: db_dependency, order_id: int = Path(gt=0) ):
    order_model = db.query(Orders).filter(Orders.id == order_id).first()
    if order_model is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return order_model

@app.post("/orders", status_code=status.HTTP_201_CREATED)
async def create_order(db: db_dependency, order_request: OrderRequest ):
    order_model = Orders(**order_request.dict())
    order_model.total_price = order_request.frame_price + order_request.eyeglass_lense_price
    date = {"year": datetime.date.today().year, "month": datetime.date.today().month, "day": datetime.date.today().day }
    order_model.date = json.dumps(date)
    db.add(order_model)
    db.commit()

@app.put("/orders/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
async def update_order(db: db_dependency,
                       order_request: OrderRequest,
                       order_id: int = Path(gt=0)):
    order_model = db.query(Orders).filter(Orders.id == order_id).first()

    if order_model is None:
        raise HTTPException(status_code=404, detail="Order not found")

    order_model.name = order_request.name
    order_model.phone_number = order_request.phone_number
    order_model.eyeglass_lense = order_request.eyeglass_lense
    order_model.eyeglass_lense_price = order_request.eyeglass_lense_price
    order_model.frame_Type = order_request.frame_Type
    order_model.frame_brand = order_request.frame_brand
    order_model.frame_price = order_request.frame_price
    order_model.os = order_request.os
    order_model.od = order_request.od
    order_model.pd = order_request.pd
    order_model.total_price = order_request.frame_price + order_request.eyeglass_lense_price
    order_model.checkOut = order_request.checkOut

    db.add(order_model)
    db.commit()

@app.delete("/orders/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_order(db: db_dependency, order_id: int = Path(gt=0)):
    order_model = db.query(Orders).filter(Orders.id == order_id).first()

    if order_model is None:
        raise HTTPException(status_code=404, detail="Order not found")

    db.delete(order_model)
    db.commit()


