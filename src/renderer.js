window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom content loaded");
  //getUsers();
});

document.getElementById("muscle-groups").addEventListener("click", async () => {
  // ok so you can inject html directly like on line 5, but this is really autistic and surely there's a better way.
  // ideally what i'd like to do is something like this V
  // document.getElementById("content").innerHTML = "<muscle-groups>";
  document.getElementById("content").innerHTML = "<h1> Muscle groups ui goes here </h1>";
});

document.getElementById("register").addEventListener("click", async () => {
  document.getElementById("content").innerHTML = "<h1> Register ui goes here </h1>";
});

document.getElementById("store").addEventListener("click", async () => {
  document.getElementById("content").innerHTML = "<h1> Froocoin store goes here? </h1>";
});