import os

from flask import Flask, request, Response
from flask import render_template, url_for, redirect, send_from_directory
from flask import send_file, make_response, abort

app = Flask(__name__)

@app.route('/')
def hello_world():    
    return send_file("templates/index.html")

if __name__ == '__main__':
    app.run()