
// flag is true.
function printPattern(n, m, flag)
{
     
    // Print m.
    console.log(m + " ");
 
    // If we are moving back toward the n and
    // we have reached there, then we are done
    if (flag == false && n == m)
        return;
 
    // If we are moving toward 0 or negative.
    if (flag)
    {
         
        // If m is greater, then 5, recur with
        // true flag
        if (m - 5 > 0)
            printPattern(n, m - 5, true);
             
        // Recur with false flag
        else
            printPattern(n, m - 5, false);
    }
     
    // If flag is false.
    else
        printPattern(n, m + 5, false);
}
 
// Testing Code
let n = 16;
printPattern(n, n, true);





 