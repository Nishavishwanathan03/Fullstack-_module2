type Transmision = 'petrol' | 'diesal' | 'cng' | 'electric' | 'hybrid'; 
class car {
    public color!: string;
    public transmission!: Transmision;
    public price!: number;
    public brand!: string;
    constructor(color: string, transmision: Transmision,price: number, brand: string ){
        this .color = color;
        this.transmission = transmision;
        this.brand = brand;
        this.price = price;
    }
}
const car1: car = new car('red', 'petrol', 25000000, 'Audi');
const age: number = 24;

if (age > 18) {
    console.log('you are  valid for driving');
    else {
        console.log('you are too young for driving');

    }
}
const result = age > 18 ? 'you are valid for driving' ; 'you are too young for driving';
console.log(result);


