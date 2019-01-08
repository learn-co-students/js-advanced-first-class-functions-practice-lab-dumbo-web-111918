// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach (function (element){
  	console.log(element.name);
  	return element.name;
 });
}


function logDriversByHometown(drivers, location){
  drivers.forEach (function (element){
    if(element.hometown === location){
      console.log(element.name);
      return element.name;
    }
  });
}

function driversByRevenue(drivers) {
	let sorted = drivers.slice();
  return sorted.sort(function(obj1, obj2){
    return obj1.revenue - obj2.revenue
    // turn obj1 into a number by obj1.revenue
  });

}

function driversByName(drivers) {
  let sorted = drivers.slice();
  return sorted.sort(function(obj1, obj2){
    return obj1.name.localeCompare(obj2.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(accumulator, element) {
    return accumulator + element.revenue;
  }, 0);

}

function averageRevenue(drivers) {
	return totalRevenue(drivers)/drivers.length;
}



