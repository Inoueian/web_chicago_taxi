import requests, datetime, io
import pandas as pd
from bokeh.plotting import figure, output_file, show
from bokeh.resources import CDN
from bokeh.embed import file_html

def plot_ticker(ticker):

    output_file('templates/output.html', title='Bokeh Plot', mode='cdn', root_dir=None)

    #set up dates
    now = datetime.datetime.now()
    #list of dates from 30 days ago to now
    date_list = [now - datetime.timedelta(30-i) for i in range(31)]
    #format for the API request
    dates = '%2C'.join([date.strftime('%Y-%m-%d') for date in date_list])

    #set up API request
    url = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES.csv?'
    payload = '&'.join(['ticker=' + ticker, 'date=' + dates, 'api_key=oju6mQfWvzQLmaah9cZU'])

    #download data
    with requests.Session() as s:
        download = s.get(url + payload)

    #pick out just the dates and closing prices
    df = pd.read_csv(io.BytesIO(download.content))[['date', 'close']]

    #For plotting purposes, parse the string dates as datetimes.
    df['datetime'] = df['date'].apply(lambda x: datetime.datetime.strptime(x, '%Y-%m-%d'))

    #plot using Bokeh
    p = figure(plot_width=600, plot_height=400, x_axis_type="datetime")
    p.circle(df.datetime, df.close, size=10)
    show(p)

    return None

