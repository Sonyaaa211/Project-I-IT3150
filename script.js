let value = "1";
window.project = window.project || {};

project.Init = function(){
  project.arr = [];
  project.res = "";
  project.n = 0;
  project.check = [];

  project.v = 0;
  project.visited;
  project.edges = [];

  project.k = 0;
  project.startAccount = "";
  project.count = 0;
}
function solve(){
  var inputVal = document.getElementById("input").value;
  project.Init();
  document.getElementById("output").value = "Calculating...";
  switch(value){
    case "1":
      document.getElementById("output").value = project.solution_1_1(inputVal);
      break;
    case "2":
      document.getElementById("output").value = project.solution_1_2(inputVal);
      break;
    case "3":
      document.getElementById("output").value = project.solution_1_3(inputVal);
      break;
    case "4":
      document.getElementById("output").value = project.solution_1_4(inputVal);
      break;
    case "5":
      document.getElementById("output").value = project.solution_1_5(inputVal);
      break;
    case "6":
      document.getElementById("output").value = project.solution_1_6(inputVal);
      break;
    case "7":
      document.getElementById("output").value = project.solution_1_7(inputVal);
      break;
    case "8":
      document.getElementById("output").value = project.solution_1_8(inputVal);
      break;
    case "9":
      document.getElementById("output").value = project.solution_1_9(inputVal);
      break;
    case "10":
      document.getElementById("output").value = project.solution_1_10(inputVal);
      break;
    case "11":
      document.getElementById("output").value = project.solution_1_11(inputVal);
      break;
    case "12":
      document.getElementById("output").value = project.solution_1_12(inputVal);
      break;
    case "13":
      document.getElementById("output").value = project.solution_1_13(inputVal);
      break;
    case "14":
      document.getElementById("output").value = project.solution_1_14(inputVal);
      break;
    case "15":
      document.getElementById("output").value = project.solution_2_1(inputVal);
      break;
    case "16":
      document.getElementById("output").value = project.solution_2_2(inputVal);
      break;
    case "17":
      document.getElementById("output").value = project.solution_2_3(inputVal);
      break;
    case "18":
      document.getElementById("output").value = project.solution_2_4(inputVal);
      break;
    case "19":
      document.getElementById("output").value = project.solution_2_5(inputVal);
      break;
    case "20":
      document.getElementById("output").value = project.solution_2_6(inputVal);
      break;
    case "21":
      document.getElementById("output").value = project.solution_3_1(inputVal);
      break;
    case "22":
      document.getElementById("output").value = project.solution_3_2(inputVal);
      break;
    case "23":
      document.getElementById("output").value = project.solution_3_3(inputVal);
      break;
    case "24":
      document.getElementById("output").value = project.solution_3_4(inputVal);
      break;
    case "25":
      document.getElementById("output").value = project.solution_3_5(inputVal);
      break;
    case "26":
      document.getElementById("output").value = project.solution_3_6(inputVal);
      break;
    case "27":
      document.getElementById("output").value = project.solution_3_7(inputVal);
      break;
    case "28":
      document.getElementById("output").value = project.solution_3_8(inputVal);
      break;
    case "29":
      document.getElementById("output").value = project.solution_4_1(inputVal);
      break;
    case "30":
      document.getElementById("output").value = project.solution_4_2(inputVal);
      break;
    case "31":
      document.getElementById("output").value = project.solution_4_3(inputVal);
      break;
    case "32":
      document.getElementById("output").value = project.solution_4_4(inputVal);
      break;
    case "33":
      document.getElementById("output").value = project.solution_5_1(inputVal);
      break;
    case "34":
      document.getElementById("output").value = project.solution_5_2(inputVal);
      break;
    case "35":
      document.getElementById("output").value = project.solution_5_3(inputVal);
      break;
    case "36":
      document.getElementById("output").value = project.solution_5_4(inputVal);
      break;
    case "37":
      document.getElementById("output").value = project.solution_6_1(inputVal);
      break;
    case "38":
      document.getElementById("output").value = project.solution_6_2(inputVal);
      break;
    case "39":
      document.getElementById("output").value = project.solution_6_3(inputVal);
      break;
    case "40":
      document.getElementById("output").value = project.solution_7_1(inputVal);
      break;
    case "41":
      document.getElementById("output").value = project.solution_7_2(inputVal);
      break;
    case "42":
      document.getElementById("output").value = project.solution_8_1(inputVal);
      break;
    case "43":
      document.getElementById("output").value = project.solution_8_2(inputVal);
      break;
  }
}

$(".menu > ul > li").click(function (e) {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  
  $(this).find("ul").slideToggle();
  $(this).siblings().find("ul").slideUp();
  $(this).siblings().find("ul").find("li").removeClass("active");

  
})

function getValue(element) {
  value = element.getAttribute('data-value');
  console.log(value);
  document.getElementById("problem-text").innerHTML = project.problemInfo[value];
}