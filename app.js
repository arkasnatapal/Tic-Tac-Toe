let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let msg=document.querySelector(".MSG");
let message=document.querySelector(".text");
let turnO=true; // this means when the turnO is true the first play will of O player and if its false then it will of X player
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame= () =>{
    turnO=true;
    enableboxes();
    msg.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled="true";
        winner();
    });
});
const boxdisable =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(champ) =>{
    message.innerText = `Congratulation !! the WINNER is ${champ}`;
    msg.classList.remove("hide");
    boxdisable();
}

const winner =() =>{
    for(let wins of winning){
        let pos1 = boxes[wins[0]].innerText;
        let pos2 = boxes[wins[1]].innerText;
        let pos3 = boxes[wins[2]].innerText;
    
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }

    }
}
reset.addEventListener("click",resetGame);
