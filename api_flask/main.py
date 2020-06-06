from flask import Flask, request, jsonify
import os
import urllib
import random
import json
from flask_cors import CORS

## local module
from proxy_route import proxy_route
from twitterwebhook.twitter_scrape_flask import TwitterScraper 
from covid_process import countries_historical
app = Flask(__name__)
app.register_blueprint(proxy_route)
CORS(app)

## this is broken because twitter now asks for javascript, may try again later when i have time
@app.route('/flask/scrape/twitter', methods=['GET'])
def proxy_request():
    handle = request.args.get('handle')
    tweets = TwitterScraper(f"{handle}").twitter_scrape()
    res = {"tweets" : tweets}
    ##res = { "tweets": TwitterScraper.twitter_scrape()}
    return res

@app.route('/flask/covid/historical', methods=['GET'])
def proxy_process():
    data = countries_historical()
    res = {"data": data}
    return res

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=6543)