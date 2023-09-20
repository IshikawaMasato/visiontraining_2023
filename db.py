from flask import render_template
import os, psycopg2, string, random, hashlib

def get_connection():
    url = os.environ['DATABASE_URL']
    connection = psycopg2.connect(url)
    return connection

def get_salt():
    charset = string.ascii_letters + string.digits
    salt = ''.join(random.choices(charset, k=30))
    return salt

def get_hash(password, salt):
    b_pw = bytes(password, 'utf-8')
    b_salt = bytes(salt, 'utf-8')
    hashed_password = hashlib.pbkdf2_hmac('sha256', b_pw, b_salt, 1000).hex()
    return hashed_password

def insert_user(name, age, gender, mail, user_id, password1):
    sql = 'INSERT INTO vision_accounts VALUES(default, %s, %s, %s, %s, %s, %s, default, default, default, default, default, %s)'
    salt = get_salt()
    hashed_password = get_hash(password1, salt)
    try :
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute(sql, (user_id, name, mail, gender, age, hashed_password, salt))
        count = cursor.rowcount
        connection.commit()
    except psycopg2.DatabaseError :
        count = 0
    finally :
        cursor.close()
        connection.close()

    return count

def login(user_id, password):
    sql = 'SELECT password, salt FROM vision_accounts WHERE user_id = %s'
    flg = False

    try :
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute(sql, (user_id,))
        user = cursor.fetchone()

        if user != None:
            salt = user[1]
            hashed_password = get_hash(password, salt)
            if hashed_password == user[0]:
                flg = True

    except psycopg2.DatabaseError :
        flg = False

    finally :
        cursor.close()
        connection.close()

    return flg

def get_id(user_id):
    sql = 'SELECT id FROM vision_accounts WHERE user_id = %s'
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(sql, (user_id,))
    id = cursor.fetchone()
    accout_id = id[0]
    cursor.close()
    connection.close()

    return accout_id
    
#平均的な目標を出すための年齢を取得
def get_age(user_id):
    sql = 'SELECT age FROM vision_accounts WHERE id = %s'
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(sql, (user_id,))
    age = cursor.fetchone()
    account_age = int(age[0])
    cursor.close()
    connection.close()

    return account_age

# 現在と目標のレベルを取得
def vision_confirm(id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = 'SELECT dva_level, dva_vision_level, ref_level, ref_vision_level FROM vision_accounts WHERE id = %s'
    cursor.execute(sql, (id,))
    rows = cursor.fetchall()
    cursor.close()
    connection.close()
    return rows

# 目標レベルを更新
def vision_exechange(id, dva_vision_level, ref_vision_level):
    connection = get_connection()
    cursor = connection.cursor()
    sql = "UPDATE vision_accounts SET dva_vision_level = %s, ref_vision_level = %s WHERE id = %s"
    cursor.execute(sql, (dva_vision_level, ref_vision_level, id,))
    connection.commit()  # コミットを忘れずに
    cursor.close()
    connection.close()
