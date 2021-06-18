var noBookingCheck = document.querySelector("mat-selection-list").children["length"];

if (noBookingCheck !=0) {
  checkAllTheValues();
}else {
  console.log(noBookingCheck);
}


function checkAllTheValues() {
  var allList = document.querySelectorAll(".mat-selection-list ion-row.md");
var place = []; // place name 
var slots = [];// booking area - dates
var preferredSlots = [];
for(var i = 0 ; i < allList.length ; i++) {
  var header = allList[i].children;
 place.push(header[0]);
  slots.push(header[1]);
  
}
var placeName = place.map(function (item) {
  return (`${item.children[0].children[0].innerText} , address = ${item.children[0].children[1].innerText}`);
})

//got the place name as per the index and now then 
//slots checking; 

slots.forEach(function (item, index) {
  var list = item.childNodes[0]
  list = list.children
  
for(var i = 0 ; i < list.length ; i++) {
    var firstChild = list[i].children[0];
  	var classValue = firstChild.getAttribute("class");
    
   if (!classValue.includes("no-available"))  {
       var Value = firstChild.children[0];
     		var age = Value.children[2].innerText ;
   			var number =Value.children[0].innerText;
   			
     if(age.includes("18") && !number.includes("Booked")){
       preferredSlots.push(index);
     }
       }
   }
})
var allGP = preferredSlots.filter(item => {

 if(!placeName[item].includes("PAID")) {
   return true;
 }else {
   return false;
 }
	
})

if(allGP.length === 0) {
  console.log("No places");
}else {
  for(var i = 0 ; i < allGP.length ;i++ ){
    console.log(placeName[allGP[i]]);
  }
}

}


