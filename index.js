<<<<<<< HEAD
function day(){
    document.getElementById("day").style.transition='-9s';
    document.getElementById("day").style.color=green;
}

function factorial(n){
    if(n==0){
        result = 1;
        document.write(result);
    }else{
        result = factorial(n-1)*n;
        document.write(result)
    }
}
 a = 10; b=5;
var ch = prompt("Enter a number: ");
switch(ch){
    case 1:
        document.write("Sum is : " + (a+b));
        break;
    case 2:
        document.write("Division is: "+(a/b));
        break;
    case 3:
        document.write("Invalid");
        break;
=======
function day(){
    document.getElementById("day").style.transition='-9s';
    document.getElementById("day").style.color=green;
}

function factorial(n){
    if(n==0){
        result = 1;
        document.write(result);
    }else{
        result = factorial(n-1)*n;
        document.write(result)
    }
}
 a = 10; b=5;
var ch = prompt("Enter a number: ");
switch(ch){
    case 1:
        document.write("Sum is : " + (a+b));
        break;
    case 2:
        document.write("Division is: "+(a/b));
        break;
    case 3:
        document.write("Invalid");
        break;
>>>>>>> First Commit
}