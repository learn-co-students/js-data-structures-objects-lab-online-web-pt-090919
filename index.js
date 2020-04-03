const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return {...driver, [key]: value};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let driverX = Object.assign({}, driver);
    delete driverX[key];
    return driverX;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver;
}
