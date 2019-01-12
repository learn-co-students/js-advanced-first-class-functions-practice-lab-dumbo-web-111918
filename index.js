// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location){
  let result = drivers.forEach(function(driver){
    if(driver.hometown == location){
      console.log (driver.name)
    }
  })
  // debugger
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) { // .slice(creates a new Array (non-Destructive))//
    // debugger
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return total + driver.revenue
    // debugger
    // return driver.revenue
  },0)
}

function averageRevenue(drivers){
  let g = totalRevenue(drivers)
  return g / drivers.length
  // debugger
}
