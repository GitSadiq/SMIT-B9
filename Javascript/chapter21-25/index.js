// ===============Question NO: 1=====================
var firstName = prompt("Question No:01\nEnter your first Name");
var lastName = prompt("Enter your last Name");
var fullName = firstName + " " + lastName;
// alert("Welcome" + "\n" + fullName )

// ===============Question NO: 2=====================
var mobile = prompt("Question No:02\nEnter the favorite mobile phones");
document.write("<h3>" + "<p>" + "Question No:2" + "</p>" + "</h3>");
document.write("Length of string:" + mobile.length);

// ===============Question NO: 3=====================
var str = "Pakistani";
document.write("<h3>" + "<p>" + "Question No:3" + "</p>" + "</h3>");
document.write("String:" + str + "<br>");
document.write("Index of n: " + str.indexOf("n", 4));

// ===============Question NO: 4=====================
var str1 = "Hello World";
document.write("<h3>" + "<p>" + "Question No:4" + "</p>" + "</h3>");
document.write("String:" + str1 + "<br>");
document.write("Last Index of l: " + str1.lastIndexOf("l"));

// ===============Question NO: 5=====================
document.write("<h3>" + "<p>" + "Question No:5" + "</p>" + "</h3>");
document.write("String:" + str + "<br>");
document.write("Last Index of l: " + str.charAt(3));

// ===============Question NO: 6=====================
alert(firstName.concat(lastName));

// ===============Question NO: 7=====================
var str1 = "Hyderabad";
document.write("<h3>" + "<p>" + "Question No:7" + "</p>" + "</h3>");
document.write("City:" + str1 + "<br>");
document.write("After replacement: " + str1.replace("Hyder", "Islam"));

// ===============Question NO: 8=====================
var str1 =
  "Ali and Sami are best friends. They play cricket and football together";
document.write("<h3>" + "<p>" + "Question No:8" + "</p>" + "</h3>");
document.write("Para: " + str1 + "<br>");
document.write("After replacement: " + str1.replace(/and/g, "&"));

// ===============Question NO: 9=====================
var num = "472";
document.write("<h3>" + "<p>" + "Question No:9" + "</p>" + "</h3>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");
var num1 = Number(num);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num1);

// ===============Question NO: 10=====================
document.write("<h3>" + "<p>" + "Question No:10" + "</p>" + "</h3>");
var inp = prompt("Question No:10\nEnter Input to change UpperCase");
var out = inp.toUpperCase();
document.write("User input: " + inp + "<br>");
document.write("Output: " + out);

// // ===============Question NO: 11=====================
document.write("<h3>" + "<p>" + "Question No:11" + "</p>" + "</h3>");
var inp = prompt("Question No:11\nEnter Input to change title case");
var out = inp.slice(0, 1).toUpperCase();
var out1 = inp.slice(1, inp.length);
document.write("User input: " + inp + "<br>");
document.write("Output: " + out + out1);

// ===============Question NO: 12=====================
document.write("<h3>" + "<p>" + "Question No:12" + "</p>" + "</h3>");
var num = 35.36;
var str = num.toString();
document.write("Number: " + num + "<br>");
document.write("Result: " + str.replace(".", ""));

// ===============Question NO: 13=====================
var userName = prompt("Question No:13\nEnter user name");
var match = false;
for (var i = 0; i < userName.length; i++) {
  if (
    userName[i] === "!" ||
    userName[i] === "@" ||
    userName[i] === "." ||
    userName[i] === ","
  ) {
    match = true;
    alert("Incorrect UserName");
  }
}
if (match === false) {
  alert("UserName is correct");
}

// ===============Question NO: 14=====================
document.write("<h3>" + "<p>" + "Question No:14" + "</p>" + "</h3>");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var inp = prompt(
  "Question No:14\nWelcome to MSk Baker's \nWhat item do you want"
).toLowerCase();
match = false;
for (var i = 0; i < arr.length; i++) {
  if (inp === arr[i]) {
    match = true;
    document.write(inp + " is available at counter No: " + i);
  }
}
if (match === false) {
  document.write("We are sorry");
}

// ===============Question NO: 15=====================
document.write("<h3>" + "<p>" + "Question No:15" + "</p>" + "</h3>");

var pass = prompt("Question No:15\nEnter password");
var match = false;
if (pass[0] <= 9) {
  document.write("Password is invalid: " + pass + "<br>");
  document.write("It's start with number");
} else if (pass.length <= 6) {
  document.write("Password is invalid: " + pass + "<br>");
  document.write("It's contain:" + pass.length + " Letters");
} else if (match === false)
  for (var i = 1; i < pass.length; i++) {
    if (pass[i] <= 9) {
      alert("Password is valid:");
      break;
    } else {
      match = true;
    }
  }
if (match === true) {
  document.write("<br>" + "Password is invalid: " + pass + "<br>");
  document.write("It's doesn't contain Numbers");
}

// ===============Question NO: 16=====================
document.write("<h3>" + "<p>" + "Question No:16" + "</p>" + "</h3>");

var uni = "University of Karachi";
var text = [];
text = uni.split("");
for (var i = 0; i < text.length; i++) {
  document.write(text[i] + "<br>");
}

// ===============Question NO: 17=====================
document.write("<h3>" + "<p>" + "Question No:17" + "</p>" + "</h3>");
var inp = prompt("Question No:17\nwrite any thing you want");
document.write("User Input: " + inp + "<br>");
document.write("Last Character is: " + inp.charAt(inp.length - 1) + "<br>");

// ===============Question NO: 18=====================
document.write("<h3>" + "<p>" + "Question No:18" + "</p>" + "</h3>");
var inp = "The quick brown fox jumps over the lazy dog";
var out = [];
out = inp.split(" ");
var len = [];
for (var i = 0; i < out.length; i++) {
  if (out[i] === "The" || out[i] === "the") {
    len.push("the");
  }
}
document.write("Text: " + out + "<br>");
document.write("There are " + len.length + " occurance of word 'the'");
