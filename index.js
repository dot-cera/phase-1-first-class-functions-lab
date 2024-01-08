
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
 };

 const returnLastTwoDrivers = function(array){
     return array.slice(-2);
 };

 let selectingDrivers = [];
 selectingDrivers.push(returnFirstTwoDrivers);
 selectingDrivers.push(returnLastTwoDrivers);
 
 function createFareMultiplier(value){
     return function(){
         return (value * 5);
     };
 }

 function fareDoubler(fare){
     return (2*fare);
 }

 function fareTripler(fare){
     return (3*fare);
 }
 
 function selectDifferentDrivers(array,driverFunction){
     return driverFunction(array);
 }