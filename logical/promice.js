function fetch_data1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from fetch1")
        }, 1000)
    })
}
function fetch_data2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from fetch 2")
        }, 2000)
    })
}

function fetch_data3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Data from fetch 3")
        }, 3000)
    })
}

Promise.all([fetch_data1(), fetch_data2(), fetch_data3()]).then((result)=>{
    console.log("data from Promise All");
    console.log("Result:", result);
}).catch((error)=>{
    console.log("Error:", error);
})