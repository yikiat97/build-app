<h1>Node pros and cons:</h1>

<b>pros:</b> 
1. I/O bound Application
2. Data Streaming Application
3. Real time Application
4. JSON APIs based Application

<b>Cons:</b>
1. not for CPU intensive application cause single thread

Single Thread -> a unit of operations that our CPU has to perform for us

Event loops -> in thread, event loop is generated to schedule what operation the thread should be perform at certain time. like call back wait until the function is date den call another function, the loop will keep looping to find such callback function

Steps on event loop:
1. anything scheduled with setTimeout() or setInterval() will be execute here
2. Pending OS task are executed, check for callbacks that are ready to be called
3. pause the execution and wait for new events to occurs
4. check if function related to pending timers realted to setImmediate() function are ready to be called
5. manage the close events

Stateless -> calls can be made independently and contains all the necessary data to be successful (only in client side), only use HTTP request like POST GET etc.