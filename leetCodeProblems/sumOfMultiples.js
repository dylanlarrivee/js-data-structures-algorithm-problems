
// Create a funciton that can check for any number
function sumOfMultiples(number) {
  let sumAmount = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sumAmount += i;
    }
  }
  return sumAmount;
}

//Call that function with the number needed for this request
sumOfMultiples(1000);