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