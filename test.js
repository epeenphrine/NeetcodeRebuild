
//converting epoch to mm/dd/yyy format for use in plotly


var date = new Date(1586926800000)
var formattedDate = `${date.getUTCMonth()+1}-${date.getUTCDate()}-${date.getUTCFullYear()}`

console.log(formattedDate)
console.log(typeof formattedDate)


var date = [1584939600000, 1585026000000]

var testing = date.map( dat => 
    
    `${new Date(dat).getUTCMonth()+1}-${new Date(dat).getUTCDate()}-${new Date(dat).getUTCFullYear()}`
    )

console.log(testing)