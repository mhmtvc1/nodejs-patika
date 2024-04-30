const arguments= process.argv.slice(2)

function primeNumbers(lowNumber, highNumber) {



    if (lowNumber==0 || lowNumber==1) {
        lowNumber=2
    }
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime=true

        for (let j = 2; j <= i; j++) {

            if (i%j ===0 && j!==i) {
                isPrime=false
                
            }            
        }

        if (isPrime) {
            console.log(i);
            
        }
        
    }
    
}


primeNumbers(arguments[0] *1, arguments[1]*1)

console.log(process.argv[1]);

// console.log(process.argv.slice(2));

// var number = 12 , number1= 6

// var number2 =number%number1
// console.log(number2);



