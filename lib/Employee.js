// Code for the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // this will return 'Employee'
    getRole() {
        return "Employee";
    }


}


module.exports = Employee; 