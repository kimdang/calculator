

// these variables are for calculation
var str1 = ""
var str2 = ""
var oper1 = ""
var oper2 = ""
var res = ""

// these variable are for the number and operator buttons in the calculator
var num = []
var oper = []
var i 
var numSet = ["num0", "num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "deci"]
var operSet = ["add", "minus", "time", "divide"]


//___________________________________________________________________________________________________
// FUNCTIONS
//
//

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
  
  var int1 = parseFloat(str1)
  var int2 = parseFloat(str2)
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


//____________________________________________________________________________________________________
// USER INPUTS & CALLING APPROPRIATE FUNCTIONS
//
//

for (i=0; i<11; i++) {
  num[i] = document.getElementById(numSet[i])
  num[i].addEventListener("click", number)
}

for (i=0; i<4; i++) {
  oper[i] = document.getElementById(operSet[i])
  oper[i].addEventListener("click", operator)
}


var ac = document.getElementById("ac")
var calc = document.getElementById("calc")
ac.addEventListener("click", clear)
calc.addEventListener("click", calculation)
