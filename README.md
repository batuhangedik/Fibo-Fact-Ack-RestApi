# Fibonacci , Factorial , Ackermann Functions RestApi

For developing this project, i used node.js language and express framework.
First of all, I wrote down the fibonacci, factorial and ackermann functions.

> Fibonacci

```js
function fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
```

> Factorial

```js
var f = [];
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
}
```

> Ackermann

```js
function ackermann(m, n) {
  if (m == 0) {
    return n + 1;
  } else if (m > 0 && n == 0) {
    return ackermann(m - 1, 1);
  } else if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  } else return n + 1;
}
```

Then I turned these functions into Restful service that returns Json with Rest Api.
- For the first,i created a folder

> run > cmd

> cd Desktop

> mk dir akinon-test-case

Next we need to start the npm module from the terminal in vscode.
> npm init -y

To include express after installations are complete;

> npm install express

Done.

Then I created a routes folder in the project directory and created the routes.js file in it and the app.js file in the root project directory.

We perform express, server and port settings in app.js.

The functions and the http methods that will run them will be implemented in the route.js file.

We will write our http methods in `var appRouter = function(app){}`.

- Get method for Fibonacci;

```js
app.get("/fibonacci", function (req, res) {
  if (!req.query.sayi) {
    return res.send({ status:400, message: "Sayı Eksik!" });
  }
  if (req.query.sayi < 0) {
    return res.send({ status:400, message: "Sayı pozitif olmalı!" });
  } else {
    result = fibonacci(req.query.sayi);
    return res.send({ status:200, result: result });
  }
});
```

- Factorial

```js
app.get("/factorial", function (req, res) {
  if (!req.query.sayi) {
    return res.send({ status:400, message: "Sayı Eksik!" });
  }
  if (req.query.sayi < 0) {
    return res.send({ status:400, message: "Sayı pozitif olmalı" });
  } else {
    result = factorial(req.query.sayi);
    return res.send({ status: 200, result: result });
  }
});
```

- Ackermann

```js
app.get("/ackermann", function (req, res) {
  if (!req.query.m || !req.query.m) {
    return res.send({ status:400, message: "Sayı Eksik!" });
  }
  if (req.query.m < 0 || req.query.n < 0) {
    return res.send({ status:(400), message: "Sayı pozitif olmalı" });
  } else {
    result = ackermann(req.query.m, req.query.n);
    return res.send({ status: 200, result: result });
  }
});
```


Let's send the requests and test it. I used the Postman application for this.

First of all, we start the server by writing `node.` in the terminal.

```json
PS C:\Users\batuh\Desktop\akinon-test-case> node .
3000... portu dinleniliyor
```

Now let's send the request in Postman

> `GET http://localhost:3000/fibonacci?sayi=9`

Result:

```json
{
  "status": 200,
  "result": 34
}
```

Lets try with another number:
> `GET http://localhost:3000/fibonacci?sayi=12`

Result:

```json
{
  "status": 200,
  "result": 144
}
```

For the Factorial:

> `GET http://localhost:3000/factorial?sayi=6`

Result:

```json
{
  "status": 200,
  "result": 720
}
```

For another number:

> `GET http://localhost:3000/factorial?sayi=8`

Result:

```json
{
  "status": 200,
  "result": 40320
}
```

Finally, let's test the Ackermann function

> `GET http://localhost:3000/ackermann?m=2&n=3`

Result:

```json
{
  "status": 200,
  "result": 9
}
```

Let's test it with another dual:
> `GET http://localhost:3000/ackermann?m=1&n=2`

Result:

```json
{
  "status": 200,
  "result": 4
}
```

### Error Situations

- Let's see what the result is when the request has written wrong.

> ` GET http://localhost:3000/fibonacci?sayi=`

```json
{
  "status": 400,
  "message": "Sayı Eksik!"
}
```

>` GET http://localhost:3000/factorial?sayi=-1`

```json
{
  "status": 400,
  "message": "Sayı pozitif olmalı!"
}
```

>` GET http://localhost:3000/ackermann?m=-1&n=0`

```json
{
  "status": 400,
  "message": "Sayı pozitif olmalı!"
}
```



For our 3 algorithms, we run it with http queries and get a return in json format..

### Response Size && Response Time

- Fibonacci  

Response Time:

![img](./img/fib-restime.PNG "img")

Response Size:

![img](./img/fib-resize.PNG "img")

- Factorial 

Response Time:

![img](./img/factorial-restime.PNG "img")

Response Size:

![img](./img/factorial-resize.PNG "img")

- Ackermann 

Response Time:

![img](./img/ack-restime.PNG "img")

Response Size:

![img](./img/ack-resize.PNG "img")

### -------------------------------------------------------------

To run this project on your own computer

> git clone https://github.com/batuhangedik/Fibo-Fact-Ack-RestApi.git

> cd RESTAPINODEJS

> npm install

> node .

you can follow these steps.
But nodejs must be installed on your computer.