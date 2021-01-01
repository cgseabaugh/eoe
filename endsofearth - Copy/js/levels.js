


class Level {
    constructor(level, name, background, description, enemyList, itemList, challenges, curios, depth, blocked){
        this.level = level;
        this.name = name;
        this.background = background;
        this.description = description;
        this.enemyList = enemyList;
        this.itemList = itemList;
        this.challenges = challenges;
        this.curios = curios;
        this.depth = depth;
        this.blocked = blocked;
    }
}

var levelOne = new Level(1, "Petrified Woods", `<img src="/images/backgrounds/petrified-woods.png" class="scene-background" id="petrified-woods-background">`, "These woods haven't changed in countless centuries. The trees have petrified and all ground vegetation has long since yielded to the ceaseless dustfall. Stray corpses, if not eaten quickly, mummify where they fall. It is impossible to know if the things found in the sands here were dropped centuries ago or days, such is the strange stagnation of all things here.", [madhollow, demondog], [small_dose_of_ichor, black_tea, bandage, arrow, torch, rope, brightbud, dagger, club, hatchet, short_bow], [], [], 10, false);

function rollChallenge(player){}
function rollCurio(player){}
function rollSubdungeon(player){}
function rollItem(player){}
function rollNpc(player){}

function encounterRoll(){
    var roll = randomNumber(1, 10);
    if(roll <= 5){
        var result = 1;
    }else if(roll == 6){
        var result = 2;
    }else if(roll == 7){
        var result = 3;
    }else if(roll == 8){
        var result = 4;
    }else if(roll == 9){
        var result = 5;
    }else if(roll == 10){
        var result = 6;
    }
    return result;
}
function summonEnemy(player, enemy){
    $("#scene-col1").append(`<p>${enemy.image}</p>`);
}
function encounterRollTranslator(player, encounter){
    if(encounter == 1){
        var enemy = rollEnemy(player.location);
        console.log("encounterRollTranslator" + enemy.name);
        summonEnemy(player, enemy);
    }else if(encounter == 2){
        rollChallenge(player);
    }else if(encounter == 3){
        rollCurio(player);
    }else if(encounter == 4){
        rollSubdungeon(player);
    }else if(encounter == 5){
        rollItem(player);
    }else if(encounter == 6){
        rollNpc(player);
    }
}

function loadEncounter(player){
    // var size = randomNumber(1, 3);
    console.log("loadEncounter" + player.name);
    var size = 1;
    if(size === 1){
        $("#main-screen").append(`
            <div id="scene-col1"><div>
        `)
        // var encounter = encounterRoll();
        var encounter = 1;
        var encounter2 = encounterRollTranslator(player, encounter);
        
    }else if(size === 2){
        $("#main-screen").append(`
            <div id="scene-col2"><div>
        `)
    }else if(size === 3){
        $("#main-screen").append(`
            <div id="scene-col3"><div>
        `)
    }
}