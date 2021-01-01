

class Pc {
    constructor(name, portrait, level, health, xhealth, energy, xenergy, courage, guile, instinct, luck, vigor, might, precision, focus, reflex, resilience, fortune, charm, inventory, cash, location, battlestate){
        this.name = name;
        this.portrait = portrait;
        this.level = level;
        this.health = health;
        this.xhealth = xhealth;
        this.energy = energy;
        this.xenergy = xenergy;
        this.courage = courage;
        this.guile = guile;
        this.instinct = instinct;
        this.luck = luck;
        this.vigor = vigor;
        this.might = might;
        this.precision = precision;
        this.focus = focus;
        this.reflex = reflex;
        this.resilience = resilience;
        this.fortune = fortune;
        this.charm = charm;
        this.inventory = inventory;
        this.cash = cash;
        this.location = location;
        this.battlestate = battlestate;
    }
}
 
function submitPlayer(por){
    var name = document.getElementById("name-input").value;
    var pcProf = document.getElementById("profession-input").value;
    var pcGift = document.getElementById("gift-input").value;
    if(pcProf === "knight"){
        var courage = 5;
        var vigor = 3;
        var might = 2;
        var guile = 2;
        var precision = 2;
        var focus = 0;
        var instinct = 3;
        var reflex = 1;
        var resilience = 2;
        var luck = 2;
        var fortune = 1;
        var charm = 1;
    }else if(pcProf === "hunter"){
        var courage = 4;
        var guile = 3;
        var instinct = 4;
        var luck = 1;
        var vigor = 1;
        var might = 1;
        var precision = 3;
        var focus = 1;
        var reflex = 3;
        var resilience = 1;
        var fortune = 0;
        var charm = 2;
    }else if(pcProf === "adventurer"){
        var courage = 3;
        var guile = 3;
        var instinct = 3;
        var luck = 3;
        var vigor = 1;
        var might = 2;
        var precision = 1;
        var focus = 2;
        var reflex = 2;
        var resilience = 1;
        var fortune = 2;
        var charm = 1;
    }else if(pcProf === "pilgrim"){
        var courage = 3;
        var guile = 4;
        var instinct = 1;
        var luck = 4;
        var vigor = 2;
        var might = 2;
        var precision = 0;
        var focus = 2;
        var reflex = 0;
        var resilience = 2;
        var fortune = 1;
        var charm = 3;
    }else if(pcProf === "scholar"){
        var courage = 2;
        var guile = 5;
        var instinct = 2;
        var luck = 3;
        var vigor = 0;
        var might = 1;
        var precision = 1;
        var focus = 4;
        var reflex = 0;
        var resilience = 3;
        var fortune = 0;
        var charm = 3;
    }else{
        console.log("WOOPSIE");
    }
    if(por == 1){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man1.png">`;
    }else if(por == 2){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man2.png">`;
    }else if(por == 3){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man3.png">`;
    }else if(por == 4){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man4.png">`;
    }else if(por == 5){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man5.png">`;
    }else if(por == 6){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man6.png">`;
    }else if(por == 7){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man7.png">`;
    }else if(por == 8){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/man8.png">`;
    }else if(por == 9){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman1.png">`;
    }else if(por == 10){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman2.png">`;
    }else if(por == 11){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman3.png">`;
    }else if(por == 12){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman4.png">`;
    }else if(por == 13){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman5.png">`;
    }else if(por == 14){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman6.png">`;
    }else if(por == 15){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman7.png">`;
    }else if(por == 16){
        var pcPortrait = `<img id="player-portrait" src="/images/portraits/woman8.png">`;
    }
    var player = new Pc(name,pcPortrait, 1, 20, 20, 10, 10, courage, guile, instinct, luck, vigor, might, precision, focus, reflex, resilience, fortune, charm, [], 1000, 1, false);
    console.log(player);
    gameLoop(player);
}
function clearSelected(){
    $("#port1img").removeClass('selected-img');
    $("#port1img").addClass('portrait-img');
    $("#port2img").removeClass('selected-img');
    $("#port2img").addClass('portrait-img');
    $("#port3img").removeClass('selected-img');
    $("#port3img").addClass('portrait-img');
    $("#port4img").removeClass('selected-img');
    $("#port4img").addClass('portrait-img');
    $("#port5img").removeClass('selected-img');
    $("#port5img").addClass('portrait-img');
    $("#port6img").removeClass('selected-img');
    $("#port6img").addClass('portrait-img');
    $("#port7img").removeClass('selected-img');
    $("#port7img").addClass('portrait-img');
    $("#port8img").removeClass('selected-img');
    $("#port8img").addClass('portrait-img');
    $("#port9img").removeClass('selected-img');
    $("#port9img").addClass('portrait-img');
    $("#port10img").removeClass('selected-img');
    $("#port10img").addClass('portrait-img');
    $("#port11img").removeClass('selected-img');
    $("#port11img").addClass('portrait-img');
    $("#port12img").removeClass('selected-img');
    $("#port12img").addClass('portrait-img');
    $("#port13img").removeClass('selected-img');
    $("#port13img").addClass('portrait-img');
    $("#port14img").removeClass('selected-img');
    $("#port14img").addClass('portrait-img');
    $("#port15img").removeClass('selected-img');
    $("#port15img").addClass('portrait-img');
    $("#port16img").removeClass('selected-img');
    $("#port16img").addClass('portrait-img');
}

function portraitSelect(port){
    clearSelected()
    if(port == 1){
        $("#port1img").removeClass('portrait-img');
        $("#port1img").addClass('selected-img');
    }else if(port == 2){
        $("#port2img").removeClass('portrait-img');
        $("#port2img").addClass('selected-img');
    }else if(port == 3){
        $("#port3img").removeClass('portrait-img');
        $("#port3img").addClass('selected-img');
    }else if(port == 4){
        $("#port4img").removeClass('portrait-img');
        $("#port4img").addClass('selected-img');
    }else if(port == 5){
        $("#port5img").removeClass('portrait-img');
        $("#port5img").addClass('selected-img');
    }else if(port == 6){
        $("#port6img").removeClass('portrait-img');
        $("#port6img").addClass('selected-img');
    }else if(port == 7){
        $("#port7img").removeClass('portrait-img');
        $("#port7img").addClass('selected-img');
    }else if(port == 8){
        $("#port8img").removeClass('portrait-img');
        $("#port8img").addClass('selected-img');
    }else if(port == 9){
        $("#port9img").removeClass('portrait-img');
        $("#port9img").addClass('selected-img');
    }else if(port == 10){
        $("#port10img").removeClass('portrait-img');
        $("#port10img").addClass('selected-img');
    }else if(port == 11){
        $("#port11img").removeClass('portrait-img');
        $("#port11img").addClass('selected-img');
    }else if(port == 12){
        $("#port12img").removeClass('portrait-img');
        $("#port12img").addClass('selected-img');
    }else if(port == 13){
        $("#port13img").removeClass('portrait-img');
        $("#port13img").addClass('selected-img');
    }else if(port == 14){
        $("#port14img").removeClass('portrait-img');
        $("#port14img").addClass('selected-img');
    }else if(port == 15){
        $("#port15img").removeClass('portrait-img');
        $("#port15img").addClass('selected-img');
    }else if(port == 16){
        $("#port16img").removeClass('portrait-img');
        $("#port16img").addClass('selected-img');
    }
    $("#start-btn-slot").empty();
    $("#start-btn-slot").append(`<input type="button" id="start-btn" class="start-btn-on" onclick="submitPlayer(${port})" value="Start Game">`);
    
};

function newGame(){
    $("#game-screen").append(`
        <div id="creation-div">
            <form id="creation-form">
                <label for="name">Name</label>
                <input name="name" class="input-item" id="name-input" type="text">
                <label for="profession">Profession</label>
                <select name="profession" id="profession-input">
                    <option value="knight">Knight</option>
                    <option value="hunter">Hunter</option>
                    <option value="adventurer">Adventurer</option>
                    <option value="pilgrim">Pilgrim</option>
                    <option value="scholar">Scholar</option>
                </select>
                <label for="gift">Gift</label>
                <select name="gift" id="gift-input">
                    <option value="dusty-tome">Dusty Tome</option>
                    <option value="switchblade">Switchblade</option>
                    <option value="silver-locket">Silver Locket</option>
                    <option value="corpsman-ring">Corpsman Ring</option>
                    <option value="firebombs">Firebombs</option>
                </select>
                <h2 id="portrait-title">Choose a portrait:</h2>
                <table id="portrait-table">
                    <tr id="portrait-row1">
                        <td class="port" id="port1"><a href="#" id="port-one" onclick="portraitSelect(1)"><img class="portrait-img" id="port1img" src="/images/portraits/man1.png"></a></td>
                        <td class="port" id="port2"><a href="#" id="port-two" onclick="portraitSelect(2)"><img class="portrait-img" id="port2img" src="/images/portraits/man2.png"></a></td>
                        <td class="port" id="port3"><a href="#" id="port-three" onclick="portraitSelect(3)"><img class="portrait-img" id="port3img" src="/images/portraits/man3.png"></a></td>
                        <td class="port" id="port4"><a href="#" id="port-four" onclick="portraitSelect(4)"><img class="portrait-img" id="port4img" src="/images/portraits/man4.png"></a></td>
                        <td class="port" id="port5"><a href="#" id="port-five" onclick="portraitSelect(5)"><img class="portrait-img" id="port5img" src="/images/portraits/man5.png"></a></td>
                        <td class="port" id="port6"><a href="#" id="port-six" onclick="portraitSelect(6)"><img class="portrait-img" id="port6img" src="/images/portraits/man6.png"></a></td>
                        <td class="port" id="port7"><a href="#" id="port-seven" onclick="portraitSelect(7)"><img class="portrait-img" id="port7img" src="/images/portraits/man7.png"></a></td>
                        <td class="port" id="port8"><a href="#" id="port-eight" onclick="portraitSelect(8)"><img class="portrait-img" id="port8img" src="/images/portraits/man8.png"></a></td>
                    </tr>
                    <tr id="portrait-row2">
                        <td class="port" id="port9"><a href="#" id="port-nine" onclick="portraitSelect(9)"><img class="portrait-img" id="port9img" src="/images/portraits/woman1.png"></a></td>
                        <td class="port" id="port10"><a href="#" id="port-ten" onclick="portraitSelect(10)"><img class="portrait-img" id="port10img" src="/images/portraits/woman2.png"></a></td>
                        <td class="port" id="port11"><a href="#" id="port-eleven" onclick="portraitSelect(11)"><img class="portrait-img" id="port11img" src="/images/portraits/woman3.png"></a></td>
                        <td class="port" id="port12"><a href="#" id="port-twelve" onclick="portraitSelect(12)"><img class="portrait-img" id="port12img" src="/images/portraits/woman4.png"></a></td>
                        <td class="port" id="port13"><a href="#" id="port-thirteen" onclick="portraitSelect(13)"><img class="portrait-img" id="port13img" src="/images/portraits/woman5.png"></a></td>
                        <td class="port" id="port14"><a href="#" id="port-fourteen" onclick="portraitSelect(14)"><img class="portrait-img" id="port14img" src="/images/portraits/woman6.png"></a></td>
                        <td class="port" id="port15"><a href="#" id="port-fifteen" onclick="portraitSelect(15)"><img class="portrait-img" id="port15img" src="/images/portraits/woman7.png"></a></td>
                        <td class="port" id="port16"><a href="#" id="port-sixteen" onclick="portraitSelect(16)"><img class="portrait-img" id="port16img" src="/images/portraits/woman8.png"></a></td>
                    </tr>
                </table>
            </form>
            <div id="start-btn-slot"></div>
        </div>
    `);
    var message = "Create your character to begin.";
    text(message);
    $("#start-btn-slot").append(`<input type="button" id="start-btn" class="start-btn-off" value="Start Game">`);
}

{/* <input type="button" id="create-btn" onclick="submitPlayer()" value="Begin"></input> */}

function loadGame(){
    newGame();
}
$(document).ready(function(){
    loadGame();
})
// $("#create-btn").on("click",function(){submitPlayer()})