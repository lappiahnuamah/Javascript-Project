

//Power Function
let power = (base, exponent) => {

    //base case
    if(exponent === 0) return 1;

    return base * power(base, exponent -1);
}


console.log(power(0.2,2))
console.log(power(1/5,3))