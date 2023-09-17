from flask import Blueprint, render_template, redirect, request, url_for, session
import db,random,string

ref_game_bp = Blueprint('ref_game', __name__, url_prefix='/ref_game')

@ref_game_bp.route('/ref_game')
def ref_game():
    return render_template('ref_game/ref_game.html')

@ref_game_bp.route('/ref_game_main')
def ref_game_main():
    return render_template('ref_game/ref_game_main.html')