const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = 10;
let b = 20;
rl.question('Enter a: ', (inputA) => {
    let a = Number(inputA);

    rl.question('Enter b: ', (inputB) => {
        let b = Number(inputB);
        rl.question('Enter Operator:', (input) => {
            let operator = input;
            if (input === "+") {
                console.log(a+b);
            } 
            if (input === "-") {
                console.log(a-b)        
            }
            if (input === "*") {
                console.log(a*b)
            }
            if (input === "/") {
                console.log(a/b)
            }
            if (input === "**") {
                console.log(a**b)
            }
            if (input === "%") {
                console.log(a%b)
            }

            rl.close();
        });
    });
});


