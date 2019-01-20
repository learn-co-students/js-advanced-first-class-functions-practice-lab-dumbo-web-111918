// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach((el)=>{
        console.log(el.name)
    })
}

function logDriversByHometown (drivers, location) {
    
    let driverInSameArea = drivers.filter((el)=>{
        
        for (key in el) {
            if (el[key] === location) {
                return true
            }
        }
    })
    
    return driverInSameArea.forEach((el)=>{
        console.log( el.name);
    })
}


function driversByRevenue (drivers) {

    let newArray = drivers.slice(0)

    return newArray.sort((a,b)=>{
        return a.revenue - b.revenue 
    });

}


function driversByName(drivers) {

    let newArray = drivers.slice(0);

    return newArray.sort((a, b) => {

        var nameA = a.name.toLowerCase(); 
        var nameB = b.name.toLowerCase();
         // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });

}

function totalRevenue(drivers) {
    let initialValue =  0;

    let revenueSum = drivers.reduce((acc,currentEl)=>{
        return acc + currentEl.revenue;
    },initialValue);

    return revenueSum;
}

function averageRevenue(drivers) {
    let initialValue = 0;

    let revenueSum = drivers.reduce((acc, currentEl) => {
        return acc + currentEl.revenue / drivers.length
    }, initialValue);
    return revenueSum
}

