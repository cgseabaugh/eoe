class Foe {
    constructor(name, shorthand, level, health, xhealth, energy, xenergy, might, precision, reflex, resilience, attacks, drops, image, description, intro){
        this.name = name;
        this.shorthand = shorthand;
        this.level = level;
        this.health = health;
        this.xhealth = xhealth;
        this.energy = energy;
        this.xenergy = xenergy;
        this.might = might;
        this.precision = precision;
        this.reflex = reflex;
        this.resilience = resilience;
        this.attacks = attacks;
        this.drops = drops;
        this.image = image;
        this.description = description;
        this.intro = intro;
    }
}



var madhollow = new Foe("Mad Hollow", "madhollow", 1, 6, 6, 1, 1, 2, 1, 1, 2, [], [], `<img class="enemy-image" id="madhollow" src="/images/enemies/madhollow.png" alt="madhollow-img" onclick="enemySelected(this.id, player)">`, "A poor soul lost long ago to the Deep Curse, still clutches the weapons of its days still human. It hunts, from now until it has atrophied into dust, for the deep dark blood that flows in everything.", "A Mad Hollow cackles when it sees you. Its rattling, mummified body leaps towards you, flailing its rusted weapon menacingly.");
var demondog = new Foe("Demon Dog", "demondog", 1, 4, 4, 1, 1, 2, 3, 3, 1, [], [], `<img class="enemy-image" id="demondog" src="/images/enemies/demondog.png" alt="demondog-img" onclick="enemySelected(this.id, player)">`, "A cruel and hungry thing, its origins are a mystery. Its many violent protrusions are actually the devoured blades of its prey absorbed by the skeleton and pushed through the skin like a coat of daggers.", "A Demon Dog, frothing from the mouth, snarls at you. A clattering whirl of fangs and knives, it lunges for your throat!")

var gnashingimp =  new Foe("Gnashing Imp", "gnashingimp", 2, 7, 7, 1, 1, 3, 2, 2, 1, [], [], `<img class="enemy-image" id="gnashingimp" src="/images/enemies/impishbeast.png" alt="gnashingimp-img" onclick="enemySelected(this.id)">`, "More beast than man, it has great strength for its size. If you aren't careful one may drag you by the leg into the dark allies where its brethren await a fresh meal.", "")
var deepacolyte =  new Foe("Deep Acolyte", "deepacolyte", 2, 6, 6, 5, 5, 1, 2, 4, 3, [], [], `<img class="enemy-image" id="deepacolyte" src="/images/enemies/brainsucker.png" alt="deepacolyte-img" onclick="enemySelected(this.id)">`, "This one has sold its humanity to the Deep Seated God in exchange for this detestable form of immortality. Its magical powers are as great as its wretchedness.", "")


