// =====================Question No:1=======================

var first = [[], [], []];

// =====================Question No:2=======================

var second = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
document.write("<p>" + "<h1>" + "Question No:2" + "</h1>" + "</p>");
document.write(second[0], "<br>");
document.write(second[1], "<br>");
document.write(second[2], "<br>");

// =====================Question No:3=======================

document.write("<p>" + "<h1>" + "Question No:3" + "</h1>" + "</p>");

for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// =====================Question No:4=======================

document.write("<p>" + "<h1>" + "Question No:4" + "</h1>" + "</p>");

var num = +prompt("Enter a number to show its multiplication table");
var num1 = +prompt("Enter the length of multiplication Table");
for (var i = 1; i <= num1; i++) {
  document.write(num + " * " + i + " = " + num * i + "<br>");
}

// =====================Question No:5=======================

document.write("<p>" + "<h1>" + "Question No:5" + "</h1>" + "</p>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index" + " " + i + " is " + fruits[i] + "<br>");
}

// =====================Question No:6=======================

document.write("<p>" + "<h1>" + "Question No:6" + "</h1>" + "</p>");
document.write("Counting:");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Reverse Counting:");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Even:");
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) document.write(i + ", ");
}
document.write("<br>");

document.write("Odd:");
for (var i = 0; i <= 20; i++) {
  if (i % 2 !== 0)
    //(i%2 !== 1)
    document.write(i + ", ");
}
document.write("<br>");

document.write("Series:");
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) document.write(i + "k" + ", ");
}
document.write("<br>");

// =====================Question No:7=======================

document.write("<p>" + "<h1>" + "Question No:7" + "</h1>" + "</p>");

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to MSK Bakery \nWhat do you want to order Sir/Ma'am?");
for (i = 0; i < a.length; i++) {
  if (a[i] === b) {
    alert(a[i] + " is available at counter No " + i + " in our bakery");
  } else {
    alert("Sorry!\n" + b + " is out of stock");
    var b = prompt(
      "Welcome to MSK Bakery \nWhat do you want to order Sir/Ma'am?"
    );
  }
}

// =====================Question No:8=======================

document.write("<p>" + "<h1>" + "Question No:8" + "</h1>" + "</p>");

var greNum = [23, 5, 45, 54, 43, 57, 89, 43, 23];
var greater = 0;
for (i = 0; i < greNum.length; i++) {
  if (greNum[i] >= greater) {
    greater = greNum[i];
  }
}
document.write("Greater Number is " + greater);

// =====================Question No:9=======================

document.write("<p>" + "<h1>" + "Question No:9" + "</h1>" + "</p>");

var sNum = [23, 5, 45, 54, 43, 57, 89, 43, 23];
var small = Number.POSITIVE_INFINITY;
for (i = 0; i < sNum.length; i++) {
  if (sNum[i] <= small) {
    small = Math.min(small, sNum[i]);
  }
}
document.write("Samller Number is " + small);

// =====================Question No:10=======================

document.write("<p>" + "<h1>" + "Question No:10" + "</h1>" + "</p>");

//  for (var i = 1; i<=100; i++word.length-1) - i
//      if ( i % 5 == 0){
//          document.write(i+", ")
//      }
//  }

var word = prompt("enter word");
var flag = false;
for (var i = 0; i < word.length; i++) {
  if (word[i] === word[word.length - 1 - i]) {
    flag = true;
  } else {
    flag = false;
    break;
  }
}
if (flag) {
  alert("you word is palindrome");
} else {
  alert("try again");
}
