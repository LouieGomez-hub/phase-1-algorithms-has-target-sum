function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for(let j = i + 1; j < array.length; j++){
      if(array[j] === complement)
        return true;
      }
    }
    return false;
  }

/* 
  n steps (depending on the length of the input array)
  n * n steps (nested loop!)
  1 step
  (quadratic)
*/

/* 
  iterate through each number in the array
  identify a complementary number that adds to our target
  iterate through the rest of the array
  if any of the remaining numbers is the complement
    return true
  if we reach the end of the array
    return false
*/

/*
  make a hasTargetSum function that checks 
  if two numbers in an array add up to some target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
