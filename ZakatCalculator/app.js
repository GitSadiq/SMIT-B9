function calculate() {
  var money = document.getElementById("money").value;
  var balance = document.getElementById("balance").value;
  var gold = document.getElementById("gold").value;
  var silver = document.getElementById("silver").value;
  var assets = document.getElementById("assets").value;

  var currency = " Rupee";
  var cal = 0;

  if (money != "") {
    money = money * 0.025;
    cal += money;
  }
  if (balance != "") {
    balance = balance * 0.025;
    cal += balance;
  }
  if (gold != "") {
    gold = gold * 18429 * 0.025;
    cal += gold;
  }
  if (silver != "") {
    silver = silver * 217 * 0.025;
    cal += silver;
  }
  if (assets != "") {
    assets = assets * 0.025;
    cal += assets;
  }

  if (
    money == "" &&
    balance == "" &&
    gold == "" &&
    silver == "" &&
    assets == ""
  ) {
    Swal.fire("Error!", `Fields are empty please input some value`);
  } else if (cal > 130000) {
    document.getElementById("result").innerText = `Rs: ${cal.toFixed(0)}`;
    document.getElementById("conditionalRendering").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
  } else {
    Swal.fire(
      "Info",
      `You are not eligible for zakat because you amount is less then RS: 130,000`
    );
  }
}
function reset() {
  document.getElementById("money").value = "";
  document.getElementById("balance").value = "";
  document.getElementById("gold").value = "";
  document.getElementById("silver").value = "";
  document.getElementById("assets").value = "";
  document.getElementById("conditionalRendering").style.display = "flex";
  document.getElementById("resultContainer").style.display = "none";
}
