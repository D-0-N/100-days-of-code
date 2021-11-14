process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});


process.stdin.on("end", function () {
    //write your code within the function
    let rev=input.split("").reverse().join("")
    if(input.toLowerCase()===rev.toLocaleLowerCase()){
        console.log(true)
    }else{
        console.log(false)
    }
});