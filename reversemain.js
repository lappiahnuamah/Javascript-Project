

// const reverseMain = (str = null)=>{
//     var string = ' ';
//     var strSplit = str.split(" ");
//     console.log(strSplit);
//     // console.log(strSplit.length);

//     while(strSplit.length != 0){
//         string += strSplit.pop() + " ";    
//     }

//     // for (var i=0; i <= strSplit.length; i++){
//     //     string += strSplit.pop() + " ";    
//     // }
//     console.log(string)
// }

// reverseMain('Technical Interview Preparation')

// var martha = ['even', 'try', 'fake']
// console.log(martha.pop())
// console.log(martha)



const reverseMain = (str = null)=>{
    var string = ' ';
    var strSplit = str.split(" ");
    console.log(strSplit);

    while(strSplit.length != 0){
        string += strSplit.pop() + " ";    
    }

    console.log(string)
}


reverseMain('Technical Interview Preparation')