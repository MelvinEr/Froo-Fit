document.getElementById("muscle-groups").addEventListener("click", async () => {
  document.getElementById("content").innerHTML = "Muscle group ui goes here";
});

document.getElementById("register").addEventListener("click", async () => {
  document.getElementById("content").innerHTML = "Register ui goes here";
});

document.getElementById("store").addEventListener("click", async () => {
    document.getElementById("content").innerHTML = "Froocoin store goes here?";
  });

document.addEventListener('DOMContentLoaded', async () => {
    let names = window.api.getNames();
    let divNames = document.getElementById("names");
    let nameString = names.join("<br />");
    divNames.innerHTML = nameString;
})