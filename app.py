from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    return render_template('index.html')

#@app.route('/user/<name>')
#def user(name):
#    return render_template('user.html', name=name)

@app.route('/about/')
def about():
    """This introduces the project"""
    return render_template('about.html')

@app.route('/satoru/')
def about_me():
    """This page is about me"""
    return render_template('satoru.html')

@app.route('/taxi/')
def taxi():
    """This is supposed to be the main app.
    To be edited later."""
    return render_template('taxi.html')

if __name__ == '__main__':
    app.run()
