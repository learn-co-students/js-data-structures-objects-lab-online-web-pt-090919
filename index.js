// Write your solution in this file!
let driver = {}

// returns a driver with og key value pairs and the new key value pair
// it does not modify the original driver - returns a clone with the new data
function updateDriverWithKeyAndValue(driverObj, key, value) {
  return Object.assign({}, driverObj, {[key]: value});
}


// updates `driver` with given `key` and `value` (it is destructive) 
// and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driverObj[key] = value
  return driverObj
}

// deletes `key` from clone of driver and returns new driver 
// does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driverObj, key) {
  const newDriverObj = Object.assign({}, driverObj);
  delete newDriverObj[key];
  // => true
  return newDriverObj
}

// returns driver without delete key/value pair
// modifies the original driver
function destructivelyDeleteFromDriverByKey(driverObj, key) {
  delete driverObj[key]
  return driverObj
}