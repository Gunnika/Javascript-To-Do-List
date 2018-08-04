function newElement() {
  var newli = document.createElement("li");
  var inputValue = document.getElementById("InputText").value;
  var label=document.createElement("label");
  label.innerText = inputValue;
  newli.appendChild(label);
  var deleteButton=document.createElement("button");
  deleteButton.innerText="X";
  deleteButton.id="delete";
  deleteButton.onclick = function() {

      var listItem = this.parentNode;

      var ol = listItem.parentNode;

      ol.removeChild(listItem);
    };
    
  newli.appendChild(deleteButton);

  var PendingTasks= document.getElementById("pending-tasks");
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    PendingTasks.appendChild(newli);
  }
  document.getElementById("InputText").value = "";
}

// function delElement() {
// var listItem= this.parentNode;
// var ol= listItem.parentNode;
// ol.removeChild(listItem);

// };


