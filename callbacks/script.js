/*
function loadScript(src, callback1,callback2){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: " +src);
        callback1();
        callback2();
    }
    document.body.appendChild(script);
}
function hello()
{
    console.log("hello, sir");
}
function Greethigs()
{
    console.log("good morning");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello,Greethigs);
*/


/*
// if throug an error
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    callback(null,src)
    script.onerror = function(){
        console.log("Error loading script with SRC: " +src);
        callback(new Error("src got some errors"));
        
    }
    document.body.appendChild(script);
    
}
function hello(error,src)
{
    if(error)
    {
        console.log(error);
    }
    else console.log("hello, sir");
}
function Greethigs()
{
    console.log("good morning");
}
loadScript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello);
*/