
const fp= require('lodash/fp')
const cars = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker c12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 525, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 550, dollar_value: 114200, in_stock: false},
    {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false},
];
//1
let last_car = (cars)=> fp.last(cars);
let inStock = (cars) => fp.prop('in_stock',last_car(cars));
let isLastInStock = fp.flowRight(inStock);
console.log(isLastInStock(cars));

//2
let first_car = (cars)=> fp.first(cars)
let name = ()=> fp.prop('name',first_car);
let first_car_name = fp.flowRight(name,first_car)
console.log(first_car_name(cars));

//3.
let _average = function (xs) {
return fp.reduce(fp.add, 0, xs) / xs.length
}
let dollar_values = (cars) => fp.map((car) => {return car.dollar_value},cars)
let averageeDollarValue =  fp.flowRight(_average, dollar_values)
console.log(averageeDollarValue(cars))

//4
let _underscore = fp.replace(/\W+/g, '_');
const carsName = [];
let getCarsName = (cars)=>{
    for(let car in cars){
       let name = fp.prop('name',car)
       console.log(name)
    }
}
let sanitizeNames = fp.flowRight(_underscore,getCarsName);
console.log(sanitizeNames(cars));
