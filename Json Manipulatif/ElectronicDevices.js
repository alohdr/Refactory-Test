const data = require('./data.json')

let data_filter = data.filter( e => e.type =="electronic")
console.log(data_filter)