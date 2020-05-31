dates = ['04-20-2020', '04-21-2020']

items = [{ 
    'tweets': 'blabhalbhjal',
    'date': '04-20-2020',
},
    {
        'tweets': 'blahh1231231balblah',
        'date': '04-20-2020',
    },
    {
        'tweets': 'blahhbalblahaaaa',
        'date' : '04-21-2020'
    },
    {
        'tweets': 'blahhbalblah',
        'date': '04-22-2020',
    },
]

for i in range(0, len(dates)):
    for item in items:
        if dates[i] == item['date']:
            print(item)

# %%
import requests
url = 'https://google.com'
res = requests.get(url)
print(res.content)

