let x = document.querySelector(".btn1")
let o = document.querySelector(".btn2")

let area1 = document.querySelector(".area1");
let area2 = document.querySelector(".area2");
let area3 = document.querySelector(".area3");
let area4 = document.querySelector(".area4");
let area5 = document.querySelector(".area5");
let area6 = document.querySelector(".area6");
let area7 = document.querySelector(".area7");
let area8 = document.querySelector(".area8");
let area9 = document.querySelector(".area9");

let xclicked = false
let oclicked = false

x.onclick = function(e){
    xclicked = true
}
o.onclick = function(e){
    oclicked = true
}

// function checkinsertandmakemove(area){
//     if(xclicked == true && ((area1.textContent == "O" || undefined) || (area2.textContent == "O" || undefined)
//     || (area3.textContent == "O"|| undefined) || (area4.textContent == "O" || undefined ) || (area5.textContent == "O" || undefined)
//     || (area6.textContent == "O" || undefined) || (area7.textContent == "O" || undefined) || (area8.textContent == "O" || undefined)
//     || (area9.textContent == "O" || undefined))){
//         area.textContent = "X"
//         console.log(area)
//     }else if(oclicked == true && ((area1.textContent == "X" || undefined) || (area2.textcontent == "X" || undefined)
//     || (area3.textContent == "X"|| undefined) || (area4.textContent == "X" || undefined ) || (area5.textContent == "X" || undefined)
//     || (area6.textContent == "X" || undefined) || (area7.textContent == "X" || undefined) || (area8.textContent == "X" || undefined)
//     || (area9.textContent == "X" || undefined))){
//         area.textContent = "O"
//     }
     
    
// }

function checkinsertandmakemove(area) {
   
    if (xclicked && (area.textContent === "O" || area.textContent === "")) {
        area.textContent = "X";
        xclicked = false
    } 
   
    if (oclicked && (area.textContent === "X" || area.textContent === "")) {
        area.textContent = "O";
        oclicked = false
    }
}

area1.onclick = function(e){
    checkinsertandmakemove(area1)
    
}
area2.onclick = function(e){
    checkinsertandmakemove(area2)
 
}
area3.onclick = function(e){
    checkinsertandmakemove(area3)
    
}
area4.onclick = function(e){
    checkinsertandmakemove(area4)
 
}
area5.onclick = function(e){
    checkinsertandmakemove(area5)
    
}
area6.onclick = function(e){
    checkinsertandmakemove(area6)
 
}
area7.onclick = function(e){
    checkinsertandmakemove(area7)
    
}
area8.onclick = function(e){
    checkinsertandmakemove(area8)
 
}
area9.onclick = function(e){
    checkinsertandmakemove(area9)
 
}
