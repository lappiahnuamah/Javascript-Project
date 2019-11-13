function time(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.write("Time Updater"+"<br>");
    document.write(hours + ":"+ minutes+ ":"+ seconds+ "<br>");
}

setInterval("time()",1000);