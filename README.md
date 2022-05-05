Describe: Pizza();
Test 1: "It should return pizza size and topping after user order small cheese pizza.";
Code: Pizza(size, topping);
Expected Output: Pizza {size: "Small", topping: "Cheese"};

Describe: Pizza.prototype.pizzaPrice();
Test 2: "It should return the pizza price after the user orders a small cheese pizza";
Code: userPizza.Pizza.Price(small);
Expected Output: 10.99;

Test 3: "It should return the pizza price after the user orders a medium cheese pizza";
Code: userPizza.Pizza.Price(medium);
Expected Output: 12.99;

Test 4: "It should return the pizza price after the user orders a large cheese pizza";
Code: userPizza.Pizza.Price(large);
Expected Output: 14.99;
