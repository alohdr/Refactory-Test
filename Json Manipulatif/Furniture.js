const data = require('./data.json')

let data_filter = data.filter( e => e.type =="furniture")
console.log(data_filter)