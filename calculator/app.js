var res = document.getElementById("res");
function main(dat) {
  if (dat == "erase") {
    res.innerText = "";
  } else if (dat == "enter") {
    res.innerText = eval(res.innerText).toFixed(3);
  } else {
    res.innerText += dat;
    var getTextLength = res.innerText.length;
    var isFirstCharacterOperator = res.innerText[0];
    var getLastChar = res.innerText[getTextLength - 1];
    var getSecLastChar = res.innerText[getTextLength - 2];
    var secCondition =
      getSecLastChar == "+" ||
      getSecLastChar == "-" ||
      getSecLastChar == "*" ||
      getSecLastChar == "/" ||
      getSecLastChar == ".";
    if (
      isFirstCharacterOperator == "-" ||
      isFirstCharacterOperator == "/" ||
      isFirstCharacterOperator == "+" ||
      isFirstCharacterOperator == "*" ||
      isFirstCharacterOperator == "."
    ) {
      res.innerText = "";
    } else if (
      (getLastChar == "+" && secCondition) ||
      (getLastChar == "-" && secCondition) ||
      (getLastChar == "*" && secCondition) ||
      (getLastChar == "/" && secCondition) ||
      (getLastChar == "." && secCondition)
    ) {
      var removeDuplicateOperator = res.innerText.split("");
      removeDuplicateOperator.pop();
      var changeToString = removeDuplicateOperator.join("");
      res.innerText = changeToString;
      console.log(changeToString);
    }
  }
}
