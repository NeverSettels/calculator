var subtract = function(number1, number2) {
  return number1 - number2
}
var add = function(number1, number2) {
  return number1 + number2;
}
var multiply = function(number1, number2) {
  return number1 * number2;
}
var divide = function(number1, number2) {
  return number1 / number2
}
  // alert(add(10,5));
  
  var number1 = parseInt(prompt("Enter a number"))
  var number2 = parseInt(prompt("Enter 2 number"))
  var result = subtract(number1, number2)
  alert(result)

  var number1 = parseInt(prompt("Enter a number"))
  var number2 = parseInt(prompt("Enter 2 number"))
  result = add(number1, number2)
  alert(result)

  var number1 = parseInt(prompt("Enter a number"))
  var number2 = parseInt(prompt("Enter 2 number"))
  result = multiply(number1, number2)
  alert(result)

  var number1 = parseInt(prompt("Enter a number"))
  var number2 = parseInt(prompt("Enter 2 number"))
  result = parseInt(divide(number1, number2))
  alert(result)