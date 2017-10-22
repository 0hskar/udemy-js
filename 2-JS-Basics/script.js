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







































