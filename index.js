const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2)
}


const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = function(int){
    return function(fare){
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, firstOrLast){
    return firstOrLast(drivers)
}