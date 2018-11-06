// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

// function validatePIN (pin) {
//   return (pin.length === 4 || pin.length === 6) && pin.split('').every(val => '0123456789'.includes(val));
// }

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

validatePIN('a1234');

// return pin.length === 4 || pin.length === 6 &&
