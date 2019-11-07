const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

function fareDoubler(createFareMultiplier) {
   return createFareMultiplier * 2
}

function fareTripler(createFareMultiplier) {
   return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, driversFunc) {
    return driversFunc(drivers)
}

