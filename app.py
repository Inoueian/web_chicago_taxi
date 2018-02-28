from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    """This is supposed to be the main app.
    To be edited later."""
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

@app.route('/plot/')
def plot():
    """Displays plot. This should be in the main page,
    but I haven't figured out how to embed Bokeh plots in a good way."""
    return render_template('bokeh_test.html')

if __name__ == '__main__':
    app.run()
