process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    largestPrimeFactor(input)
});

function largestPrimeFactor(number){
    //enter your code here    
    var i=2;
    while (i<=number){
        if (number%i == 0){
            number/=i;    
        }else{
            i++;
        }
    }
    console.log(i);
}