function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaPriceTotal = 10;
  if (this.size==="Small") { 
    pizzaPriceTotal += this.topping *3;
  } else if (this.size==="Medium") {
    pizzaPriceTotal += this.topping *3 + 3;
  } else if (this.size==="Large") {
    pizzaPriceTotal += this.topping *3 + 5;
  } else if (this.size==="Stuffed") {
    pizzaPriceTotal += this.topping *3 + 6;
  } 
  return (pizzaPriceTotal);
}

function displayPizzaOrder(pizzaToDisplay) {
  let pizzaorder = $("p#output");
  let htmlForPizzaOrder = "Your order:" + " " + pizzaToDisplay.size + " " + "pizza with" + " " + pizzaToDisplay.topping + " " + "topping." + " " + "Total: $" + pizzaToDisplay.pizzaPrice();
  pizzaorder.html(htmlForPizzaOrder);
}

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    let newTopping = [];
    let newSize = $("input:radio[name=size]:checked").val();
    newTopping = $('input[type="checkbox"]:checked').length;
    let newPizza = new Pizza(newSize, newTopping);
    let finalPizzaTotal = newPizza.pizzaPrice();
    displayPizzaOrder(newPizza);
  });
});    



