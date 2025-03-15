document.getElementById("q1FirstBtn").addEventListener("click", e=>{
    document.getElementById("secretH3").innerHTML = "Congratulations you are a Gryffindor";
    document.getElementById("secretH3").style.display = "block";
    document.getElementById("q1").style.display = "none";
});

document.getElementById("q1SecondBtn").addEventListener("click", e=>{
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
});

document.getElementById("q2FirstBtn").addEventListener("click", e=>{
    document.getElementById("secretH3").innerHTML = "Congratulations you are a Slytherin";
    document.getElementById("secretH3").style.display = "block";
    document.getElementById("q2").style.display = "none";   
});

document.getElementById("q2SecondBtn").addEventListener("click", e=>{
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";   
});

document.getElementById("q3FirstBtn").addEventListener("click", e=>{
    document.getElementById("secretH3").innerHTML = "Congratulations you are a Ravenclaw";
    document.getElementById("secretH3").style.display = "block";
    document.getElementById("q3").style.display = "none";
});

document.getElementById("q3SecondBtn").addEventListener("click", e=>{
    document.getElementById("secretH3").innerHTML = "Congratulations you are a Hufflepuff";
    document.getElementById("secretH3").style.display = "block";
    document.getElementById("q3").style.display = "none";
    
});