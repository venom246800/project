var x = 0;
var y = 0;
const animatedMarker = document.querySelector("#animated-marker");

const startScreen = document.querySelector("#start-plane");
const startText = document.querySelector("#start-text");

const xAxis = document.querySelector("#x-axis");
const yAxis = document.querySelector("#y-axis");        

const aBar1 = document.querySelector("#bar1");
const aBar2 = document.querySelector("#bar2");
const aBar3 = document.querySelector("#bar3");
const aBar4 = document.querySelector("#bar4");
const aBar5 = document.querySelector("#bar5");
const aBar6 = document.querySelector("#bar6");

const aPop1 = document.querySelector("#pop1");
const aPop2 = document.querySelector("#pop2");

const aVid = document.querySelector("#vid");

const aScreen = document.querySelector("#screen");
const aText = document.querySelector("#text");

function playFunction() {
    console.log("Function Called")
      if(x==0)
        {
          x=1;
          document.querySelector('#vid-ast').pause();
        }    
        else
        {
          x=0;
          aVid.setAttribute('visible','true');
          document.querySelector('#vid-ast').play();
        }
        aScreen.setAttribute('visible','false');  
}

function infoFunction() {
    console.log("Function 2 Called")
      if(y==0){
            y=1;
            aScreen.setAttribute('visible','true');  
            aText.setAttribute('visible','true');
        }
        else{
            y=0;
            aScreen.setAttribute('visible','false');
            aText.setAttribute('visible','false');
        }
        aVid.setAttribute('visible','false');
        document.querySelector('#vid-ast').pause();
}

