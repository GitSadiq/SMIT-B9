// ============= Question NO:1==============

var city = prompt("Question NO:1 \nEnter your city name");
if (city === "karachi" || city === "Karachi") {
  alert("Welcome to the city of light");
} else {
  alert("sorry this page not avaible for your city ");
}

// ============= Question NO:2==============

var gender = prompt("Question NO:2 \nEnter your gender");
if (gender === "male" || gender === "Male") {
  alert("Good Morning Sir");
} else if (gender === "female" || gender === "Female") {
  alert("Good Morning Ma'am");
} else {
  alert("Incorrect gender name");
}

//  ============= Question NO:3==============

var signal = prompt(
  "Question NO:3 \nChoose and enter one signal color red, green and yellow"
);
if (signal === "red") {
  alert("Please stop");
} else if (signal === "green") {
  alert("Move now");
} else if (signal === "yellow") {
  alert("Ready to Move");
} else {
  alert("please choose correct color");
}

// ============= Question NO:4==============

var fuel = +prompt("Question NO:4 \nHow much fuel remaining in your car");
if (fuel <= 0.25) {
  alert("Refill the fuel");
} else {
  alert("you can refill later");
}

// ============= Question NO:5==============
// =======a=======

var a = 4;
if (++a === 5) {
  alert("Question NO:5(a) \ngive condition for variable a is ture");
}

// =======b=======

var b = 82;
if (b++ === 83) {
  alert("Question NO:5(b) \ngive condition for variable b is ture");
}

// =======c=======

var c = 12;
if (c++ === 13) {
  alert("Question NO:5(c) \ncondition 1 is ture");
}
if (c === 13) {
  alert("Question NO:5(c) \ncondition 2 is ture");
}
if (++c < 14) {
  alert("Question NO:5(c) \ncondition 3 is ture");
}
if (c === 14) {
  alert("Question NO:5(c) \ncondition 4 is ture");
}

// ============d==============
var Mcost = 20000;
var Lcost = 2000;
var Tcost = Mcost + Lcost;
if ((Tcost = Mcost + Lcost)) {
  alert("Question NO:5(d) \nthe cost equals");
}

// =============e==============
if (true) {
  alert("Question NO:5(e) \nTrue");
}
if (false) {
  alert("False");
}

// ============f================
if ("car" < "cat") {
  alert("Question NO:5(f) \ncar is smaller than cat");
}

// ============= Question NO:6==============

document.write("<h1>" + "Marks Sheet" + "</h1>" + "<br>");
var Sub = +prompt("Question NO:6 \nEnter the Total Marks");
var Sub1 = +prompt("Enter Maths Marks");
var Sub2 = +prompt("Enter English Marks");
var Sub3 = +prompt("Enter Urdu Marks");
var total = Sub1 + Sub2 + Sub3;
var per = (total / Sub) * 100;
document.write("Total Marks : " + Sub + "<br>");
document.write("Marks Obtained : " + total + "<br>");
document.write("Percentage : " + per.toFixed(2) + "%" + "<br>");
if (per >= 80) {
  document.write("Grade : A-One" + "<br>");
  document.write("Remarks : Excellent" + "<br>");
} else if (per >= 70) {
  document.write("Grade : A" + "<br>");
  document.write("Remarks : Good" + "<br>");
} else if (per >= 60) {
  document.write("Grade : B" + "<br>");
  document.write("Remarks : You need to improve" + "<br>");
} else if (per < 60) {
  document.write("Grade : Fail" + "<br>");
  document.write("Sorry" + "<br>");
}

// ============= Question NO:7==============

var secnum = 5;
var num = +prompt("Question NO:7 \nGuess the numnber from 1 to 10");
if (num === secnum) {
  alert("Bingo! Correct answer");
} else if (num === ++secnum || num === 10 - secnum) {
  alert("Close to the answer");
} else {
  alert("you loss the game");
}

// ============= Question NO:8==============

var num = +prompt(
  "Question NO:8 \nEnter any number after it will alart that the number is divisible by 3 or not"
);
var ans = num % 3;
if (ans === 0) {
  alert("yeah! it divisible by 3");
} else {
  alert("No, it not divisible by 3");
}

// ============= Question NO:9==============

var num = +prompt(
  "Question NO:9 \nEnter any number after it will alart that the number is even or odd"
);
var ans = num % 2;
if (ans === 0) {
  alert("EVEN NUMBER");
} else {
  alert("ODD NUMBER");
}

// ============= Question NO:10==============

var temp = +prompt("Question NO:10 \nEnter the current temperature");
if (temp >= 40) {
  alert("It is too hot outside.");
} else if (temp >= 30) {
  alert("The Weather today is Normal.");
} else if (temp >= 20) {
  alert("Today’s Weather is cool.");
} else if (temp >= 10) {
  alert("OMG! Today’s weather is so Cool.");
} else if (temp < 10) {
  alert("Better to stay at home");
}

// ============= Question NO:11==============

document.write("<br><br><br>" + "<h1>" + "Question 11" + "</h1>" + "<br><br>");
var firstNum = +prompt("Enter first Number");
var secondNum = +prompt("Enter second Number");
var opePlus = firstNum + secondNum;
var opeNeg = firstNum - secondNum;
var opeMul = firstNum * secondNum;
var opeDiv = firstNum / secondNum;
var opeMod = firstNum % secondNum;
document.write(opePlus + "<br>");
document.write(opeNeg + "<br>");
document.write(opeMul + "<br>");
document.write(opeDiv.toExponential(2) + "<br>");
document.write(opeMod + "<br>");
