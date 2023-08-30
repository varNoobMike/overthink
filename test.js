let background = document.querySelector(".background");
let mainText = document.querySelector(".text");
let btn = document.querySelector(".btn");
let clickCount = 0;
let colorSwitched = false;
let reset = false;

let texts = {
  questions:{
    q1:"ikaw pa ba?",
    q2:"o 'di na?"
  },
  statements:{
    s1:"Tama na! Suko na ko.",
    s2:"Pede, kaya patuloy lang."
  }
};


function appearance(background){
  
  background.addEventListener("click",()=>{
   
    clickCount++;
    
    if(!reset){
    
      if(!colorSwitched){
        changeBackground(background,"violet");
        changeMainText(mainText,texts.questions.q1,"ghostwhite","italic");
        btnAppearance(btn,"auto","visible");
        changeBtnText(btn,texts.statements.s2);
        colorSwitched = true;
        
      }
      else{
        changeBackground(background,"black");
        changeMainText(mainText,texts.questions.q2,"ghostwhite","italic");
        changeBtnText(btn,texts.statements.s1);
        colorSwitched = false;
      
      };
    

    
    }
    
    else if(reset){
      reset = false;
    };
    
    
  });
  
  
};
function changeBackground(background,color){
    background.style.backgroundColor = color;
};
function changeMainText(mainText,text,color,fontStyle){
  mainText.innerText = text;
  mainText.style.color = color;
  mainText.style.fontStyle = fontStyle;
};
function btnAppearance(btn,pointerEvents,visibility){
  btn.style.pointerEvents = pointerEvents;
  btn.style.visibility = visibility;
};
function changeBtnText(btn,text){
  
  btn.innerText = text;
  

};
function handleReset(btn,background){
  btn.addEventListener("click",()=>{
    
    reset = true;
    colorSwitched = false;
    clickCount = 0;
    changeBackground(background,"gray");
    changeMainText(mainText,"Hello Mike!","ghostwhite","italic");
    btnAppearance(btn,"none","hidden");
    
  });
  
};

appearance(background);
handleReset(btn,background);
