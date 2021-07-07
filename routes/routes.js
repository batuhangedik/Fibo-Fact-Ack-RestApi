var appRouter = function(app){
    app.get("/fibonacci",function(req,res){
        if(!req.query.sayi){
            return res.send({status:400,"message":"Sayı Eksik!"});
        }
        if(req.query.sayi<0){
            return res.send({status:400,"message":"Sayı pozitif olmalı!"});
        }
        else{
            result= fibonacci(req.query.sayi);
            return res.send({"status":200,"result":result});
        }
    });

    app.get("/factorial",function(req,res){
        if(!req.query.sayi){
            return res.send({status:400,"message":"Sayı Eksik!"});
        }
        if(req.query.sayi<0){
            return res.send({status:400,"message":"Sayı pozitif olmalı"});
        }
        else{
            result= factorial(req.query.sayi);
            return res.send({status:200,"result":result});
        }
    });

    app.get("/ackermann",function(req,res){
        if(!req.query.m || !req.query.n){
            return res.send({status:400,"message":"Sayı Eksik!"}); 
            
        }
        if(req.query.m<0 || req.query.n<0){
            return res.send({status:400,"message":"Sayı pozitif olmalı"});
        }
        else{
            result= ackermann(req.query.m,req.query.n);
            return res.send({"status":200,"result":result});
        }
    });
}

function fibonacci(num){

	if (num == 0) {
		return 0;
	}
	else if (num == 1) {
		return 1;
	}
	else {
		//console.log(num-2,"+" ,num-1);
		return Number(fibonacci (num-2)) + Number(fibonacci (num-1));
	}
}

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


function ackermann(m,n)
{
    if (m == 0)
        {
            return n + 1;
        }
        else if((m > 0) && (n == 0))
        {
            return ackermann(m - 1, 1);
        }
        else if((m > 0) && (n > 0))
        {
            return ackermann(m - 1, ackermann(m, n - 1));
        }else
        return n + 1;
}

module.exports = appRouter;