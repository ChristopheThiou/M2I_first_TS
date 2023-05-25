function hello(prenom:string) {
    console.log(`Bonjour ${prenom}`);
}
hello('Christophe');

function calc(a:number, b:number) {
    let sum = a + b;
    console.log(sum);
}
calc(4, 32);

function calcul(a:number, b:number, operateur:string) { 
    if (operateur === '+') {
        let sum1 = a + b;
        return sum1;
    }if (operateur === '-') {
        let sum2 = a - b;
        return sum2;
    }if (operateur === '*') {
        let sum3 = a * b;
        return sum3;
    }if (operateur === '/') {
        if(a === 0){
            alert('NON FRÈRE');
        }
        if(b === 0){
            alert('NON FRÈRE');
        }
        let sum4 = a / b;
        return sum4;
    }else
        alert('NON');
}

console.log(calcul(5, 60, '/'));

