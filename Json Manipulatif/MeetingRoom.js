const data = require('./data.json')

let data_filter = data.filter( e => e.placement.name =="Meeting Room")
console.log(data_filter)