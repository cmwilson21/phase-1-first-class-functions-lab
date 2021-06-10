const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

 function returnLastTwoDrivers() {
     return drivers.slice(-2);
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier (multiplyFare) {
     return function(num) {
       return num*multiplyFare;
     }
 } 

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers() {
 // return returnFirstTwoDrivers();
//}

// function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    // return selectDifferentDrivers;
// }

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
};