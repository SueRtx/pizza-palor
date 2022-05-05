function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaPrice = 10;
  if (this.size==="small") { 
    pizzaPrice += this.topping *2;
} else if (this.size==="medium") {
    pizzaPrice += this.topping *3 + 3;
} else if (this.size==="large") {
  pizzaPrice += this.topping *4 + 4;
}console.log(pizzaPrice);
}