// class = provide more cleaner way to work with objects to traditional construtor function

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price}`);
    }

    calculateTax(salesTax) {
        return this.price + salesTax;
    }
}

const salesTax = 0.05;

const product1 = new Products("Shirt", 20.88);
const product2 = new Products("polo Tshirt", 13.33);
const product3 = new Products("underwear", 18.23);


product1.displayProduct();

const total = product1.calculateTax(salesTax);
console.log(`Total Price (With Tax): $${total}`)





