from app import app, mysql
from flask import Flask, render_template, request, jsonify
from flaskext.mysql import MySQL
from datetime import datetime
import json
import requests


@app.route('/form_contact', methods=['POST'])
def add_contact():
    _nom = request.form['nombre']
    _ape = request.form['apellido']
    _mail = request.form['mail']
    _tel = request.form['telefono']
    _msg = request.form['mensaje']
    datos = (_nom, _ape, _mail, _tel, _msg)

    sql = "INSERT INTO `gen_camisetas`.`contact_gen` \
        (`nom_user`, `ape_user`, `mail_user`, `tel_user`, `msg_user`) \
        VALUES (%s, %s, %s, %s, %s);"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return render_template('gen_camisetas/contacto.html')


@app.route('/log-in', methods=['POST'])
def log_in():
    _mail = request.form['mail']
    _pass = request.form['pass']

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT pass_user FROM `gen_camisetas`.`login_gen` WHERE  mail_user = %s", _mail)
    password = cursor.fetchall()
    conn.commit()
    login = 'Correcto'
    if password[0][0] == _pass:
        cursor.execute("SELECT nom_user, ape_user FROM `gen_camisetas`.`login_gen` WHERE  mail_user = %s", _mail)
        nomape = cursor.fetchall()
        return render_template('gen_camisetas/index.html', login = 'TRUE', nomape = nomape)
    else:
        return '<h1>Login incorrecto</h1>'


@app.route('/sign-up', methods=['POST'])
def sign_up():
    _nom = request.form['name']
    _ape = request.form['ape']
    _mail = request.form['mail']
    _pass = request.form['pass']

    if _nom != '' and _ape != '' and _mail != '' and _pass != '':
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT mail_user FROM `gen_camisetas`.`login_gen` WHERE  mail_user = %s", _mail)
        mail = cursor.fetchall()

        if _mail != mail:
            cursor.execute(
                "INSERT INTO `gen_camisetas`.`login_gen` (`nom_user`, `ape_user`, `mail_user`, `pass_user`) VALUES (%s, %s, %s, %s)", (_nom, _ape, _mail, _pass))
            conn.commit()
            return '<h1>Registro con exito</h1>'
        else:
            return '<h1>Mail ya registrado</h1>'
    else:
        return '<h1>Completar campos</h1>'
