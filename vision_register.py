from flask import Blueprint, render_template

vision_bp = Blueprint('vision', __name__, url_prefix='/vision')

@vision_bp.route('/register')
def vision_register():
    
    return render_template('vision/list.html')
