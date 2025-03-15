console.log('Hello');

document.getElementById("btnNope").addEventListener("click", e=>{
    document.getElementById("banner").style.display = "none";
});

document.getElementById("btnYes").addEventListener("click", e=>{

    document.getElementById('h3Element').innerText = "First Lesson - Don't admit that";
    document.getElementById('pElement').innerText = "But you did! So as a reward, your third year will now feature 30% extra dementor!";
    document.getElementById('btnYes').style.display="none";
    document.getElementById('btnNope').innerText = "YAY!";

});