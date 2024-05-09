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

let currentplayer = ""

x.onclick = function(e){
    currentplayer = "X"
    xclicked = true
    oclicked = false
}
o.onclick = function(e){
    currentplayer = "O"
    xclicked = false
    oclicked = true
}


function compplayer(){

    // let areas = document.querySelectorAll(".area")

    let random_no = Math.floor(Math.random() * 2) + 1


    if(area1.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area1.textContent = "O"
        }
        if(random_no === 2)
        {
            area1.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area1.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area1.textContent = "X"
        }
        if(random_no === 2)
        {
            area1.textContent = "X"
        }
        random_no = ""
        
    }
    if(area2.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area2.textContent = "O"
        }
        if(random_no === 2)
        {
            area2.textContent = "O"
        }

        random_no = ""
        
    }               
    else if(area2.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area2.textContent = "X"
        }
        if(random_no === 2)
        {
            area2.textContent = "X"
        }
        random_no = ""
        
    }
    if(area3.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area3.textContent = "O"
        }
        if(random_no === 2)
        {
            area3.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area3.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area3.textContent = "X"
        }
        if(random_no === 2)
        {
            area3.textContent = "X"
        }
        random_no = ""
        
    }
    if(area4.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area4.textContent = "O"
        }
        if(random_no === 2)
        {
            area4.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area4.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area4.textContent = "X"
        }
        if(random_no === 2)
        {
            area4.textContent = "X"
        }
        random_no = ""
        
    }
    if(area5.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area5.textContent = "O"
        }
        if(random_no === 2)
        {
            area5.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area5.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area5.textContent = "X"
        }
        if(random_no === 2)
        {
            area5.textContent = "X"
        }
        random_no = ""
        
    }
    if(area6.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area6.textContent = "O"
        }
        if(random_no === 2)
        {
            area6.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area6.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area6.textContent = "X"
        }
        if(random_no === 2)
        {
            area6.textContent = "X"
        }
        random_no = ""
        
    }
    if(area7.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area7.textContent = "O"
        }
        if(random_no === 2)
        {
            area7.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area7.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area7.textContent = "X"
        }
        if(random_no === 2)
        {
            area7.textContent = "X"
        }
        random_no = ""
        
    }
    if(area8.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area8.textContent = "O"
        }
        if(random_no === 2)
        {
            area8.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area8.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area8.textContent = "X"
        }
        if(random_no === 2)
        {
            area8.textContent = "X"
        }
        random_no = ""
        
    }
    if(area9.textContent === "" && currentplayer == "X"){

        if(random_no === 1)
        {
            area9.textContent = "O"
        }
        if(random_no === 2)
        {
            area9.textContent = "O"
        }

        random_no = ""
        
    }
    else if(area9.textContent === "" && currentplayer == "O"){

        if(random_no === 1)
        {
            area9.textContent = "X"
        }
        if(random_no === 2)
        {
            area9.textContent = "X"
        }
        random_no = ""
        
    }

    
}


function checkinsertandmakemove(area) {
   
   if(currentplayer === "X" && area.textContent === ""){
    area.textContent = "X"
    compplayer()
    currentplayer = "X"
    
   }
   if(currentplayer === "O" && area.textContent === ""){
    area.textContent = "O"
    compplayer()
    currentplayer = "O"
    
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