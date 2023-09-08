from flask import Blueprint, render_template, redirect, request, url_for, session
import os,psycopg2,db

vision_bp = Blueprint('vision_register', __name__, url_prefix='/vision_register')

def get_connection():
    url = os.environ['DATABASE_URL']
    connection = psycopg2.connect(url)
    return connection

@vision_bp.route('/register', methods=['POST'])
def vision_register():
    id = session['user'] 
    dva_vision_level = request.form.get('dva_vision_level')
    ref_vision_level = request.form.get('ref_vision_level')

    if dva_vision_level =='':
        result = db.vision_confirm(id=id)
        error = '動体視力の目標レベルが未設定です。'
        return render_template('vision_register.html', error=error,result=result)
    
    if ref_vision_level == '':
        result = db.vision_confirm(id=id)
        error = '動体視力の目標レベルが未設定です。'
        return render_template('vision_register.html', error=error,result=result)
    result = db.vision_exechange(id,dva_vision_level,ref_vision_level)
    return render_template('vision_register.html', result=result)

@vision_bp.route('/register')
def vision_changes():
    session['user'] = id
    result = db.vision_confirm(id=id)
    return render_template('vision_register.html',result=result)
