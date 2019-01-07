// Code your solution in this file!


function logDriverNames(arr) {
  arr.forEach( function (e) {console.log(e.name)})
}

function logDriversByHometown(arr, loc) {
  let b = arr.filter(function(e){
    return e.hometown == loc;
  })
  return logDriverNames(b)
}

function driversByRevenue(arr) {
  return arr.slice().sort(function(a, b) { // .slice to clone a NEW ARRAY, sort() is destructive
    return a.revenue - b.revenue;
  })
}

function driversByName(arr) {
  return arr.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name) // remember, a AND b are objects, you want to compare the properties
  })
}

function totalRevenue(arr) {
  return arr.slice().reduce( (a,b) => a + b.revenue, 0)
}

function averageRevenue(arr) {
  return totalRevenue(arr)/ arr.length
}
