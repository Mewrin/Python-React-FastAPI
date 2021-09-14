# Note - Install FastAPI in terminal using command 'pip install fastapi' and 'pip install uvicorn'
#      - To run the server, 

from typing import Optional
from fastapi import FastAPI 
from fastapi.responses import HTMLResponse

from server import Server

app = FastAPI()
webServer = Server()

@app.get('/', response_class=HTMLResponse)
def IndexPage():
    return f"""{ReadHtmlPage('index.html')}"""

def main():
    webServer.Run()

main()

def ReadHtmlPage(pageName):
    return open(pageName, 'r').readlines()