from dataBase import Base
from sqlalchemy import Integer, String, Boolean, Column


class Orders(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String)
    phone_number = Column(String)
    eyeglass = Column(String)
    frame = Column(String)
    od = Column(String)
    os = Column(String)
    pd = Column(String)
    checkOut = Column(Boolean, default=False)

