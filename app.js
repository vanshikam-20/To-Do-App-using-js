let todo = [];
let req = prompt("please enter your choice or request");
while(true){
    if(req == "quit"){
        console.log("quitting app now");
        break;
    }
    if(req == "list"){
        console.log("-------------");
        for(let i=0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");

    }else if(req == "add"){
        let task = prompt("please enter your task to add");
        todo.push(task);
        console.log("task added");
    }else if ( req == "delete"){
        let idx = prompt("please enter the task index to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request ! please read the requests !")
    }

     req = prompt("please enter your choice or request");

}


console.log(req);