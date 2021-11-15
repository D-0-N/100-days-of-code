process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});



process.stdin.on("end", function () {
    const events=require('events')
    // Enter your code here
    const [n1,n2]=input.split(" ")
    const addMultiples=(n1,n2)=>{
        let n1sum=0
        let n2sum=0
        let m1=1
        let m2=1
        while(n1*m1<=1000){
            n1sum+=n1*m1
            m1++
        }
        while(n2*m2<=1000){
            n2sum+=n2*m2
            m2++
        }
        setTimeout(()=>{
            console.log(n1sum+n2sum)
        },2000)
    }
    const MyEvent=new events.EventEmitter()
    const logInfo=()=>{
        console.log(`Multiples of ${n1} & ${n2}`)
        addMultiples(n1,n2)    
    }
    MyEvent.on('start',logInfo)
    MyEvent.emit('start')    
    
});