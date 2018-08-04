// var InputText= document.getElementById("InputText").value;
// var PendingTasks= document.getElementsByClassName("pending-tasks")[0];

// var listItem = document.createElement("li");
// listItem.innerText = InputText;
// PendingTasks.appendChild(listItem);

function newElement() {
  var newli = document.createElement("li");
  var inputValue = document.getElementById("InputText").value;
  var label=document.createElement("label");
  label.innerText = inputValue;
  newli.appendChild(label);
  var deleteButton=document.createElement("button");
  deleteButton.innerText="X";
  deleteButton.className="delete";
  deleteButton.onclick="delElement()";
  newli.appendChild(deleteButton);

//   var cross= document.createElement("div");
//   cross.innerHTML= '<button type="button" class="close" onclick="delElement()" aria-label="Close">
//   <span aria-hidden="true">&times;</span>
// </button>'
//   newli.appendChild(cross);

  var PendingTasks= document.getElementById("pending-tasks");
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    PendingTasks.appendChild(newli);
  }
  document.getElementById("InputText").value = "";
}

function delElement() {
var listItem= this.parentNode;
var ol= listItem.parentNode;
ol.removeChild(listItem);

}


