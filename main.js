let arrinfo = [];
let submit = document.querySelector("#btnsubmit");
document.getElementById("answer").disabled=true;
var radios = document.forms[0].elements["radBtn2"];
for (var i = [0]; i < radios.length; i++){
    radios[i].onclick=radioClicked;
}
function radioClicked() {

switch(this.value) {
    case "No" :
      document.getElementById("answer").disabled=true;
      
        break;
    case "Yes" :
      document.getElementById("answer").disabled=false;
     
        break;
  
}
}
const addinfo = (event) => {
  let Fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname =  document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let contact = document.getElementById("contact").value;
  let Bdate = document.getElementById("Bdate").value;
  let ifyes =  document.getElementById("answer").value;
  if (Fname === "" || mname =="" || lname =="" || address =="" || contact =="" || Bdate =="") {
    alert("missing fields");
  } else {
    event.preventDefault();
    let selectprog = document.querySelector("#symptoms");
    var arrsymptoms = [];
    for (var option of selectprog.options) {
      if (option.selected) {
        arrsymptoms.push(option.value);
      }
    }

    if (document.getElementById("radBtn1").checked) {
      var gender = document.getElementById("radBtn1").value;
    } else {
      var gender = document.getElementById("radBtn2").value;
    }
    if (document.getElementById("radBtn3").checked) {
      var medication = document.getElementById("radBtn3").value;
    } else {
      var medication = document.getElementById("radBtn4").value;
    }

    let mhistory = getCheckboxValues("check");

    let newObject = {
      fname: Fname,mname: mname,lname:lname,address: address, Bdate: Bdate,contact:contact,arrsymptoms: arrsymptoms,mhistory: mhistory, gender: gender,medication: medication, ifyes:ifyes,
    };
    arrinfo.push(newObject);
    document.querySelector("#forminfo").reset();
    console.table(arrinfo);
   
  }
};
function getCheckboxValues(check) {
  let arr = [];
  let checkboxes1 = document.querySelectorAll(`input[name="${check}"]:checked`);

  checkboxes1.forEach((cBox) => {
    arr.push(cBox.value);
  });

  return arr;
}
let logout = document.getElementById("btnlogout");
logout.addEventListener("click", () => {
  window.location = "usinglocalstorage.html";
});
submit.addEventListener("click", addinfo);
if (document.getElementById("radBtn4").checked) {
  document.getElementById("answer").disabled = true;
}
var passUser = sessionStorage.getItem("passuser");
alert(`Welcome ${passUser}`);