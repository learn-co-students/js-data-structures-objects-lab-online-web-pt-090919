// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return {...driver, [key]: value};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let driverDup = Object.assign({}, driver);
    delete driverDup[key];
    return driverDup;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}