function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  //Write your code here:
  //Return an array of fibonacci numbers starting from 0.
  //Do NOT change any of the code below 👇

  const arr = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr.push(0)
    } else if (i === 2) {
      arr.push(1)
    } else {
      arr.push(arr[i - 3] + arr[i - 2])
    }
  }

  return arr
}

console.log(fibonacciGenerator(5))
