from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQL_ALCHEMY_DATABASE_URL_or = 'sqlite:///./orders.db'

engine_or = create_engine(SQL_ALCHEMY_DATABASE_URL_or, connect_args={'check_same_thread': False})
Session_local_or = sessionmaker(autoflush=False, autocommit=False, bind=engine_or)
Base_or = declarative_base()

