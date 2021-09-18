# In order to get this project to work locally, open a terminal and install the following libraries
# pip install fastapi
# pip install uvicorn 

import codecs 
from typing import Optional
from fastapi import FastAPI, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from server import Server

app = FastAPI()
api_router = APIRouter()
app.mount("/static", StaticFiles(directory="static"), name="static")

webServer = Server()

@api_router.get('/shopping-list', status_code=200)
def fetch_shopping_list():
    return {"items": ["Hello world", "React is interesting so far"]}

@api_router.get("/", status_code=200)
def root():
    return HTMLResponse(content=ReadHtmlPage('index.html'), status_code=200)

app.include_router(api_router)

def main():
    webServer.Run()

main()

def ReadHtmlPage(pageName):
    return codecs.open(pageName, 'r').read()