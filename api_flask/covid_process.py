# %%
from proxy.proxy_rotate_api import proxy_rotate_api
import requests,json, datetime
import time 
import pandas as pd 
def countries_historical():

    json_res = proxy_rotate_api("https://corona.lmao.ninja/v2/historical?lastdays=90")
    data_list = []

    for country in json_res:
        data_dict = {
            
        }


        data_dict['country'] = country['country']
        data_dict['province'] = country['province']
        data_dict['timeline'] = []

        
        province_exists = data_dict['province']
        country_date_keys = country['timeline']['cases'].keys()
        
        country_date_cases = country['timeline']['cases']
        country_date_deaths = country['timeline']['deaths']
        country_date_recovered = country['timeline']['recovered']
        # country: , timeline: [recovered, deaths, cases]
        for date in country_date_keys:

            timeline_dict = {}

            cases = country_date_cases[date]
            deaths = country_date_deaths[date]
            recovered = country_date_recovered[date]

            date_replace = datetime.datetime.strptime(date, "%m/%d/%y").strftime("%Y-%m-%d")

            timeline_dict['date'] = date_replace
            timeline_dict['cases'] = cases
            timeline_dict['deaths'] = deaths 
            timeline_dict['recovered'] = recovered 
            data_dict['timeline'].append(timeline_dict)
        data_list.append(data_dict)

    return data_list

def countries_historical_total():

    json_res = proxy_rotate_api("https://corona.lmao.ninja/v2/historical?lastdays=90")
    data_list = []
    country_list = []
    for country in json_res:

        if country['country'] not in country_list:
            country_list.append(country['country'])

        data_dict = {
            
        }


        data_dict['country'] = country['country']
        data_dict['province'] = country['province']
        data_dict['timeline'] = []

        
        province_exists = data_dict['province']
        country_date_keys = country['timeline']['cases'].keys()
        
        country_date_cases = country['timeline']['cases']
        country_date_deaths = country['timeline']['deaths']
        country_date_recovered = country['timeline']['recovered']
        # country: , timeline: [recovered, deaths, cases]
        for date in country_date_keys:

            timeline_dict = {}

            cases = country_date_cases[date]
            deaths = country_date_deaths[date]
            recovered = country_date_recovered[date]

            date_replace = datetime.datetime.strptime(date, "%m/%d/%y").strftime("%Y-%m-%d")

            timeline_dict['date'] = date_replace
            timeline_dict['cases'] = cases
            timeline_dict['deaths'] = deaths 
            timeline_dict['recovered'] = recovered 
            data_dict['timeline'].append(timeline_dict)

        data_list.append(data_dict)
    
    new_list =[]
    for item in data_list:
        timeline= [timeline for timeline in item['timeline']]
        for i in timeline:
            new_dict = {

            }
            new_dict['country'] = item['country']
            new_dict['province'] = item['province']
            new_dict['deaths'] = i['deaths']
            new_dict['recovered'] = i['recovered']
            new_dict['cases'] = i['cases']
            new_dict['date'] = i['date']
            new_list.append(new_dict)
    ## send to pandas to further do data stuff
    df = pd.DataFrame.from_dict(new_list)
    df['date'] = df['date'].astype('datetime64')
    #print(df.dtypes)
    df1 = df['cases'].groupby(df['date'].dt.to_period('D')).sum()
    country_date_group = (df.groupby(['country', 'date']).agg({'cases':'sum', 'recovered': 'sum', 'deaths':'sum'})).reset_index().sort_values(['country', 'date']).reset_index().sort_values(['country', 'date'])
    country_date_group['date'] = country_date_group['date'].astype(str)
    global_date_group = (df.groupby([ 'date']).agg({'cases':'sum', 'recovered': 'sum', 'deaths':'sum'})).reset_index().sort_values([ 'date']).reset_index().sort_values([ 'date'])
    print(country_date_group)
    print(global_date_group)

    pandas_dict = country_date_group.to_dict('records')

    new_list = []

    deaths = [deaths['deaths'] for deaths in pandas_dict] 
    data_dict = {

    }
    count = [1,2,3,4] 

    for country in country_list:
        new_dict = {
            'timeline': []
        }
        for item in pandas_dict:
            if country == pandas_dict['country']:

    for item in new_list:
        print(item)

countries_historical_total()


