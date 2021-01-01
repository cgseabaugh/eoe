
var player;
var mapType;
// var itemDb = [empty, dagger, club, hatchet, whip, knuckle_duster, long_sword, scimitar, estoc, battle_axe, flanged_mace, claymore, lance, halberd, zweihander, maul, short_bow, long_bow, crossbow, arbalest, brimming_wand, jeweled_cane, magus_staff, antiquated_tome, sealed_grimoire, primordial_compendium, esoteric_doll, ivory_effigy, shrunken_head, porcelain_chalice, ritual_chime, eccentric_talisman];

function text(message){
    rollText();
    $("#active-text-para").append(`<p class="text">${message}</p>`);
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rollText(){
    var oldText = document.getElementById("active-text-para").textContent;
    $("#active-text-para").empty();
    $("#old-text").append(`<p class="old-game-text">${oldText}</p>`);
    console.log("LLLLL");
}

function whatIsCourage(){
    var message = "Courage determines the outcome of certain Challenges. It's equal to your Vigor + your Might.";
    text(message);
}
function whatIsGuile(){
    var message = "Guile determines the outcome of certain Challenges. It's equal to your Precision + your Focus.";
    text(message);
}
function whatIsInstinct(){
    var message = "Instinct determines the outcome of certain Challenges. It's equal to your Reflex + your Resilience.";
    text(message);
}
function whatIsLuck(){
    var message = "Luck determines the outcome of certain Challenges. It's equal to your Fortune + your Charm.";
    text(message);
}
function whatIsVigor(){
    var message = "Vigor grants an increase to your health.";
    text(message);
}
function whatIsMight(){
    var message = "Might grants extra attack with melee weapons.";
    text(message);
}
function whatIsPrecision(){
    var message = "Precision grants bonuses to your accuracy with weapons.";
    text(message);
}
function whatIsFocus(){
    var message = "Focus grants an increase to your energy.";
    text(message);
}
function whatIsReflex(){
    var message = "Reflex grants bonuses to your blocking capabilities.";
    text(message);
}
function whatIsResilience(){
    var message = "Resilience improves your chances of resisting conditions.";
    text(message);
}
function whatIsFortune(){
    var message = "Fortune grants bonuses to your item discovery.";
    text(message);
}
function whatIsCharm(){
    var message = "Charm grants access to special features belonging to in-game characters.";
    text(message);
}


function loadPlayerData(){
    $("#data-top").append(`
        <div id="player-data">
            <p id="player-data-name">${player.name}</p>
            <div id="portrait-stats">
                <div id="player-portrait">${player.portrait}</div>
                <div id="health-energy-cash">
                    <p id="player-health">${player.health}/${player.xhealth}</p>
                    <p id="player-energy">
                    ${player.energy}/${player.xenergy}</p>
                    <p id="player-cash">${player.cash}</p>
                </div>
            </div>
        </div>
    `)
}
function loadDataBtns(){
    $("#data-middle").empty();
    $("#data-middle").append(`
        <button class="data-btn" id="interests-btn" onclick="loadInterests()"><img class="data-img" id="interests-img" src="/images/buttons/action-button.png"></button>
        <button class="data-btn" id="stats-btn" onclick="loadStats()"><img class="data-img" id="stats-img" src="/images/buttons/hero-button.png"></button>
        <button class="data-btn" id="inventory-btn" onclick="loadInventory()"><img class="data-img" id="inventory-img" src="/images/buttons/inventory-button.png"></button>
    `)
}
function loadInterests(){
    $("#data-bottom").empty();
    $("#data-bottom").append(`
        <div class="misc-window-graphic" id="interests-window"></div>
    `);
}
function loadStats(){
    $("#data-bottom").empty();
    $("#data-bottom").append(`
        <div class="misc-window-graphic" id="stats-window">
            <div id="parent-stat-titles">
                <div class="stat-buttons" id="courage-btn"></div>
                <div class="stat-buttons" id="guile-btn"></div>
                <div class="stat-buttons" id="instinct-btn"></div>
                <div class="stat-buttons" id="luck-btn"></div>
            </div>
            <div id="parent-stats">
                <p class="stats-int" id="courage-stat">${player.courage}</p>
                <p class="stats-int" id="guile-stat">${player.guile}</p>
                <p class="stats-int" id="instinct-stat">${player.instinct}</p>
                <p class="stats-int" id="luck-stat">${player.luck}</p>
            </div>
            <div id="stat-titles">
                <div class="stat-buttons" id="vigor-btn"></div>
                <div class="stat-buttons" id="might-btn"></div>
                <div class="stat-buttons" id="precision-btn"></div>
                <div class="stat-buttons" id="focus-btn"></div>
                <div class="stat-buttons" id="reflex-btn"></div>
                <div class="stat-buttons" id="resilience-btn"></div>
                <div class="stat-buttons" id="fortune-btn"></div>
                <div class="stat-buttons" id="charm-btn"></div>
            </div>
            <div id="child-stats">
                
                <div class="child-stats-int" id="vigor-might">
                    <p class="child-stat-int" id="vigor-stat">${player.vigor}</p>
                    <p class="child-stat-int" id="might-stat">${player.might}</p>
                </div>
                <div class="child-stats-int" id="precision-focus">
                    <p class="child-stat-int" id="precision-stat">${player.precision}</p>
                    <p class="child-stat-int" id="focus-stat">${player.focus}</p>
                </div>
                <div class="child-stats-int" id="reflex-resilience">
                    <p class="child-stat-int" id="reflex-stat">${player.reflex}</p>
                    <p class="child-stat-int" id="resilience-stat">${player.resilience}</p>
                </div>
                <div class="child-stats-int" id="fortune-charm">
                    <p class="child-stat-int" id="fortune-stat">${player.fortune}</p>
                    <p class="child-stat-int" id="charm-stat">${player.charm}</p>
                </div>
            </div>
        </div>
    `);
    document.getElementById("courage-btn").addEventListener("click", whatIsCourage);
    document.getElementById("guile-btn").addEventListener("click", whatIsGuile);
    document.getElementById("instinct-btn").addEventListener("click", whatIsInstinct);
    document.getElementById("luck-btn").addEventListener("click", whatIsLuck);
    document.getElementById("vigor-btn").addEventListener("click", whatIsVigor);
    document.getElementById("might-btn").addEventListener("click", whatIsMight);
    document.getElementById("precision-btn").addEventListener("click", whatIsPrecision);
    document.getElementById("focus-btn").addEventListener("click", whatIsFocus);
    document.getElementById("reflex-btn").addEventListener("click", whatIsReflex);
    document.getElementById("resilience-btn").addEventListener("click", whatIsResilience);
    document.getElementById("fortune-btn").addEventListener("click", whatIsFortune);
    document.getElementById("charm-btn").addEventListener("click", whatIsCharm);
}
function loadInventory(){
    $("#data-bottom").empty();
    $("#data-bottom").append(`
            <div class="w3-row-padding l3" id="inventory-window"></div>
        `);
    for(var i=0;i<=player.inventory.length;i++){
        $("#inventory-window").append(`
            <div class="item-spacing">
                <p class="item-slot">${player.inventory[i].img}</p>
            </div>
            `);
    }
    // $("#data-bottom").append(`
    //     <div class="misc-window-graphic" id="inventory-window">
    //         <div class="inv-row1">
    //             <div class="inv-row1-cell1">${item1.img}</div>
    //             <div class="inv-row1-cell2">${item2.img}</div>
    //             <div class="inv-row1-cell3">${item3.img}</div>
    //         </div>
    //         <div class="inv-row2">
    //             <div class="inv-row1-cell1">${item4.img}</div>
    //             <div class="inv-row1-cell2">${item5.img}</div>
    //             <div class="inv-row1-cell3">${item6.img}</div>
    //         </div>
    //         <div class="inv-row3">
    //             <div class="inv-row1-cell1">${item7.img}</div>
    //             <div class="inv-row1-cell2">${item8.img}</div>
    //             <div class="inv-row1-cell3">${item9.img}</div>
    //         </div>
    //         <div class="inv-row4">
    //             <div class="inv-row1-cell1">${item10.img}</div>
    //             <div class="inv-row1-cell2">${item11.img}</div>
    //             <div class="inv-row1-cell3">${item12.img}</div>
    //         </div>
    //     </div>
    // `);
}
function loadMap(){
    map = player.location;
    if(map === 1){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/1.png">`);
        questOneA(player);
    }else if(map === 2){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/2.png">`);
    }else if(map === 3){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/3.png">`);
    }else if(map === 4){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/4.png">`);
    }else if(map === 5){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/5.png">`);
    }else if(map === 6){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/6.png">`);
    }else if(map === 7){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/7.png">`);
    }else if(map === 8){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/8.png">`);
    }else if(map === 9){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/9.png">`);
    }else if(map === 10){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/10.png">`);
    }else if(map === 11){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/11.png">`);
    }else if(map === 12){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/12.png">`);
    }else if(map === 13){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/13.png">`);
    }else if(map === 14){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/14.png">`);
    }else if(map === 15){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/15.png">`);
    }else if(map === 16){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/16.png">`);
    }else if(map === 17){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/17.png">`);
    }else if(map === 18){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/18.png">`);
    }else if(map === 19){
        $("#tower-map").append(`<img class="map-img" src="/images/tower-map/19.png">`);
    }
}
function loadTestInv(){
    player.inventory.push(dagger, long_sword, halberd, short_bow, jeweled_cane, maul, claymore, scimitar, lance, whip);
}
function loadGameScreen(){
    $("#game-screen").empty();
    $("#game-screen").append(`
        <div id="screen-split">
            <div id="tower-map"></div>
            <div id="main-screen"></div>
        </div>
    `)
   loadMap()
}

function turnReset(){
    loadPlayerData();
    loadDataBtns();
    loadStats();
    loadGameScreen();
    loadTestInv();
    
    
}

function gameLoop(user){
    player = user;
    var battlestate = false;
    turnReset();
    
}