// random color generator 
var randomColor = function(){
    var rvalue = function() {
        return Math.round(Math.random()*255); 
    }
  
       return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
  }
  
  // get button element from DOM
  var button = document.querySelector('button');
  
  // create event listener to change background color on button click
  button.onclick = function(){
      this.style.backgroundColor = randomColor();
  }


//   function reverseWords(str) {
//     const allWords = str.split(" ")
//     return allWords.map(item => item.split("").reverse().join("")).join(" ")
//   }

//   console.log(reverseWords('Technical Interview Preparation'))


  // const reverseString = (str = null) => {
  //   let newStr = [];
  //   let string = "";
  //   let reverseStr = "";
  //   for (i = 0; i < str.length; i++) {
  //      if (str[i] == " ") {
  //          newStr.push(string);
  //          string = "";
  //      } else {
  //          string += str[i];
  //      }
  //    }
  //   if (string) {  
  //   newStr.push(string);
  //   } 
  //   for (i = newStr.length - 1; i >= 0; i--) {
  //        reverseStr += newStr[i] + " ";
  //   }
  //   return reverseStr;
  //   };
  //   let val = reverseString("Technical Interview Preparation");
  //   console.log(val);