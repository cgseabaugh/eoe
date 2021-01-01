
var enemyDb= [madhollow, demondog, gnashingimp, deepacolyte];
var itemDb = [small_dose_of_ichor, moderate_dose_of_ichor, substantial_dose_of_ichor, black_tea, white_tea, bandage, violet_blossom, holy_water, arrow, bolt, bullet, powder, repair_kit, torch, rope, brightbud, portrait_coin, empty, dagger, club, hatchet, whip, knuckle_duster, long_sword, scimitar, estoc, battle_axe, flanged_mace, claymore, lance, halberd, zweihander, maul, short_bow, long_bow, crossbow, arbalest, brimming_wand, jeweled_cane, magus_staff, antiquated_tome, sealed_grimoire, primordial_compendium, esoteric_doll, ivory_effigy, shrunken_head, porcelain_chalice, ritual_chime, eccentric_talisman];

function rollEnemy(loc){
    console.log("rollEnemy" + loc);
    if(loc == 1){
        var enemyList = [madhollow, demondog];
        var enemyId = randomNumber(1, 2) -1;
        var enemy = enemyList[enemyId];
    }else if(loc == 2){
        var enemyList = [madhollow, demondog, gnashingimp, deepacolyte];
        var enemyId = randomNumber(1, 4) -1;
        var enemy = enemyList[enemyId];
    }
    return enemy;
    
}

function enemySelected(id, player){
    var enemySelect = document.getElementById(id);
    enemySelect.className = "selected-enemy";
    var enemyDbLength = enemyDb.length - 1;
    for(var i=0; i<=enemyDbLength; i++){
        if(enemyDb[i].shorthand == enemySelect.id){
            var enemy = enemyDb[i];
        }else{
            console.log("nopelol");
        }
    }
    text(enemy.intro);
    battleStart(player, enemy);
}

function combatUseItem(){
    itemId = document.getElementById("selectItem").value;
    console.log(itemId);
    console.log(itemDb.length);
    for(var y=0; y<=itemDb.length; y++){
        if(itemDb[y].identity === itemId){
            console.log(itemDb[y].name)
        };
    }
}

function loadCombatWindow(player, enemy){

    $("#data-bottom").empty();
    $("#data-bottom").append(`
        <div class="misc-window-graphic" id="combat-window">
            <div class="turn-tracker" id="player-turn"></div>
            <div id="itemList">
                <label id="itemListLabel" for="items">Items:</label>
                <select name="items" id="selectItem"></select>
                <input type="button" id="useItemBtn" value="Use Item" onclick="combatUseItem()">
            </div>
            <div id="abilityList">
                <label id="skillListLabel" for="skillss">Skills:</label>
                <select name="skills" id="selectSkill">
                    <option class="skillListOption" value="skills">SKILL ONE</option>
                    <option class="skillListOption" value="skills">SKILL TWO</option>
                    <option class="skillListOption" value="skills">SKILL THREE</option>
                    <option class="skillListOption" value="skills">SKILL FOUR</option>
                </select>
                <input type="button" id="useSkillBtn" value="Use Skill">
            </div>
            <div id="otherList"></div>
        </div>
    `);
    for(var i = 0;i<=player.inventory.length;i++){
        $("#selectItem").append(`<option class="itemListOption" value=${player.inventory[i].id}>${player.inventory[i].name} [pow:${player.inventory[i].power} /acc:${player.inventory[i].accMod} /dur:${player.inventory[i].durability}]</option>`);
    }
}

function battleStart(player, enemy){
    $("#data-middle").empty();
    $("#data-middle").append(`
        <div id="combat-enemyhp">
            <p id="enemy-name">${enemy.name}</p>
            <p id="enemy-health">${enemy.health}</p>
        </div>
    `);
    loadCombatWindow(player, enemy);
    
}

