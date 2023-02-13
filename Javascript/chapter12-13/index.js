// ============= Question NO:1==============

var identity = prompt("Question NO:1 \nWrite any number or words you want");
if (identity >= "A" && identity <= "Z") {
  alert("String is uppercase");
} else if (identity >= "a" && identity <= "z") {
  alert("String is lowercase ");
} else {
  alert("its a number");
}

// ============= Question NO:2==============

var int1 = +prompt("Question NO:2 \nInput First number you want");
var int2 = +prompt("Input second number you want");
if (int1 > int2) {
  alert("First number is greater than second number");
} else if (int1 < int2) {
  alert("Second number is greater than first number");
} else if (int1 === int2) {
  alert("both are equal");
} else {
  alert("Incorrect input");
}

// ============= Question NO:3==============

var inp = +prompt("Question NO:3 \nInput any number you want");
if (inp > 0) {
  alert("Number is positive");
} else if (inp < 0) {
  alert("Number is negative");
} else if (inp === 0) {
  alert("Number is Zero");
} else {
  alert("Incorrect input");
}

// ============= Question NO:4==============

var alpha = prompt("Question NO:4 \nEnter any alphabate");
if (
  alpha === "a" ||
  alpha === "A" ||
  alpha === "e" ||
  alpha === "E" ||
  alpha === "i" ||
  alpha === "i" ||
  alpha === "o" ||
  alpha === "O" ||
  alpha === "u" ||
  alpha === "U"
) {
  alert("true");
} else {
  alert("false");
}

// ============= Question NO:5   ==============

var pass1 = "Sadiq98";
var pass2 = prompt("Question NO:5 \nEnter the password for login");
if (pass2 === "") {
  pass2 = prompt("Please enter your password");
}
if (pass1 === pass2)
  alert("Correct! The password you entered matches the original password");
else {
  alert("Incorrect password");
}

// ============= Question NO:6   ==============

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// ============= Question NO:7   ==============

var time = +prompt(
  'Question NO:7 \nEnter the current time in fomrate "2400" Hour'
);
if (time >= 0000 && time < 1200) {
  alert('"Good Morning!"');
} else if (time >= 1200 && time < 1700) {
  alert('"Good Afternoon!"');
} else if (time >= 1700 && time < 2100) {
  alert('"Good Evening!"');
} else if (time >= 2100 && time <= 2400) {
  alert('"Good Night!"');
}
