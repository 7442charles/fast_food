


var hexChars = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

var messages = ["Cascade Restaurant", "Cascade Premier", "Cascade Annex", "Cascade Hospitality college"];



var elementTimer;
var counter=0;
var index=0;
var messageIndex=0;
var message="";

window.onload = function() {
    Init();
};

function Init(){
    counter=0;
    index=0;
    message="";
    CreateElements();
    elementTimer = setInterval(MakeVisible, 100);
}

function RandomColor() {
    var hex = "#";
    while (hex.length < 7) {
    hex += hexChars[Math.floor(Math.random() * 14)];
    }
    return hex;
}

function CreateElements(){

    message=messages[messageIndex];

    for (j=0; j<message.length; j++) {
        var span = document.createElement("span");
        span.style.opacity=0;
        span.innerHTML = message[j];
        var container= document.getElementById("container");
        container.appendChild(span);
        counter++;
    }

}

function MakeVisible(){

   var el = container.getElementsByTagName("span");
   if(index<counter){
       el[index].innerHTML = message[index];
       el[index].style.opacity=1;
       el[index].style.color = RandomColor ();
       index++;
   }else{
       index=counter-1;
      clearInterval(elementTimer);
      elementTimer = setInterval(WaitForATime, 1000);
   }

}


function RemoveElements(){

   var el = container.getElementsByTagName("span");
   if(index>=0){
       container.removeChild(el[index]);
       index--;
   }else{
      clearInterval(elementTimer);
      messageIndex=SetMessageIndex();
      Init();
   }

}

function SetMessageIndex(){
    var numberOfMessages = messages.length;
    messageIndex++;
    if(messageIndex>=numberOfMessages){
       messageIndex=0;
    }
    return messageIndex;
}

function WaitForATime(){
    clearInterval(elementTimer);
    elementTimer = setInterval(RemoveElements, 50);
}
