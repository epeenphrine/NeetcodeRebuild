#%%
import requests

payload = "TDA"
res = requests.get("http://localhost:2000/proxy/project", data=payload)
print(res.content)