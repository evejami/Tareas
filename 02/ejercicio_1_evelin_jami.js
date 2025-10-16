function isLeapYear(inputYear) {
  inputYear = parseInt(inputYear);
  let result;
  if (inputYear % 4 === 0 && (inputYear % 100 !== 0 || inputYear % 400 === 0)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

module.exports = { isLeapYear };
