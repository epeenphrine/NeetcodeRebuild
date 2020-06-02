# %%
from proxy.proxy_rotate_api import proxy_rotate_api
import requests,json, datetime


def countries_historical():

    json_res = proxy_rotate_api("https://corona.lmao.ninja/v2/historical?lastdays=90")

    data_list = []

    for country in json_res:
        data_dict = {

        }

        data_dict['country'] = country['country']
        data_dict['province'] = country['province']
        data_dict['timeline'] = []
        country_date_keys = country['timeline']['cases'].keys()
        country_date_value = country['timeline']['cases']

        for date in country_date_keys:

            timeline_dict = {}
            val = country_date_value[date]
            date_replace = datetime.datetime.strptime(date, "%m/%d/%y").strftime("%Y-%m-%d")

            timeline_dict['date'] = date_replace
            timeline_dict['cases'] = val

            #3print(date)
            #3print(type(date))
            #3print(date_replace)
            #3print(type(date_replace))

            data_dict['timeline'].append(timeline_dict)
            
        #for item in data_dict['timeline']:
            #print(item['date'])
            #print(item['cases'])
        data_list.append(data_dict)
    return data_list

def usa_historical():
    api_usa_historical = 'https://corona.lmao.ninja/v2/nyt/usa'
    res = requests.get(api_usa_historical)
    json_res = json.loads(res.content)
    for item in json_res:
        print(item)
    print(type(json_res))

usa_historical()