from flask import Flask, request, jsonify
import os
import urllib
import random
import json
from flask_cors import CORS
from twitterwebhook.twitter_scrape_flask import TwitterScraper 

## local module
from proxy_route import proxy_route
1
app = Flask(__name__)
app.register_blueprint(proxy_route)
CORS(app)

## some work arounds to cors origin error as well as securing api connected to databases 

@app.route('/flask/scrape/twitter', methods=['POST', 'GET'])
def proxy_request():
    handle = request.args.get('handle')
    tweets = TwitterScraper(f"{handle}").twitter_scrape()
    res = {"tweets" : tweets}
    ##res = { "tweets": TwitterScraper.twitter_scrape()}
    return res

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=6543)