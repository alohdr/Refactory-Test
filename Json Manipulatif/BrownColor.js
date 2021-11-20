const data = require('./data.json')

let data_filter = data.filter( e => e.tags[2] == "brown" )
console.log(data_filter)