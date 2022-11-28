var students = [
    { 
      name: "Mary", 
      age: 10, 
      grades: [90, 88, 95]
    }, 
    {
      name: "Joseph", 
      age: 11, 
      grades: [80, 100, 90, 96]
    }
  ];



var getAverages = function(students){
    var averages = [];
    var sum = 0;
    //write your code here
    for(var i = 0; i < students.length; i++){
      for (var j = 0; j < students[i]['grades'].length; j++){
        sum = students[i]['grades'][j] + sum;
        var ave = sum / students[i]['grades'].length;
      }
      averages.push(ave)
      sum = 0
    }
    return averages;
  }

console.log(getAverages(students))



// var getAverages = function(students){
//     var averages = [];
//     var sum = 0;
//     var scores = 0;
//     console.log(students.length);
//     for (i = 0; i < students.length; i++){
//        scores = students[i]["grades"];
//        console.log(scores);
//        for (j =0; j < scores.length; j++){
//          sum = sum + scores[j];
//          console.log(sum);
  
//        }
//        averages[i] = sum/ scores.length;
//        sum = 0;
//     }
//     return averages;
//   }