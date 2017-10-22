// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastname = 'Smith';
console.log(lastname);

var age = 26;

console.log(age);

var fullage = true;
console.log(fullage);
*/
/*
// Lecture: veriables 2
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age  + age);

var job, married;

//console.log(job);

job = 'Teacher';
married = false;

console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + married + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + married + '.');

var lastname = prompt('What is the last name?');
console.log(lastname);

alert( name + ' is ' + age + ' year old ' + job + '. Is he married? ' + married + '.');
*/





// Lecture: operators
/*
var now = 2016;
var age = 26;
var birthyear = now - age;
// 2016 - 52
// 1964

birthyear = now - age * 2;

console.log(birthyear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var married = 'yes';

if(married === 'yes') {
	// if false
	console.log(name + ' is married.');
} else {
	console.log(name + ' will hopefully marry soon. :)');
}

married = true;

if(married) {
	// if false
	console.log('Yes!');
} else {
	console.log('No!');
}


if(married) {
	// if false
	console.log('Yes!');
} 

if( 23 === '23') {
	console.log('Just something to print...');
}
*/

// Lecture: Boolean Logic and switch
/*
var age = 20;

if(age < 20) {
	console.log('John is a teenager.');
} else if(age >= 20 && age < 30) {
	console.log('John is a young man.');
} else {
	console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does john do?');


switch(job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;

	default:
		console.log('John does something else.');
		break;
}
*/
/*

var john_height = 172;
var friend_height = 165;
var third_friend_height = 2;
var john_age = 26;
var friend_age = 29;
var third_friend_age = 1;

var john_score = john_height + (5 * john_age);
var friend_score = friend_height + (5 * friend_age);
var third_friend_score = third_friend_height + (5 * third_friend_age);


if(john_score - friend_score >  0 && john_score - third_friend_score >  0) {
	console.log('John wins by ' + john_score + '!');
} else if(john_score - friend_score <  0 && friend_score - third_friend_score > 0) {
	console.log('Friend wins by ' + friend_score + '!');
} else if(friend_score - third_friend_score <  0 && friend_score - third_friend_score < 0) {
	console.log('Third friend wins by ' + third_friend_score + '!');
} else {
	console.log('Its a tie!');
}

*/

// Lecture: Function
/*
function calulateAge(yearOfBirth) {
	return 2016 - yearOfBirth;
}

var ageJohn = calulateAge(1990);
var ageMike = calulateAge(1969);
var ageMary = calulateAge(1948);

function yearsUntilRetirement(name, yearOfBirth) {
	var retirement = 65 - calulateAge(yearOfBirth);
	if(retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.' );
	} else {
		console.log(name + ' has already retired.');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

// Lecture : Statements and expressions
/*
function someFun(par) {
	//code
}

var someFun = function(par) {
	//code
}

//Expressions
4 + 3;
var x = 3;

// Statements

if( x === 5) {
	// do something
}
*/

// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('Blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if(john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher.');
}
*/

// Lecture Objects
/*
var john = { 
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Object and methods
// v1.0
/*
var john = { 
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

//v2.0
var john = { 
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);





var mike = { 
	yearOfBirth: 1950,
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);





























