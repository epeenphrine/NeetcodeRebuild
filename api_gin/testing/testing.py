#%%
import requests

for i in range(70):
    res = requests.get("http://localhost:1500/flask/scrape/twitter?handle=realDonaldTrump") 
    print(res.content)
    