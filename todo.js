// var checkStatus = document.getElementById('checkStatus');
// var checkbox = document.getElementById('checkbox');

// checkbox.onchange = function(){ 
//   if(this.checked) { 
//     checkStatus.innerHTML = "Checked";
//   } else {
//  		checkStatus.innerHTML = "Not Checked";
//   }
// }


// write your code here

var ul = document.getElementById('todoList');
var input = document.getElementById('todo');

var button = document.getElementById('addTodo');

button.onclick = function(){
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li)
}
