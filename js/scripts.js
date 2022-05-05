function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaPrice = 10;
  if (this.size==="small") { 
    pizzaPrice += 1;
} else if (this.size==="medium") {
    pizzaPrice += 2;
} else if (this.size==="large") {
  pizzaPrice += 4;
}console.log(pizzaPrice);
}