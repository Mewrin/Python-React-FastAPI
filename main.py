# Note - Install FastAPI in terminal using command 'pip install fastapi' and 'pip install uvicorn', everything else is automatic

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