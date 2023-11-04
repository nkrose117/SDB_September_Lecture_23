class Bakery {
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.profit = 0;
    }

    addItem(batch) {
        this.inventory.push(batch);
    }

    sellItem(item, qty) {
        item.quantity -= qty;
        this.profit += Number((item.pricePer * qty).toFixed(2));
    }
}

class BakedGoods {
    static bakedInStore(item, qty, store, expense) { // we use static so the info is tied to a specific store.
        let price = (expense + (expense * .2)) * qty;
        const newItem = new BakedGoods(item, qty, store.name, price.toFixed(2));
        store.addItem(newItem);
        return newItem;
    }

    constructor(item,qty,store,price) {
        this.store = store;
        this.item = item;
        this.quantity = qty;
        this.pricePer = price;
    }
    // write a method that takes in a quantity as a parameter and update the baked goods quantity.
}

// new store
const proofInTheDough = new Bakery('Proof In The dough');
const chocChipCookies = BakedGoods.bakedInStore;( 
    'chocolate chip cookies', 12, proofInTheDough, .1
);

proofInTheDough.sellItem(chocChipCookies, 4)

console.log(chocChipCookies);

// console.log(proofInTheDough)

