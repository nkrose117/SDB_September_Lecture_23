//! Classes
/* 
    - Introduced in 2015
    - Function that helps us create objects
    - Defines a category of objects

*   Base Structure:

    class NameOfClass {    
        constructor(parameter) {
            this.key = parameter;
        }

        methodName() {
            ... code block
        }
    }

*/

// ex:
class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
// console.log(one); // {name: 'sample'}

// -------------------------------------------------------
// 1   2
class Item {
//  3                  4
    constructor(name, desc, price) {
//  5     6       7
    this.name = name;
    this.description = desc;
    this.price = price;
    }
}

/* 
    1. Keyword to establish what type of "function".
    2. The name of our class. Should be Pascal Case.
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. Est. values of the new object.
    5. Keyword - Refers to "this" specific object being created.
    6. The name of the key to our new object.
    7. The value for those keys being created (set by parameters).
*/

let itemZero = new Item();
// console.log(itemZero); returns an obj with set keys that are undefined values.

let itemOne = new Item('beans', 'canned',0.89); // we are using class "item" to build out multiple objects. beans=name, canned=desc, 0.89=price
// console.log(itemOne); //Item { name: 'beans', description: 'canned', price: 0.89 }

// let brokenItem = Item();
// console.log(brokenItem); // error message. we need the word new. (new invokes the constructor)
// TypeError: Class constructor Item cannot be invoked without 'new'.

// ! Factory Functions

// this examples utilizes code from higher up in notes.
let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);
// Item { name: 'tomato soup', description: 'canned', price: 1.29 }

// ! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key.
    }

// 1                 2
    addToInventory(newItem) {
//        3               4
        this.items.push(newItem);
        console.log('Item Added!')
    }


}
//  5
let dryGoods = new DeptInventory('Dry Goods');
console.log(dryGoods);
// Item { name: 'tomato soup', description: 'canned', price: 1.29 }
// DeptInventory { department: 'dry Goods', items: [] }

// 6
let itemTwo = new Item('corn', 'canned', 0.79);

// 7
dryGoods.addToInventory(itemTwo);
// console.log(dryGoods);
let itemThree = new Item('poop', 'fart', 3.25)
dryGoods.addToInventory(itemThree);
console.log(itemThree);
console.log(dryGoods);

// Item { name: 'tomato soup', description: 'canned', price: 1.29 }
// Item Added!
// DeptInventory {
//   department: 'Dry Goods',
//   items: [ Item { name: 'corn', description: 'canned', price: 0.79 } ]
// }

/* 
    1. Established a name of the method
    2. This method requires a parameter. (not all methods will need this)
    3. "this" keyword references the specific object (dryGoods).
    4. Using an array method to add the "item object" to the items array.
    5. Creating new objects (Dept / Item)
    6. Invoking the method available to dryGoods object.
*/

// ! Factory Methods 

class Expense {
    static addUpchargeForProfit(wholesale) { // this chunk is the method?
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell); // Expense { purchased_price: 1, sell_at: 1.25 }

let anotherItem = Expense.addUpchargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem); // Expense { purchased_price: 5, sell_at: 6.25, sales_tax: '6.63' }




