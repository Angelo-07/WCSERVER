module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
      return this.firstName + ' ' + this.lastName;
    }
  }

//Angelo L. Cometa
//WD - 201
//February 01, 2022