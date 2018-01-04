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
  const arr1=arrDrivers.sort(function(a,b){
   return a.revenue-b.revenue;
  });
return arr1;
}
function driversByName(arrDrivers){
  arrDrivers.sort(function(a,b){
    return a.localeCompare(b);
  });
return arrDrivers;
}
const sum=(tot,curr)=>tot+cur;
function totalRevenue(arrDrivers){

  return arrDrivers.reduce(sum);
}
function averageRevenue(arrDrivers){
  return arrDrivers.reduce(sum)/arrDrivers.length;

}
