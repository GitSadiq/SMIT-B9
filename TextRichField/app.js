document.getElementById("backColor").value = "#ffffff";
function handleText() {
  var color = document.getElementById("fontColor").value;
  var bColor = document.getElementById("backColor").value;
  var num = document.getElementById("num").value;
  var weight = document.getElementById("weight").value;
  var style = document.createElement("style");
  style.innerHTML = `.InputField{
    background-color: ${bColor};
    color: ${color};
    font-size: ${num}px; 
    font-weight: ${weight};
  }`;
  var text = document.getElementById("text-input").appendChild(style);
}
