// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const deleteDriverValue = Object.assign({}, driver, key)
  delete deleteDriverValue[key];
  return deleteDriverValue;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}