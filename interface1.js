// elementsData
const input1Data = document.getElementById("n1");
const input2Data = document.getElementById("n2");
const formData = document.getElementById("formId");
const inputSend = document.getElementById("send");
const htmlEl2 = document.querySelector("#resultado");
const container = document.querySelector("body");
const getDataF = function () {
  let result = input1Data.value * input2Data.value;
  htmlEl2.innerHTML = `${result}`;
  input1Data.value = "";
  input2Data.value = "";
  setTimeout(function () {
    htmlEl2.innerHTML = "Resultado";
  }, 3000);
};

inputSend.addEventListener("click", function (e) {
  e.preventDefault();
  getDataF();
});

setTimeout(function () {
  htmlEl2.innerHTML = "Resultado";
  htmlEl2.style.color = "red";
}, 5000);

// console.log(getDataF());

// console.log(input2Data.value);
