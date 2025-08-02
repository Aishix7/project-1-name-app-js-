console.log("Hello");
function getName() {
  let userName = prompt("Enter your name please : ");

  if (userName) {
    document.getElementById("get").innerText = userName;
  }
  if (!userName) {
    alert("please enter something!");
  }
}
