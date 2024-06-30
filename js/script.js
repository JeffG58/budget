var tripInfoButtom = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function (){
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What will your accommodation be?"));
    var numDays = Number(prompt("How many days will your trip last?"));   

calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodastion, numDays){
    var daily = ((totalBudget - accommodastion) / numDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`

};
tripInfoButtom.addEventListener("click", tripInfo);
