#%%
import requests
import json
api_states = 'https://covidtracking.com/api/states'
api_countries = 'https://corona.lmao.ninja/v2/historical?lastdays=90'
api_usa_historical = 'https://corona.lmao.ninja/v2/nyt/usa'

# %%
import requests
import json
## for api_states
api_states = 'https://covidtracking.com/api/states'
res = requests.get(api_states).content
json_res = json.loads(res)

for item in json_res:
    if item['state'] == 'NY':
        cases = item['positive']
        print(cases)

        total_test_results = item['totalTestResults']
        print(total_test_results)

        currently_hospitalized = item['hospitalized']
        print(currently_hospitalized)

# %%
import requests
import json
# for api_countries_historical
api_countries_historical = 'https://corona.lmao.ninja/v2/historical?lastdays=90'
res = requests.get(api_countries_historical)
json_res = json.loads(res.content)
for item in json_res:
    if item['country']  == 'China':
        ##print(item['timeline']['cases'].keys())
        print(item['timeline']['cases'])
        print(type(item['timeline']['cases']))

# %%
import requests
import json
# for api_countries_historical
api_usa_historical = 'https://corona.lmao.ninja/v2/nyt/usa'
res = requests.get(api_usa_historical)
json_res = json.loads(res.content)

for item in json_res:
    print(item)
print(type(json_res))