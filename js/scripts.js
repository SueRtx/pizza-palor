function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaPrice = 10;
  if(this.size==="small")
    return pizzaPrice;
}