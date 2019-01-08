function logDriverNames(drivers){
  return drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  return drivers.forEach(function (driver){
    if (driver.hometown === hometown){
    console.log(driver.name)}
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce (function(total, driver){
    return driver.revenue + total
  }, 0)
}

// function totalRevenue(drivers){
//   let total = 0;
//   drivers.forEach(function(driver){
//     total += driver.revenue
//   });
//   return total;
// }

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
