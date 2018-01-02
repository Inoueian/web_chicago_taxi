from flask import Flask,render_template,request
from plot import plot_ticker

app = Flask(__name__)

app.vars = {}

@app.route('/index',methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('input.html')
    else:
        app.vars['ticker'] = request.form['ticker']
        
        f = open('ticker.txt', 'w')
        f.write(app.vars['ticker'])
#        f.write('{ticker: \'%s\',}'%(app.vars['ticker']))
        f.close()

#        plot_ticker(app.vars['ticker'])
        
        return render_template('output.html')


if __name__ == '__main__':
    app.run(debug=True)
