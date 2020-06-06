# %%
#from twitterwebhook.twitter_scrape_flask import TwitterScraper

#scrape = TwitterScraper('realDonaldTrump').twitter_scrape()


#print(scrape)


import requests
import bs4 as bs

url= ('https://twitter.com/i/profiles/show/realDonaldTrump/timeline/tweets?include_available_features=1&include_entities=1&max_position=1268260381828485120&reset_error_state=false')

res = requests.get(url, timeout=(1) ) 
soup = bs.BeautifulSoup(res.content, 'lxml')
search = soup.find('div')

print(search)

#%%

count = [1,2,3,4,5]
some_list  = []

for item in count:
    some_dict = {

    }
    print(item)
    some_dict['country'] = item
    some_list.append(some_dict)
    print(some_list)