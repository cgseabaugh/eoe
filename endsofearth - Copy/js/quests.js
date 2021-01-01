

function testFunction(){
    console.log("THIS IS JUST A TEST");
}

function questOneA(player){
    var background = document.getElementById("main-screen");
    background.style.backgroundImage = "url(/images/backgrounds/petrified-woods.png)";
    background.style.backgroundSize = "contain";
    var messageOne = "You've come to the Petrified Woods in search of the Tower of Pergamum.";
    text(messageOne);
    document.getElementById("cont-btn").addEventListener("click", function() { questOneB(player); }, false);
}
function questOneB(player){
    var messageTwo = "Despite the mythical height of the tower, you can't see it anywhere.";
    text(messageTwo);
    document.getElementById("cont-btn").removeEventListener("click", function() { questOneB(player); }, false);
    document.getElementById("cont-btn").addEventListener("click", function() { questOneC(player); }, false);
}
function questOneC(player){
    var messageThree = "Explore the woods. Find the Tower. Claim its secrets for your own.";
    text(messageThree);
    document.getElementById("cont-btn").removeEventListener("click", function() { questOneC(player); }, false);
    document.getElementById("cont-btn").addEventListener("click", function() { loadEncounter(player); }, false);
}
function questOneD(player){
    
}

// text(${messageTwo, button2})