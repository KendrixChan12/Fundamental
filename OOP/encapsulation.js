class Employee {
    constructor() {
        this.employeeName;
    }

    getEmployeeName() {
        return this.employeeName
    }
    setEmployeeName(name){
        if (typeof name !== 'string') {
            throw new Error ("Name should be a string")
        }
        this.employeeName = name
    }
}

const employee1 = new Employee()
employee1.setEmployeeName("Kendrix")
console.log(employee1.getEmployeeName());