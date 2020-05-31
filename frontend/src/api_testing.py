#%%
import requests
import json
res = requests.get("https://api.covid19api.com/summary")

print(json.loads(res.content))