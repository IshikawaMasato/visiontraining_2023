from flask import Flask, render_template, request, redirect, url_for, session
import db,string,random
from user import user_bp
from vision_register import vision_bp
from datetime import time

app = Flask(__name__)
app.secret_key = ''.join(random.choices(string.ascii_letters, k=256))

app.register_blueprint(user_bp)
app.register_blueprint(vision_bp)
# app.permanent_session_lifetime = timedelta(minutes=3)

@app.route('/')
def index():
    return render_template('top.html')

if __name__ == '__main__':
    app.run(debug=True)