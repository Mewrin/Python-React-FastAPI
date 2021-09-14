# Note - Install FastAPI in terminal using command 'pip install fastapi' and 'pip install uvicorn'
#      - To run the server, 

from typing import Optional
from fastapi import FastAPI 

from server import Server

app = FastAPI()
webServer = Server()

@app.get('/')
def IndexPage():
    return {'Hello World'}

def main():
    webServer.Run()

main()