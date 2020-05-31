
#%% small test
import requests
from datetime import datetime 
import json

res = requests.get("http://localhost:8080")
print(res.content)

payload = "TDA" 

res = requests.post("http://localhost:2000", data=payload)
json_data = json.loads(res.content)

print(json_data)

res = requests.get('http://localhost:8080/query?name=hello&age=26')
print(res.content)

res = requests.get('http://localhost:8080/path/test/55')
print(res.content)

#%% multiple request against limiter
import requests
from datetime import datetime
import json

payload = "TDA" 
count = 0 
time_start = datetime.now() 

for i in range(0, 70):
    res = requests.post("http://localhost:2000",data=payload)
    print(res.content)
    count += 1
    print(count)

count = 0 

for i in range(0,70):
    res = requests.get("http://localhost:2000")
    print(res.content)
    count += 1
    print(count)

time_end = datetime.now() - time_start
print("**************************")
print(time_end)
print(f"requests made : {count}")

#%% multiple request for benchmarking 
import requests
from datetime import datetime
import json
from multiprocessing import Pool

payload = "TDA" 
count = 0 
time_start = datetime.now() 
gin_api = "http://localhost:2000"

for i in range(0, 20000):
    res = requests.post(gin_api ,data=payload)
    print(res.content)
    count += 1
    print(count)

flask_api = ""

for i in range(0, 20000):
    res = requests.post(flask_api, data=payload )

time_end = datetime.now() - time_start
print("**************************")
print(time_end)
print(f"requests made : {count}")
# %% 2 api benchmarking
import requests
from datetime import datetime
import json
from multiprocessing import Process, current_process


payload = "TDA" 

gin_api = "http://192.168.86.249:2000"
flask_api = "http://192.168.86.249:2000"

def gin_test():
    count = 0 
    time_start = datetime.now() 
    for i in range(0, 20000):
        res = requests.post(gin_api ,data=payload)
        print(res.content)
        count += 1
        print(count)

    time_end = datetime.now() - time_start
    print("**************************")
    print(time_end)
    print(f"requests made : {count}")

def flask_test():
    count =0
    time_start = datetime.now() 
    for i in range(0, 20000):
        res = requests.get(flask_api, data=payload )

    time_end = datetime.now() - time_start
    print("**************************")
    print(time_end)
    print(f"requests made : {count}")

if __name__ == "__main__" :
    processes = []

    flask_process = Process(target=flask_test)
    gin_process = Process(target=gin_test)

    processes.append(flask_process)
    processes.append(gin_process)

    flask_process.start()
    gin_process.start()

# %% 1 api benchmarking
import requests
from datetime import datetime
import json
from multiprocessing import Process, current_process


payload = "TDA" 

api = "http://192.168.86.249:2000"

def gin_test():
    count = 0 
    time_start = datetime.now() 
    for i in range(0, 10000):
        res = requests.get(api,data=payload)
        print(res.content)
        count += 1
        print(count)

    time_end = datetime.now() - time_start
    print("**************************")
    print(time_end)
    print(f"requests made : {count}")

gin_test()