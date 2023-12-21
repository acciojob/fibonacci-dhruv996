function fibonacci(num) {
  if (num <= 0) {
    return "Invalid input. Please enter a positive integer.";
  }

  let fibArr = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }

  return fibArr[num - 1];
}

function calculateFibonacci() {
  const fibonacciInput = document.getElementById('fibonacciInput').value;
  const num = parseInt(fibonacciInput);

  const result = fibonacci(num);

  document.getElementById('result').innerText = `Fibonacci(${num}): ${result}`;
}
