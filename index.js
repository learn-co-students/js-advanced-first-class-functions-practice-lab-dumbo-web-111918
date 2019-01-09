// Code your solution in this file!
function logDriverNames(array) {
    array.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(array, hometown) {
    array.forEach(element => {
        if (element.hometown === hometown) {
            console.log(element.name)
        }
    })
}

function driversByRevenue(array) {

    return array.slice().sort((driver, driver2) => {return driver.revenue - driver2.revenue})
}

function driversByName(array) {
    return array.slice().sort((driver, driver2) => {return driver.name.localeCompare(driver2.name)})
}

function totalRevenue(array) {
    return array.reduce((accumulator, currentValue, index, array) => {
        if (index > 1) {
            return (accumulator + currentValue.revenue)
        } else {return (accumulator.revenue + currentValue.revenue)}} )
}

function averageRevenue(array) {
    const sum = array.reduce((accumulator, currentValue, index, array) => {
        if (index > 1) {
            return (accumulator + currentValue.revenue)
        } else {return (accumulator.revenue + currentValue.revenue)}})
    return (sum / array.length)
}

const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

totalRevenue(drivers)