from flask import Flask, request, Blueprint
import random, urllib, json

proxy_route = Blueprint("proxy_route", __name__)
@proxy_route.route("/covid/", methods=["GET"])
def testing():
    #args = request.args ## for getting query strings in url
    #3ktry:
        #3kif args["user"]:
            #3kprint(args["user"])
            #3kreturn args 
    #3kexcept:
        #3kreturn "error"

    url = 'https://covidtracking.com/api/v1/states/current.json?'
    request_json =  request.json
        #pick random proxy and header

    headers_list = [
        'Mozilla/5.0 (Windows; U; Windows NT 6.1; x64; fr; rv:1.9.2.13) Gecko/20101203 Firebird/3.6.13',
        'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201',
        'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
        'Mozilla/5.0 (Windows NT 5.2; RW; rv:7.0a1) Gecko/20091211 SeaMonkey/9.23a1pre'
    ]

    headers_pick = random.choice(headers_list)

    #configuring urllib for use with proxies
    #proxy_support = urllib.request.ProxyHandler(proxy_pick)
    #opener = urllib.request.build_opener(proxy_support)
    #urllib.request.install_opener(opener)

    # requests
    req = urllib.request.Request(
        url, headers={'User-Agent': headers_pick}
        )
    res = urllib.request.urlopen(req, timeout=5)
    json_data = json.load(res) 
    load = {
        "data": json_data
    }

    print('json retrieved')
    if load:
        return load
    else:
        message = 'there was an error in your post request. Here is an example of how to send post \n\n'
        example = {
            "data" : "covid19, covid19states, tda"
        }

        error_message = f'{message}' \
                        f'{example}'
        return error_message 

            

@proxy_route.route("/twitter_scrape/", methods= ["GET"])
def twitter_scrape():
    return 
##simple_page = Blueprint('simple_page', __name__, template_folder='templates')
##@simple_page.route('/<page>')
##def show(page):