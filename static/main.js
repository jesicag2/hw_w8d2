// Homework

// Part 1: Exploring Conditional Statements and Loops
    // You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should 
    // allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart. You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs. 
// Task 3: Calculate the total cost of the items in the cart and display it to the user.

let loggedIn = true;

if (loggedIn) {
    console.log("User is logged in, you may begin shopping!")
} else {
    console.log("Please log in to proceed in order to add items.")
}

console.log("Our Available Products Are:")
let products = ['shirt', 'pants', 'shoes', 'socks', 'jewlery']
for (let i = 0; i < products.length; i++){
    console.log(products[i])
}

let totalCost = 0;
let prices = [10, 20, 50, 8, 100]
for (let i = 0; i < prices.length; i++){
    totalCost += prices[i]
}
console.log("The total cost: ", totalCost)




// Part 2: Exploring Functions in JavaScript
    // Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions 
    // to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

// Task 1: Create a function to handle deposits into a bank account.
// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.
// Task 3: Develop a function to check the current balance of the account.

let balance = 0;

function deposit(amount){
    balance += amount;
    console.log("Deposit has been completed. Your new balance is: ", balance)
}

deposit(220);
deposit(550);

function withdrawal(amount){
    if (amount <= balance){
        balance -= amount;
        console.log("Withdrawal has been completed. Your new balance is: ", balance)
    } else {
        console.log("Sorry insufficient funds for withdrawal of this amount.")
    }
}

withdrawal(20);
withdrawal(10);
withdrawal(1000);

function currentBalance(){
    console.log("Your current balance is: ", balance)
}

currentBalance()
