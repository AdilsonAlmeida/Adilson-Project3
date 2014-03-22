//alert("JavaScript works!");

// Adilson Dos Reis E Almeida
// SDI 1403
// Project 3
// My 3rd Assignment in SDI

//Global Variables

var name;
var returnValue;

var busstops = [ "Blake & Pepper Ln.", "Hill & River St.", "Bear & Cub St."]

var jsonData = { 
	"students": [ { "studentFirstName" : "Ken", 
				"studentLastName": "Brady",
				"busstop": "Blake & Pepper Ln."
				},
				{ "studentFirstName": "Lucy",
				"studentLastName": "Ball",
				"busstop": "Blake & Pepper Ln."
				},
				{ "studentFirstName": "Lacy",
				"studentLastName": "Evans",
				"busstop": "Hill & River St."
				},
				{ "studentFirstName": "Nick",
				"studentLastName": "Jones",
				"busstop": "Hill & River St."
				},
				{ "studentFirstName": "Bobby",
				"studentLastName": "Langston",
				"busstop": "Hill & River St."
				},
				{ "studentFirstName": "Amber",
				"studentLastName": "Rose",
				"busstop": "Bear & Cub St."
				}
		]
};
				
				
//Functions

var getname = function(player) {

	var name
	
	name = player
	
	console.log("Hello " + name + ", thanks for joining me on my bus route today.");
	
};



//For Loop with Nested for Loop using JSON Data and Argument Array
var jsonFunction = function(jsonArg) {
	for (var key in jsonArg.students) {
		for (var next in jsonArg.students[key]{
			console.log(jsonArg.students[key][next]);
		}
	};
};

//For Loop with Return Array
var stops = function() {
	for (var b = 0; b < busstops.length; b++) {
		console.log( "One of my stops is at " + busstops[b] );
	};
};

	




//Main Code

var input = prompt("What is your name: ");

var textArr = input.split('	');

getname(textArr);

console.log( "Everyday I have to pick up 6 students from 3 different busstops and take them to 2 different schools.");

stops();

console.log( "These are the kids that I have to pick up each day, and the stops that I pick them up from: ");

jsonFunction(jsonArg);