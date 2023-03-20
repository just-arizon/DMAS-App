const refreshBtn = document.getElementById("refresh-btn");
 const userInputOne = document.querySelector("#inp-one");
    const userInputTwo = document.querySelector("#inp-two");
const submitToCheck = document.querySelector(".custom-btn");

const listItems = document.querySelectorAll("#myList li");
const outputDiv = document.querySelector("#operator");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    outputDiv.textContent = item.textContent;
    if (item.textContent == "Addition") {
      outputDiv.textContent = "+";
    }
    if (item.textContent == "Subtraction") {
      outputDiv.textContent = "-";
    }
    if (item.textContent == "Multiplying") {
      outputDiv.textContent = "*";
    }
    if (item.textContent == "Division") {
      outputDiv.textContent = "/";
    }
  });
});

submitToCheck.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  if (outputDiv.textContent === "+") {
    function Addiition(num1,num2){
        var sum = Number(num1) + Number(num2);
        return sum
    }
    document.querySelector("#demo").innerHTML = Addiition(userInputOne.value,userInputTwo.value)
  }
  if (outputDiv.textContent === "-") {
    function Subtraction(num1,num2){
        var minus = Number(num1) - Number(num2);
        return minus
    }
    document.querySelector("#demo").innerHTML = Subtraction(userInputOne.value,userInputTwo.value)
  }
  if (outputDiv.textContent === "*") {
    function Multiplication(num1,num2){
        var multiply = Number(num1) * Number(num2);
        return multiply
    }
    document.querySelector("#demo").innerHTML = Multiplication(userInputOne.value,userInputTwo.value)
  }
  if (outputDiv.textContent === "/") {
    function Division(num1,num2){
        var divide = Number(num1) / Number(num2);
        return divide
    }
    document.querySelector("#demo").innerHTML = Division(userInputOne.value,userInputTwo.value)
  }
});

refreshBtn.addEventListener("click", () => {
  location.reload();
});
