
//localStorage.setItem("tabella","");
// console.log("nome: " , localStorage.getItem("nome"))
$("#tab").append(JSON.parse(localStorage.getItem("tabella")));
//localStorage.clear();
var tableArray = [];
$("#btn1").click(function (){
  calculation("+")}
);
$("#btn2").click(function (){
  calculation("-")}
);
$("#btn3").click(function (){
  calculation("*")}
);
$("#btn4").click(function (){
  calculation("/")}
);
var calculation = function (segno) { 
  var input1 = $("#num1");
  var input2 = $("#num2");
  console.log("input1", input1.val());
  console.log("input2", input2.val());
  if (input1.val() && input2.val()) {
    var n1 = parseInt(input1.val());
    var n2 = parseInt(input2.val());
    switch (segno) {
      case "+":
        var risultato = n1 + n2;
        break;
      case "-":
        var risultato = n1 - n2;
        break;
      case "*":
        var risultato = n1 * n2;
        break;
      case "/":
        var risultato = n1 / n2;
        break;
    }
    var string =
        "<tr><td>" +
        n1 +
        "</td><td style='text-align:center'>" +
        segno +
        "</td><td>" +
        n2 +
        "</td><td>" +
        risultato +
        "</td></tr>";
        tableArray.push(string);
        console.log(tableArray);

        //var table = localStorage.getItem("tabella");
        // localStorage.setItem("tabella", table + string);
        //var jsonArr = {"arr" : tableArray};
        localStorage.setItem("tabella", JSON.parse(tableArray));
    $("#tab").append(string);
    input1.val("");
    input2.val("");
  }
}