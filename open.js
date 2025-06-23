let boxes = document.querySelectorAll(".box");
let oturn =true; 
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn"); 
let resetbtn = document.querySelector("#resetbtn");
msgContainer.classList.add("hide");
let count = 0 ;
const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]
];

let gameDraw = ()=>{
msgContainer.classList.remove("hide");
msg.innerText = "GAME WAS A DRAW! TRY AGAIN..";
enableboxes();
oturn = true; 
}

const reset =()=>{
   msgContainer.classList.add("hide");
   oturn=true;
   count = 0;
   enableboxes();

}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(oturn===true){
box.innerText="o";
    oturn=false;
}else{
   box.innerText="x";
    oturn=true;
}
count++;
box.disabled = true;
let isWinner = checkWinner();
if(isWinner === true){
    disableboxes();
}
if((count===9) && !isWinner){
    gameDraw();
}
});

});


let disableboxes = ()=> {
    for(let box of boxes ){
        box.disabled=true;
    }
}
let enableboxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}

let showWinner = (Winner)=>{
msg.innerText=(`WINNER IS ${Winner} 🎊`)
msgContainer.classList.remove("hide");
}

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let p1val = boxes[pattern[0]].innerText;
       let p2val = boxes[pattern[1]].innerText;
       let p3val = boxes[pattern[2]].innerText;
            if(p1val != "" && p2val != "" && p3val != ""){
                if(p1val === p2val && p2val === p3val){
                   showWinner(p1val);
                    return true;                  
                            }
            }
    }
    return false;
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);
