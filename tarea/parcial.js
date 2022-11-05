let var1= 1 ;
let var2= 1001 ;
let i=var1;
 for (i>var1; i<=var2;i++)
 {
    if (i%2==0){
        console.log(i);
    }
 }

 //fibonacci? par
 function isFibonacci(n) {
    var fib,
      a = (5 * Math.pow(n, 2) + 4),
      b = (5 * Math.pow(n, 2) - 4)
  
    var result = Math.sqrt(a) % 1 == 0,
      res = Math.sqrt(b) % 1 == 0;
  
    
    if (result || res == true) 
    {
      fib = Math.round(n * 1.618); 
      console.log("The next Fibonacci number is " + fib);
  
    } else {
      console.log(`The given number ${n} is not a fibonacci number`);
    }
  }
  
  $('#fib').on("keyup change", function() {
    isFibonacci(+this.value)
  })