var parent = document.querySelector(".modal-parent"),
btn = document.querySelector("button"),
X = document.querySelector(".X"),
section = document.querySelector("section");

btn.addEventListener("click",appear);

function appear(){
    parent.style.display = "block";
    section.style.filter = "blur(10px)";
}

X.addEventListener("click",dissapearX);
function dissapearX(){
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
}

parent.addEventListener("click",dissapearparent);

function dissapearparent(e){
    if(e.target.className == "modal-parent"){

 parent.style.display = "none";
    section.style.filter = "blur(0px)"
    }
}



