
var str1 = ""
var str2 = ""
var oper1 = ""
var oper2 = ""
var res = ""



function number() {
  if (!oper1) {
    str1 += this.innerHTML
    document.getElementById("display").innerHTML = str1
  } else {
    str2 += this.innerHTML
    document.getElementById("display").innerHTML = str2
  }
}

function operator() {
  if (!oper1) {
    oper1 = this.innerHTML
    if (!str2) {     // if the second value is not inputted, display the operator
      document.getElementById("display").innerHTML = oper1
    }
  } else { // if oper1 is filled, that inputted operator must be oper2, oper2 will then act as (=) button
    oper2 = this.innerHTML
    calculation()
  }
}

function clear() {
  str1 = ""
  str2 = ""
  oper1 = ""
  oper2 = ""
  res = ""
  document.getElementById("display").innerHTML = str1
}


function calculation() {
  if (!oper1 || !str1 || !str2) {   // edge case check
    document.getElementById("display").innerHTML = "need more input"
  } 
  
  var int1 = parseInt(str1)
  var int2 = parseInt(str2)
  switch (oper1) {
    case "+":
      res = int1 +  int2
      break;
    case "-":
      res = int1 + int2
      break;
    case "x":
      res = int1 * int2
      break;
    case "/":
      res = int1 / int2
      break;
  }
  document.getElementById("display").innerHTML = res
  
  // after calculation is performed, get ready for next calculation 
  oper1 = oper2
  oper2 = ""
  str1 = res
  str2 = ""
}

var num7 = document.getElementById("num7")
var num8 = document.getElementById('num8')
var num9 = document.getElementById("num9")
var time = document.getElementById("time")
var add = document.getElementById("add")

var ac = document.getElementById("ac")
var calc = document.getElementById("calc")

num7.addEventListener("click", number)
num8.addEventListener("click", number)
num9.addEventListener("click", number)
time.addEventListener("click", operator)
add.addEventListener("click", operator)

ac.addEventListener("click", clear)
calc.addEventListener("click", calculation)
