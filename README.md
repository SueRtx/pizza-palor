# Pizza Parlor

#### By Sue Roberts

#### A website for a pizza company to order a pizza and see the final cost.

## Technologies Used
* HTML
* CSS
* Bootstrap
* jQuery
* javaScript

## Description 

This application is made for a pizza company and allows a user to choose one or more individual toppings and a size to order a pizza and see the final cost  by using and demonstrating understanding of constructors and prototypes.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html to your browser.

## Known Bugs

* None

## License

MIT

Copyright (c) 2022 Sue Roberts

Describe: Pizza(size, topping);
Test 1: "It should return pizza size and topping after user order small cheese pizza.";
Code: let testPizza = new Pizza("small", "cheese");
Expected Output: Pizza {size: "Small", topping: "Cheese"};

Describe: Pizza.prototype.pizzaPrice();
Test 2: "It should return the pizza price after the user orders a small cheese pizza";
Code: let testPizza = new Pizza("small", "cheese");
Expected Output: 10.99;

Test 3: "It should return the pizza price after the user orders a medium cheese pizza";
Code: let testPizza = new Pizza("medium", "cheese");
Expected Output: 12.99;

Test 4: "It should return the pizza price after the user orders a large cheese pizza";
Code: let testPizza = new Pizza("large", "cheese");
Expected Output: 14.99;

Test 5: "It should return the pizza price after the user orders a small pizza with 2 toppings(topping * 3");
Code: let testPizza = new Pizza("small", 2);
Expected Output: 16.99;

Test 6: "It should return the pizza price after the user orders a medium pizza with 2 toppings(topping * 3)";
Code: let testPizza = new Pizza("medium", 2);
Expected Output: 18.99;

Test 7: "It should return the pizza price after the user orders a large pizza with 2 toppings(each topping * 3)";
Code: let testPizza = new Pizza("large", 2);
Expected Output:20.99;

Describe: displayPizzaOrder(pizzaToDisplay);
Test 8: “It should display a pizza's total price.”; 
Code: displayPizzaOrder(pizzaToDisplay);
Expected Output: Total: $14.99
