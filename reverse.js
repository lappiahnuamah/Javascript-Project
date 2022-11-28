
  const reverseString = (str = null) => {
    let newStr = [];
    let string = "";
    let reverseStr = "";
    for (i = 0; i < str.length; i++) {
        console.log(str.length)
       if (str[i] == " ") {
           newStr.push(string);
           string = "";
       } else {
           string += str[i];
       }
     }
    if (string) {  
    newStr.push(string);
    } 
    for (i = newStr.length - 1; i >= 0; i--) {
         reverseStr += newStr[i] + " ";
    }
    return reverseStr;
    };
    let val = reverseString("Technical Interview Preparation");
    console.log(val);


