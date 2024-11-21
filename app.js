let btn = document.querySelector("button");
let ul= document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value= "";
    //this is for making the input empty after submitting
})


ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        //nodename is used to only acces the delete buton and not the whole UL
let listitem =event.target.parentElement;
listitem.remove();
        console.log("deletes");

    }
})

//event delegatipon bubbling