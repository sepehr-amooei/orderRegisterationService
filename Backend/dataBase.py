from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQL_ALCHEMY_DATABASE_URL = 'sqlite:///./orders.db'

engine = create_engine(SQL_ALCHEMY_DATABASE_URL, connect_args={'check_same_thread': False})
Session_local = sessionmaker(autoflush=False, autocommit=False, bind=engine)
Base = declarative_base()

