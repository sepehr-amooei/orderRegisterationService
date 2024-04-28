from fastapi import FastAPI
import models
from dataBase import engine_or

app = FastAPI()

models.Base_or.metadata.create_all(engine_or)