import requests 

res = requests.get('http://neetcode.com/api/data/')


print(res.content)