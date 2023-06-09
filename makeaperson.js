// Make a Person
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.



var Person = function(firstAndLast) {
  var arr = firstAndLast.split(' ');
  var firstName = arr[0];
  var lastName = arr[1];
  
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.setFirstName = function(first){
      firstName = first;
    };
    this.setLastName = function(last){
      lastName = last;
    };
    this.setFullName = function(firstAndLast){
      var arr = firstAndLast.split(' ');
      firstName = arr[0];
      lastName = arr[1];
    };
    
};

const bob = new Person('Bob Ross');
bob.getFullName();
