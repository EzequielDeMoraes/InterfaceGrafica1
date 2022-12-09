// elementsData
const input1Data = document.getElementById("n1");
const input2Data = document.getElementById("n2");
const formData = document.getElementById("formId");
const inputSend = document.getElementById("send");
const htmlEl = document.querySelector("#h2Change");

htmlEl.innerHTML = "2";
const getDataF = function () {
  let result = input1Data.value * input2Data.value;
  htmlEl.innerHTML = `${result}`;
  input1Data.value = "";
  input2Data.value = "";
};

inputSend.addEventListener("click", function (e) {
  e.preventDefault();
  getDataF();
});
// console.log(getDataF());

// console.log(input2Data.value);
