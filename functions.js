//functions can be stored in an object as property values
var operations = {
    sum: function(x, y){ return x + y; }, 
    subtract: function(x, y){ return x - y; }, 
    multiply: function(x, y){ return x * y; }, 
    divide: function(x, y){ return x / y; }
  };
  
  //functions can be called from an object by accessing a property (dot or bracket)
  //and using then the () operator
  console.log(operations.multiply(5, 10));
  console.log(operations["multiply"](5, 10));