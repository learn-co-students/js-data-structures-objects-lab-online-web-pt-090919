// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {

        return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let obj2 = Object.assign({}, driver);
    delete obj2[key];
    return obj2;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

    
