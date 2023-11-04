
/* 
    -Employees
        -Manager
            - can create tables
        -Host
            - can set tables
        -Server
            - can serve tables

        Employee Number

        -Table
*/



// class Employee {

//     constructor(name, empNumber, date, payRate) {
//         this.name = name;
//         this.employee_number = empNumber;
//         this.dateHired = date;
//         this.payRate = Number(payRate.toFixed(2));
//     }
// }

// class Manager extends Employee {
    
//     constructor(name, employee_number, dateHired, payRate) {
//         super(name, employee_number, dateHired, payRate);
//         this.role = 'Manager';
//     }  
// }

const employeeNumbers = [];
class Employee {

    static setEmployee(role, name, payRate) { // factory method
        // Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100 - 1) + 1); 
        let numberToUse;

        if(employeeNumbers.includes(setEmployeeNumber)) {
            let tempNumber = setEmployeeNumber + "a";
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        // Set Hire Date
        let today = new Date(); // created new object here

        // set role
        const usedClass = role; // designates the class to target.

        return new Manager(name, numberToUse, today, payRate);
        
    }

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }
    // *challenge, write a method that allows us to change the hire date.
}

class Manager extends Employee {
    
    constructor(name, employee_number, dateHired, payRate) {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Manager';
    } 
    
    createTable(number, seat) {
        let table = new Table(number, seats);
        return table;
    }
}

class Host extends Employee {
    
    constructor(name, employee_number, dateHired, payRate) {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Host';
    }  

    setTable(table) {
        table.updateSeating();
    }
}

class Server extends Employee {
    
    constructor(name, employee_number, dateHired, payRate) {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Server';
    } 
    
    serveTable(table) {
        table.updateStatus();
    }
}

// const employee = new Employee('Joe', 1, new Date(), 18);
// const manager = new Manager('Jane', 11, new Date(), 18);
// console.log(employee, manager);

const manager = Employee.setEmployee(Manager, 'Jane',18);
const server = Employee.setEmployee(Server, 'Frankenstein',18);
const host = Employee.setEmployee(Host, 'Turtleman',18);
console.log(manager, server, host); 
// Manager {


//     name: 'Jane',
//     employee_number: 45,
//     dateHired: 2023-11-01T23:03:19.306Z,
//     payRate: 18,
//     role: 'Manager'
//   } Manager {
//     name: 'Frankenstein',
//     employee_number: 98,
//     dateHired: 2023-11-01T23:03:19.306Z,
//     payRate: 18,
//     role: 'Manager'
//   } Manager {
//     name: 'Turtleman',
//     employee_number: 47,
//     dateHired: 2023-11-01T23:03:19.306Z,
//     payRate: 18,
//     role: 'Manager'
//   }


//  Tables have
class Table {
    constructor(tableNumber, seatNumber) {
        this.tableNumber = tableNumber;
        this.seatNumber = seatNumber; // how many chairs get placed at the table
        this.seated = false; // when table is created it is available for seating.
        this.status = 'empty';
    }

    updateSeating() {
        if(this.seated) {
            this.status = false;
            this.status = "empty"
        } else {
            this.seated = true;
            this.status = "waiting..."
        }
    }
    updateStatus(status) {
        if(status !== undefined) {
            this.status = status; 
        } else {
            this.status = 'waiting...';
        }
    }
}



// const table = new Table(1,4);

// const table = manager.createTable(10,2);

// const table10 = manager.createTable(10,2);
// host.setTable(table10);

// table.updateSeating();
// console.log(table);

// table.updateStatus('eating...');
// console.log(table);

table.updateStatus('still talking...');
console.log(table);

// two main classes, and then three extensions of those classes, three employees...etc

