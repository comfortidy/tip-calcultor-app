let billElement = document.getElementById("bill-input");
let totalBill = 0;
let tipElement = document.querySelectorAll(".tip");
let tipAmount = document.getElementById("tip-amount");
let percent = 0;
let numberOfPeopleElement = document.getElementById("people-input");
let numberOfPeople = 0;
let totalElement = document.querySelector("#total");
let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", reset);

function reset() {
totalElement.innerHTML = 0;
billElement.value = 0;
totalBill = 0;
percent = 0;
numberOfPeopleElement.value = 0;
tipElement = 0;
tipAmount.innerHTML = 0;
}

tipElement.forEach(button => {
    button.addEventListener('click', () => {
         percent = button.innerText;
        calculateTip(percent);
    })
} 
);

billElement.addEventListener("click", getValue);


function getValue() {
    totalBill = billElement.value;
    console.log(billElement.value);
    totalElement.innerHTML = totalBill;
}
function  calculateTip(percent) { 
    percent = percent.substring(0, percent.length-1); 
    let tip =  totalBill/percent;
    tip = tip.toFixed(2);
    tipAmount.innerHTML = tip;  
    console.log(tip);
   console.log(percent);
    console.log(totalBill);
   
  } 
  

function getNumber() {
    console.log(percent);
    numberOfPeople = numberOfPeopleElement.value;
    console.log(numberOfPeople);
    let total = totalBill/numberOfPeople;
    total = total.toFixed(2);
    console.log(total);
    totalElement.innerHTML = total;
    percent = percent.substring(0, percent.length-1);
    let newTip =  (total/percent)/10;
    
    console.log(newTip);
    tipAmount.innerHTML =newTip;  
}



numberOfPeopleElement.addEventListener("click",getNumber);































































/*let numberOfPeople = 1;
totalBill = totalBill/numberOfPeople;
let totalElement = document.querySelectorAll(".tip");
let total = document.getElementById("total");

totalElement.forEach(button => {
    button.addEventListener('click', () => {
        let percent = button.innerText;
        calculateTip(percent);
    })
} 
);

totalElement.addEventListener("click", getValue);
function getValue() {
    totalBill = totalElement.value;
    console.log(totalElement.value);
}

function  calculateTip(percent) {
    percent = percent.substring(0, percent.length-1); 
    let tip =  totalBill/percent;
    total.innerHTML = tip;  
    console.log(tip);
    console.log(percent);
    console.log(totalBill);
}*/




