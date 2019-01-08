function logDriverNames(array) {
  return array.forEach(function(element){
    console.log(element.name);
  });
}

function logDriversByHometown(array, hometown) {
  return array.forEach(function(element){
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(array) {
  let newArray = [...array];
  return newArray.sort(function(a, b) {
    // console.log("this is a:", a);
    // console.log("this is b:", b);
    return a.revenue - b.revenue;
  });
}

function driversByName(array) {
  let newArray = [...array];
  return newArray.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(array) {
  return array.reduce(function(sum, element){
    return sum += element.revenue
  }, 0);
}

function averageRevenue(array) {
  return totalRevenue(array)/array.length;
}
