# In order to get this project to work locally, open a terminal and install the following libraries
# pip install fastapi
# pip install uvicorn 
# pip install aiofiles

import codecs 
from typing import Optional
from fastapi import FastAPI 
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from server import Server

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

webServer = Server()

@app.get('/', response_class=HTMLResponse)
def root():
    return HTMLResponse(content=ReadHtmlPage('index.html'), status_code=200)

def main():
    webServer.Run()

main()

def ReadHtmlPage(pageName):
    return codecs.open(pageName, 'r').read()