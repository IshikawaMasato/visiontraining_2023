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
    message = message_check()
        
    if dva_vision_level =='':
        result = db.vision_confirm(id)
        error = '動体視力の目標レベルが未設定です。'
        return render_template('vision/vision_register.html', error=error,result=result,message=message)
    
    if ref_vision_level == '':
        result = db.vision_confirm(id)
        error = '動体視力の目標レベルが未設定です。'
        return render_template('vision/vision_register.html', error=error,result=result,message=message)
    db.vision_exechange(id,dva_vision_level,ref_vision_level)
    result = db.vision_confirm(id)
    return render_template('vision/vision_register.html', result=result,message=message)

@vision_bp.route('/register')
def vision_changes():
    id = session['user'] 
    result = db.vision_confirm(id)
    message = message_check()
    return render_template('vision/vision_register.html', result=result,message=message)

def message_check():
    id=session['user']
    age = db.get_age(id)
    age = db.get_age(id)
    message =""
    if age == 0:
        message = "Levelは自分自身で決めましょう"
    elif age == 1:
        message = "10歳未満の平均levelは4です。"
    elif age == 2:
        message = "10代の平均levelは7です。"
    elif age == 3:
        message = "20代の平均levelは8です。"
    elif age == 4:
        message = "30代の平均levelは6です。"
    elif age == 5:
        message = "40歳未満の平均levelは6です。"
    elif age == 6:
        message = "50代の平均levelは6です。"
    elif age == 7:
        message = "60代の平均levelは5です。"
    elif age == 8:
        message = "70代の平均levelは5です。"
    elif age == 9:
        message = "80歳未満の平均levelは4です。"
    elif age == 10:
        message = "90代の平均levelは2です。"
    elif age == 11:
        message = "100歳以上も長生きに"
    else:
        message = ""
    return message