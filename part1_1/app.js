//1
const {Maybe, Container} = require('./support')
const fp = require('lodash/fp');
let maybe = Maybe.of([5,6,1])
let exl = () => {

     fp.map(fp.add(1))(maybe)

}
console.log(exl())