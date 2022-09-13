let numbers = [12, 5, 66, 24, 3, 12]
for (let i = 1; i < numbers.length; i++) {
  let num = numbers[0]
  if (num > numbers[i]) {
    numbers[0] = numbers[i]
  }
}

console.log("numbers")
