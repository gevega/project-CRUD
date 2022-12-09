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
    return render_template('gen_camisetas/index.html')

@app.route('/index')
def indexHTML():
    return render_template('gen_camisetas/index.html')

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

@app.route('/form_contact', methods=['POST'])
def form_contact():
    print('Estoy funcionando')
    #_nom = request.form['nombre']
    #_ape = request.form['apellido']
    #_mail = request.form['mail']
    #_tel = request.form['telefono']
    #_msg = request.form['mensaje']
    #now = datetime.now()
    #tiempo = now.strftime("%Y%H%M%S")
    #datos = (_nom, _ape, _mail, _tel, _msg)
    #sql="INSERT INTO `gen_camisetas`.`contact_gen` (`nom_user`, `ape_user`, `mail_user`, `tel_user`, `msg_user`) VALUES (%s, %s, %s, %i, %s);"
    sql="INSERT INTO `gen_camisetas`.`contact_gen` (`nom_user`, `ape_user`, `mail_user`, `tel_user`, `msg_user`) VALUES ('fsdfdsfdsf', 'fsdfdsfdsf', 'fsdfdsfdsf', 12122121, 'fsdfdsfdsf');"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    conn.commit()

if __name__=='__main__':
    app.run(debug=True)