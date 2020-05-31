from multiprocessing import Pool, Process 
import time 

def func1():
    print('func1 ran')
    time.sleep(5)

def func2():
    print('func2 ran')
    time.sleep(5)

def func3():
    print('func3 ran')
    time.sleep(5)

def func4():
    print('func4 ran')
    time.sleep(5)

if __name__ == '__main__':
    start_time = time.time()
    p1 = Process(target=func1)
    p1.start()
    p2 = Process(target=func2)
    p2.start()
    p3 = Process(target=func3)
    p3.start()
    p4 = Process(target=func4)
    p4.start()

    p1.join()
    p2.join()
    p3.join()
    p4.join()
    end_time = time.time() - start_time

    print(f'ended at {end_time}')