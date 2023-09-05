from flask import Blueprint, render_template
import os,psycopg2

vision_bp = Blueprint('vision', __name__, url_prefix='/vision')

def get_connection():
    url = os.environ['DATABASE_URL']
    connection = psycopg2.connect(url)
    return connection

@vision_bp.route('/register')
def vision_register():
    result = vision_confirm(id=id)
    return render_template('vision/vision_register.html', result=result)

def vision_changes():
    return render_template('vision/vision_register.html')


def vision_confirm(id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = 'SELECT dva_vision_level,ref_vision_level,dva_level,ref_level FROM vision_accounts WHERE id = ? '
    cursor.execute(sql,(id,))

    rows = cursor.fetchall()

    cursor.close()
    connection.close()
    return rows

def vision_exechange(id):
    connction = get_connection()
    cursur = connction.cursur()
    sql = "UPDATE vision_accounts SET dva_vision_level = ? , ref_vision_level = ? WHERE id = ?"
    cursur.excute(sql,(id,))
    
    rows = cursur.fetchall()
    
    cursur.close()
    connction.close()
    return rows
    