from flask import Flask, render_template, request
from flaskext.mysql import MySQL
from datetime import datetime

app = Flask(__name__)

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_PORT']= 3307
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_BD']='gen_camisetas'

mysql.init_app(app)

@app.route('/')
def index():
    return render_template('gen_camisetas/index.html', nomape=[['', '']])

@app.route('/index')
def indexHTML():
    return render_template('gen_camisetas/index.html', nomape=[['', '']])

@app.route('/qatar22')
def qatar():
    return render_template('gen_camisetas/qatar22.html')

@app.route('/lpf')
def lpf():
    return render_template('gen_camisetas/ligaArg.html')

@app.route('/premier')
def premier():
    return render_template('gen_camisetas/premier.html')

@app.route('/contacto')
def contacto():
    return render_template('gen_camisetas/contacto.html')

@app.route('/cart')
def cart():
    return render_template('gen_camisetas/cart.html')

@app.route('/product')
def product():
    return render_template('gen_camisetas/product.html')

@app.route('/login')
def login_gen():
    return render_template('gen_camisetas/login.html')

@app.route('/register')
def register():
    return render_template('gen_camisetas/register.html')

from functions_gen import *

if __name__=='__main__':
    app.run(debug=True)