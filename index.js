// Code your solution in this file!
function logDriverNames(arrDrivers){
    arrDrivers.forEach(function(driver){
    console.log(driver.name);
  });
}
function logDriversByHometown(arrDrivers,town){
  arrDrivers.forEach(function(driver){
    if(town===driver.hometown){
      console.log(driver.name);
    }
  });
}
function driversByRevenue(arrDrivers){
  const arr1=arrDrivers.slice();
  arr1.sort(function(a,b){
   return a.revenue-b.revenue;
  });
return arr1;
}
function driversByName(arrDrivers){
    const arr1=arrDrivers.slice();
  arr1.sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
return arr1;
}

function totalRevenue(arrDrivers){
  let sum=arrDrivers.reduce(function(tot,curr){
    return tot.revenue+curr.revenue;
  });
  return sum;
}
function averageRevenue(arrDrivers){
  return arrDrivers.reduce(sum)/arrDrivers.length;

}
