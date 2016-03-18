import os

from flask import Flask, request, Response
from flask import render_template, url_for, redirect, send_from_directory
from flask import send_file, make_response, abort
import json 
app = Flask(__name__)
app.debug = True

@app.route('/')
def hello_world():    
    return send_file("templates/index.html")

@app.route('/projects', methods=['GET', 'POST'])
def projects():    
    print ("THis is a test")
    return 'The project page'


@app.route('/register', methods=[ 'POST'])
def registerUser():        
    print (type(request.data) is dict)
    oJson = json.loads(request.data)
    print (type(oJson) is dict)
    fileName = oJson.firstName+".json"
    fo = open(fileName, "wb")
    fo.write( request.data );
    fo.close();
    return 'The project page'

if __name__ == '__main__':
    app.run()