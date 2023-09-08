from flask import Blueprint, render_template, redirect, request, url_for, session
import db,random,string

user_bp = Blueprint('user', __name__, url_prefix='/user') 

@user_bp.route('/login_form')
def login_form():
    return render_template('user/login.html')

@user_bp.route('/', methods=['POST'])
def login_exe():
    user_id = request.form.get('user_id')
    password = request.form.get('password')
    user_data = {'user_id':user_id,'password':password}

    if user_id=='':
        error = 'ユーザIDが未入力です。'
        return render_template('user/login.html', error=error,user_data=user_data)
    
    if password=='':
        error = 'パスワードが未入力です。'
        return render_template('user/login.html', error=error,user_data=user_data)
    
    if db.login(user_id, password):
        id=db.get_id(user_id)
        session['user'] = id
        return render_template('user.html')
    else :
        error = 'ユーザIDもしくはパスワードが違います。'
        return render_template('user/login.html',error=error,user_data=user_data)

@user_bp.route('/register_form')
def register_form():
    return render_template('user/account_register.html')

@user_bp.route('/account_result',methods=['POST'])
def register_exe():
    name=request.form.get('name')
    age=request.form.get('age')
    gender=request.form.get('gender')
    mail=request.form.get('mail')
    user_id=request.form.get('user_id')
    password1=request.form.get('password1')
    
    count = db.insert_user(name, age, gender, mail, user_id, password1)

    if count == 1:
        return render_template('user/account_register_finish.html')
    else:
        return render_template('user/account_register.html')

@user_bp.route('/register_confirm', methods=['POST'])
def register_confirm():
    name=request.form.get('name')
    age=request.form.get('age')
    gender=request.form.get('gender')
    mail=request.form.get('mail')
    user_id=request.form.get('user_id')
    password1=request.form.get('password1')
    password2=request.form.get('password2')
    
    user_data = {'name':name,'age':age,'gender':gender,'mail':mail,'user_id':user_id,'password1':password1,'password2':password2,}
    
    if name=='':
        error = 'ユーザ名が未入力です。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    if mail=='':
        error = 'メールアドレスが未入力です。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    if user_id=='':
        error = 'ユーザIDが未入力です。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    if password1=='':
        error = 'パスワードが未入力です。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    if password2=='':
        error = 'パスワード(確認用)が未入力です。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    if password1 != password2:
        error = 'パスワードとパスワード(確認用)には同じパスワードを入力してください。'
        return render_template('user/account_register.html', error=error,user_data=user_data)
    
    
    if error == "":
        return render_template('user/account_confirm.html',user_data=user_data)
    else:
        return redirect(url_for('user/account_register.html',error=error))
    