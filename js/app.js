function GetInfo()
{
    var predmet =document.getElementById("predmet").value;
    var godina = document.getElementById("godina").value;
    var ects = document.getElementById("ects").value;


   
   var table = document.getElementById("addInfo");
   table.innerHTML +="<tr><td>"+predmet+"</td><td>"+godina+"</td><td>"+ects+"</td><td onclick='DeleteRowFunction()'><button>D</button></td><tr>";
}


function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}