from flask import Blueprint, render_template, redirect, request, url_for, session
import db,random,string

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/login_form')
def login_form():
    return render_template('user/login.html')

@user_bp.route('/logout')
def logout():
    session.pop('user',None)
    return redirect(url_for('index'))

@user_bp.route('/')
def user():
    if 'user' in session:
        id = session['user'] 
        result = db.vision_confirm(id)
        
        return render_template('user.html',result=result)
    else:
        return render_template('top.html')

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
        result = db.vision_confirm(id)
        return render_template('user.html',result=result)
    else :
        error = 'アカウントが存在しません。'
        return render_template('user/login.html',error=error,user_data=user_data)
    


@user_bp.route('/login_from')
def login_from():
    return render_template('user/login.html')

@user_bp.route('/', methods=['POST'])
def login():
    user_id = request.form.get('user_id')
    password = request.form.get('password')

    if db.login_exe(user_id, password):
        session['user'] = True
        return render_template('user.html')
    else :
        return render_template('user/login.html')

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

    return render_template('user/account_confirm.html',user_data=user_data)


@user_bp.route('/password_publish')
def password_publish():

    return render_template('user/password_publish.html')

@user_bp.route('/account_delete')
def account_delete():
    return render_template('user/account_delete.html')


@user_bp.route('/account_delete_exe', methods=['POST'])
def delete_exe():
    password = request.form.get('password')
    
    if password=='':
        error = 'パスワードが未入力です。'
        return render_template('user/account_delete.html', error=error)
    
    id = session['user']
    
    if db.password_check(id, password):
        db.delete_account(id)
        return render_template('top.html')
    else :
        error = 'パスワードが違います。'
        return render_template('user/account_delete.html',error=error,password=password)

@user_bp.route('/delete_form')
def delete_form():
    return render_template('user/account_delete.html')


    return render_template('user/password_publish.html')
    
@user_bp.route('/password_change')
def password_change():
    return render_template('user/password_change.html')
  
    render_template('user/password_publish.html')

def user_check():
    if 'user' in session:
        id = session['user'] 
        return id
    else:
        return render_template('top.html')

