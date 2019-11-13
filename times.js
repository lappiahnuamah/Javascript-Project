n = 12;
if(n!=0){
    for(i=1;i<=12;i++ ){
        for(j=1;j<=12;j++){
            document.write(n+'*'+j+'='+n*j+"<br>");
        }
        n=n-1;
        document.write("<br>")
    }
}
