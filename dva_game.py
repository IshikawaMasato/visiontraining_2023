from flask import Blueprint, render_template, redirect, request, url_for, session
import db,random,string

dva_game_bp = Blueprint('dva_game', __name__, url_prefix='/dva_game')

@dva_game_bp.route('/dva_game')
def dva_game():
    render_template('dva_game/dva_game.html')