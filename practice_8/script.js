// document.getElementById("google").addEventListener("click", function () {
//   //let url = "http://www.google.com/search?q=javascript";
//   window.location = "http://www.google.com";
//   win.focus();
// });

// let a = await con.json()
// return a;

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 5000);

setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 1000);
