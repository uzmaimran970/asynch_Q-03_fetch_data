// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.


function fetchData(){
    return new Promise((res:any,rej:any)=>{
        setTimeout(()=>{
            res("data fetch successfully!")
        },1000)
        console.log(" this console for checking 1 sec delay")
        
    });
}
fetchData().then((response:any)=>{
    console.log(response);
});



