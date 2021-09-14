import os

class Server:
    def __init__(self):
        pass

    def Run(self):
        os.system('uvicorn main:app --reload')