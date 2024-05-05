from dataBase import Base
from sqlalchemy import Integer, String, Boolean, Column


class Orders(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    date = Column(String, index=True)
    name = Column(String)
    phone_number = Column(String)
    eyeglass_lense = Column(String)
    eyeglass_lense_price = Column(Integer)
    frame_Type = Column(String)
    frame_brand = Column(String)
    frame_price = Column(Integer)
    od = Column(String)
    os = Column(String)
    pd = Column(String)
    total_price = Column(Integer)
    checkOut = Column(Boolean, default=False)

