let balance = 0;

function login() {
  alert("Login Successful");
}

function deposit() {
  let amount = document.getElementById("depositAmount").value;
  balance += Number(amount);
  document.getElementById("balance").innerText = "₹" + balance;
}

function withdraw() {
  let amount = document.getElementById("withdrawAmount").value;
  balance -= Number(amount);
  document.getElementById("balance").innerText = "₹" + balance;
}