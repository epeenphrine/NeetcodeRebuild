import requests

res = requests.get('https://api.tdameritrade.com/v1/marketdata/SPX/pricehistory?apikey=EF8XMCJ9AUQCBX3EDLEWZO4FXFKDZJ69&periodType=month&period=1&frequencyType=daily')


payload = {
    'apikey' : 'EF8XMCJ9AUQCBX3EDLEWZO4FXFKDZJ69',
    'periodType': 'month',
    'period' : 1,
    'frequencyType': 'daily',


}

print(res.content)