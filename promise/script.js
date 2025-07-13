/*
let promise = new Promise((resolve, reject)=>{
    alert("Hello");
    resolve(56);
})
console.log("Hello one");
setTimeout(()=>{
    console.log("Hello two");
},3000)

console.log("Hello three");
console.log(promise);
*/

/*
let p1 = new Promise((resolve, reject)=>
{
    console.log("Promise pending...");
    setTimeout(()=>{
        console.log("I am fulfilled");
        resolve(true);
    },2000)
    return "first"
})
*/
/*
let p2 = new Promise((resolve, reject)=>
{
    console.log("Promise pending...");
    setTimeout(()=>{
        console.log("I am fulfilled");
        resolve(true);
    },3000)
    return "second"
})
*/

/*
let p3 = new Promise((resolve, reject)=>
{
    console.log("Promise pending...");
    setTimeout(()=>{
        console.log("I am rejected");
        reject(new Error("I am an error"));
    },4000)
})
*/

/*
p1.then((value)=>
{
    console.log(value);
})
p2.catch((error)=>
{
    console.log("some error occured in p2");
})
*/

/*
p1.then((value)=>
{
    console.log(value);
},(error)=>
{
    console.log(error);
})
*/

//Promise Chaining

/*
p1.then((value)=>
{
    console.log(value);
    let p3 = new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            console.log("the value is: " + value);
            resolve("promise 3");
        },3000)
    })
    return p3;
}).then((value)=>
{
    //console.log("we are done");
    console.log(value);
    return "next";
}).then((error)=>
{
    //console.log("we are absolutely done now");
    console.log(value);
    reject(new Error("got some errors"));
    return error
}).catch((error)=>
{
    console.log(error);
    
})
*/

/*
let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("this is part 4");
    },1000)
})

let p5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("this is part 5");
        console.log(remon);
    },2000)
})

let p6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("this is part 6");
    },3000)
})

let promise_all = Promise.all([p4,p5,p6])
// let promise_all = promise.allSetteled([p4,p5,p])
// let promise_all = Promise.any([p4,p5,p6])


promise_all.then((value)=>{
    console.log(value);
})
*/


//topic: Async and Await

//async function remon() {
    
    // let delhiWeather = new Promise((resolve,reject)=>
    // {
    //     setTimeout(()=>{
    //         resolve("29 degree")
    //     },2000)
    //     return;
    // })
    // let dhakaWeather = new Promise((resolve,reject)=>
    // {
    //     setTimeout(()=>{
    //         resolve("26 degree")
    //     },5000)
    //     return;
    // })
    
    /*
    delhiWeather.then((value)=>
    {
        console.log(value);
    });
    dhakaWeather.then((value)=>
    {
        console.log(value);
    });
    */
    /*
    let delhiW = await delhiWeather;
    let dhakaW = await dhakaWeather;
    return [delhiW,dhakaW];
    */
//}
/*
console.log("Welcome to weather controll room");
remon().then((value)=>{
    console.log(value);
});
*/
/*
const abrar =async ()=>{
    setTimeout(()=>{
        console.log("Hey I am abrar");
    },3000)
}
const tamim =async ()=>{
    setTimeout(()=>{
        console.log("Hey I am Tamim");
    },5000)
}

const main1 =async ()=>{
    console.log("welcome to weather controll room");
    let a = await abrar();
    let b = await tamim();
}

main1();
*/