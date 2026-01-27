let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector(".js-output").innerHTML = calculation;

  localStorage.setItem("calculation", calculation);
}

function equalTo() {
  calculation = eval(calculation);
  console.log(calculation);
  document.querySelector(".js-output").innerHTML = calculation;
}

function clearFunction() {
  calculation = "";
  document.querySelector(".js-output").innerHTML = "";
  localStorage.setItem("calculation", "");

  console.log("clicked");
}
