// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    getSchool() {
        console.log(this.school);

        return this.school;
    }

    // overridden to return Intern
    getRole() {

    }


}

const intern = new Intern("al", 23, "alex.r.miramontes@gmail.com", "USC");

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();




module.exports = Intern;