const fs = require('fs');

//1st argument after node bank.js
var task = process.argv[2];

//2nd argument after node bank.js
var amount = process.argv[3];

//Determines which function to call based on user argument 'task'
switch(task)
	{
		case "total":
	        total();	       
	        break;
	        
	    case "deposit":
	        deposit();       
	        break;
	        
	    case "withdraw":
	        withdraw();	       
	        break;
	        
	    case "lotto":
	        lotto();	       
	        break;

	    default :
	    	console.log("\nSorry. We did not understand you command. Try Again.");
}

//============================================================

//Subtracts the cost of a lotto ticket ($.25) from the balance file. Then a random
//number bewteen 1 and 10 is generated. If the user gets a '1' they 'win' the lotto 
//and $2 is added to the balance file.
function lotto()
{
	console.log("\nYou bought a lotto for $.25 Good Luck!");
	
	fs.appendFile("balance.txt",  "," + "-.25");	
	
	total();
	
	var drawing = Math.round(Math.random()*10);
	
	if(drawing === 1)
	{
		console.log("You win $2!");
		fs.appendFile("balance.txt",  "," + "2");	
	}
	else
	{
		console.log("You Lost!");
	}	
}

//============================================================

//Reads data from balance.txt, splits by "," and stores in 'transactions' array.
//Then the 'transactions' are tallied in a for loop to 'total';
//Last, the total balance is displayed to the console. 
function total()
{
	var total = 0;
	
	fs.readFile("balance.txt","utf8", function(err, data)
	
	{		
		var transactions = data.split(",")

		for (var key in transactions)
		{
			total += parseFloat(transactions[key].trim());			
		}
			console.log("\nYour balance is $" + total.toFixed(2));			
	});	
}

//============================================================


//Adds user argument 'amount' to balance file.
function deposit()
{
	if( amount === undefined || isNaN(amount))
	{
		console.log("\nPlease check your amount! And Try Again.");
		return;
	}
	
	fs.appendFile("balance.txt", "," + amount);
	
	console.log("\nYou deposited $" + amount + "." );
	
	total();	
}

//============================================================

//Adds negative value of user argument 'amount' to balance file.
function withdraw()
{
	if( amount === undefined || isNaN(amount))
	{
		console.log("\nPlease check your amount! And Try Again.");
		return;
	}

	fs.appendFile("balance.txt",  ", -" + amount);
	
	console.log("\nYou withdrew $" + amount + "." );
	
	total();
}

