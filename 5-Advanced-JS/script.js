/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};


var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function () {
	console.log(2016 - this.yearOfBirth);
}
Person.prototype.lastname = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);
*/

// Object.create
var personProto = {
	calculateAge: function() {
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
	name: { value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: { value: 'designer'}
});




















































