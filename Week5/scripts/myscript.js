
document.getElementById("btnExample").addEventListener("click", reactToEvent);

function reactToEvent(){
    alert("The button was clicked!");
}
 

document.getElementById("btnGetTicket").addEventListener("click", e=>{
    
    let age = document.getElementById("txtAge").value;
    let output = "";
    
    if (age < 14){
        output = "Childs Ticket";
    }
    else if (age < 65){
        output = "Adult Ticket";
    }
    else{
        output = "Travel Free";
    }
    
    document.getElementById("result").innerHTML = output;
});

document.getElementById("btnCloseBanner").addEventListener("click", e=>{
    document.getElementById("cookieBanner").style.display = "none";
});
