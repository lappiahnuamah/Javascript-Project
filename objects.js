// var createStudent = function(name, age) {
//     var student = {
//       name: name, 
//       age: age
//     }
//     return student;
//   }
  
//   var student1 = createStudent("Mary", 10);
//   var student2 = createStudent("Michael", 12);
  
//   console.log("Students:", student1.name, student2.name);


  var createStudent = function(name, age) {
    var student = {
      name: name, 
      age: age, 
      birthday: function(){
       this.age++;
      }
    }
    return student;
  }
  
  var student1 = createStudent("Mary", 10);
  var student2 = createStudent("Michael", 12);
  
  student1.birthday();
  console.log(student1.age)