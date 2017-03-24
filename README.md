
# Bank.js - a node.js command line bank app.


bank.js is a Node application which takes in user inputs via the command line to register bank transactions and writes them to a file balance.txt.

## The transactions possible are:

- total - Tallies up all of the money in the balance file  and display it for the user.

- deposit <number> - Adds a amount to the balance file.

- withdraw <number> - Add a negative amount to the balance file.

- lotto - Subtracts the cost of a lotto ticket ($.25) from the balance file.  Then a random number bewteen 1 and 10 is generated.  If the user gets a '1' they 'win' the lotto and $2 is added to the balance file.
