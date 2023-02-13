// ============= Question NO:1==============

var StudentName = [];

// // ============= Question NO:2==============

var StudentName = {};

// // ============= Question NO:3==============

var stringArray = ["Muhammad", "Sadiq", "Khan"];

// // ============= Question NO:4==============

var numArray = [12, 2, 1998];

// // ============= Question NO:5==============

var bulleanArray = [true, false];

// // ============= Question NO:6==============

var mixedArray = ["Muhammad", 2, true, "$"];

// ============= Question NO:7==============

var degrees = ["SCC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<p>" + "<h3>" + "Qualifications:" + "</h3>" + "</p>");
document.write(
  "<ol>" +
    "<li>" +
    degrees[0] +
    "</il>" +
    "<li>" +
    degrees[1] +
    "</il>" +
    "<li>" +
    degrees[2] +
    "</il>" +
    "<li>" +
    degrees[3] +
    "</il>" +
    "<li>" +
    degrees[4] +
    "</il>" +
    "<li>" +
    degrees[5] +
    "</il>" +
    "<li>" +
    degrees[6] +
    "</il>" +
    "<li>" +
    degrees[7] +
    "</il>" +
    "</ol>"
);

// ============= Question NO:8==============

var names = ["Asad", "Kareem", "Waleed"];
var score = [450, 310, 250];
var per = [
  (score[0] / 500) * 100,
  (score[1] / 500) * 100,
  (score[2] / 500) * 100,
];
document.write("<p>" + "<h3>" + "Question NO:8" + "</h3>" + "</p>");
document.write(
  "<p>" +
    "score of " +
    names[0] +
    " is " +
    score[0] +
    " and got percentage " +
    per[0] +
    "%" +
    "</p>"
);
document.write(
  "<p>" +
    "score of " +
    names[1] +
    " is " +
    score[1] +
    " and got percentage " +
    per[1] +
    "%" +
    "</p>"
);
document.write(
  "<p>" +
    "score of " +
    names[2] +
    " is " +
    score[2] +
    " and got percentage " +
    per[2] +
    "%" +
    "</p>"
);

// // ============= Question NO:9==============

var color = ["red", "green", "yellow"];
document.write("<p>" + "<h3>" + "Question NO:9" + "</h3>" + "</p>");
document.write(color);

// // ============= Question NO:9(a)==============

var addColorStart = prompt(
  "Question No: 9(a) \n write the color you want to add in starting array"
);
color.unshift(addColorStart);
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(b)==============

var addColorEnd = prompt(
  "Question No: 9(b) \nwrite the color you want to add at end of array"
);
color.push(addColorEnd);
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(c)==============

color.unshift("white", "black");
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(d)==============

color.shift();
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(e)==============

color.pop();
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(f)==============

var index = prompt(
  "Question No: 9(f) \nwrite the index number you want to add the color in array"
);
var addColorIndex = prompt("write the color you want to add in array");
color.splice(index, 0, addColorIndex);
document.write("<p>" + color + "</p>");

// // ============= Question NO:9(g)==============

var ind = prompt(
  "Question No: 9(g) \nwrite the index number you want to delete the color in array"
);
var delColorIndex = prompt("How many color you want to delete in array");
color.splice(ind, delColorIndex);
document.write("<p>" + color + "</p>");

// ============= Question NO:10==============

var stdNum = [234, 456, 120, 325, 756];
document.write("<p>" + "<h3>" + "Question NO:10" + "</h3>" + "</p>");
document.write("Scores of Student :", stdNum, "</br>");
document.write("Ordered Scores of Students", stdNum.sort());

// ============= Question NO:11==============

var cities = ["karachi", "lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<p>" + "<h3>" + "Question NO:11" + "</h3>" + "</p>");
document.write("Cities List " + "<br>" + cities + "<br>");
var cities = cities.slice(2, 4);
document.write("Selected cities List" + "<br>" + cities);

// ============= Question NO:12==============

var arr = ["This", "is", "my", "cat"];
document.write("<p>" + "<h3>" + "Question NO:12" + "</h3>" + "</p>");
document.write(arr + "<br>");
document.write(arr.join(" "));

// ============= Question NO:13==============

var device = ["keyboard", "mouse", "printer", "monitor"];
device.shift();
device.shift();
device.shift();
device.shift();

// ============= Question NO:14==============

var device2 = ["keyboard", "mouse", "printer", "monitor"];
device2.pop();
device2.pop();
device2.pop();
device2.pop();

// ============= Question NO:15==============

var drop = ["Apple", "Samsung", "Oppo", "Nokia", "Sony", "Haier"];
document.getElementById("d1").innerHTML = drop[0];
document.getElementById("d2").innerHTML = drop[1];
document.getElementById("d3").innerHTML = drop[2];
document.getElementById("d4").innerHTML = drop[3];
document.getElementById("d5").innerHTML = drop[4];
document.getElementById("d6").innerHTML = drop[5];
