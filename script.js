let mealCost = 25.99;
let tip = 0.15;
let tipAmount = tip * mealCost;
let total = mealCost + tipAmount;
let numOfPeople = 2;
console.log(
  `Your meal cost $${mealCost.toFixed(2)} and with $${tipAmount.toFixed(
    2
  )} tip, it totals $${total.toFixed(2)}. Your share is $${(
    mealCost / numOfPeople
  ).toFixed(2)}.`
);
