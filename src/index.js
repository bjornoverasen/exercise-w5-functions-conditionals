/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "tom");
/*
 
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/

// 2) Passing only one argument
theCoders("Jennie");
// navigator becomes undefined

