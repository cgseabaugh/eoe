
class Item{
    constructor(name, type1, type2, power, accMod, block, refMod, durability, ammo, value, desc, img, identity){
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.power = power;
        this.accMod = accMod;
        this.block = block;
        this.refMod = refMod;
        this.durability = durability;
        this.ammo = ammo;
        this.value = value;
        this.desc = desc;
        this.img = img;
        this.identity = identity;
    }
}

// type1: consumable, weapon
// type2: recovery, ammunition, utility, melee, range, magic
// itemId: 000 +1...
// 0 - 0 000
// type1 (1/2) type2 (1/2/3) itemId (001)

var itemdb = [small_dose_of_ichor, moderate_dose_of_ichor, substantial_dose_of_ichor, black_tea, white_tea, bandage, violet_blossom, holy_water, arrow, bolt, bullet, powder, repair_kit, torch, rope, brightbud, portrait_coin, empty, dagger, club, hatchet, whip, knuckle_duster, long_sword, scimitar, estoc, battle_axe, flanged_mace, claymore, lance, halberd, zweihander, maul, short_bow, long_bow, crossbow, arbalest, brimming_wand, jeweled_cane, magus_staff, antiquated_tome, sealed_grimoire, primordial_compendium, esoteric_doll, ivory_effigy, shrunken_head, porcelain_chalice, ritual_chime, eccentric_talisman];

var small_dose_of_ichor = new Item("Small Dose of Ichor", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/small_dose_of_ichor.png", 11001);
var moderate_dose_of_ichor = new Item("Moderate Dose of Ichor", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/moderate_dose_of_ichor.png", 11002);
var substantial_dose_of_ichor = new Item("Substantial Dose of Ichor", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/substantial_dose_of_ichor.png", 11003);
var black_tea = new Item("Black Tea", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/black_tea.png", 11004);
var white_tea = new Item("White Tea", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/white_tea.png", 11005);
var bandage = new Item("Bandage", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/bandage.png", 11006);
var violet_blossom = new Item("Violet Blossom", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/violet_blossom.png", 11007);
var holy_water = new Item("Holy Water", "Consumable", "Recovery", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/holy_water.png", 11008);
var arrow = new Item("Arrow", "Consumable", "Ammunition", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/arrow.png", 12001);
var bolt = new Item("Bolt", "Consumable", "Ammunition", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/bolt.png", 12002);
var bullet = new Item("Bullet", "Consumable", "Ammunition", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/bullet.png", 12003);
var powder = new Item("Powder", "Consumable", "Ammunition", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/powder.png", 12004);
var repair_kit = new Item("Repair Kit", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/repair_kit.png", 13001);
var torch = new Item("Torch", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/torch.png", 13002);
var rope = new Item("Rope", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/rope.png", 13003);
var brightbud = new Item("Brightbud", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/brightbud.png", 13004);
var portrait_coin = new Item("Portrait Coin", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "img class='item-img' src='/images/items/portrait_coin.png", 13005);
var skeleton_key = new Item("Skelton Key", "Consumable", "Utility", 0, 0, 0, 0, 0, [], 0, "", "", 13006)

var empty = new Item("", "", "", 0, 0, 0, 0, 0, [], 0, "", "", 21000);
var dagger = new Item("Dagger", "Weapon", "Melee", 1, 1, 1, 0, 20, [], 300, "", "<img class='item-img' src='/images/items/dagger.png' alt=''>", 21001);
var club = new Item("Club", "Weapon", "Melee", 3, 0, 1, 0, 10, [], 200, "", "<img class='item-img' src='/images/items/club.png' alt=''>", 21002);
var hatchet = new Item("Hatchet", "Weapon", "Melee", 2, 0, 1, 0, 20, [], 350, "", "<img class='item-img' src='/images/items/hatchet.png' alt=''>", 21003);
var whip = new Item("Whip", "Weapon", "", 3, 0, 0, 0, 20, [], 500, "", "<img class='item-img' src='/images/items/whip.png' alt=''>", 21004);
var knuckle_duster = new Item("Knuckle Duster", "Weapon", "Melee", 2, 1, 0, 0, 20, [], 350, "", "<img class='item-img' src='/images/items/knuckle_duster' alt=''>", 21005);
var long_sword = new Item("Long Sword", "Weapon", "Melee", 3, 0, 3, 0, 20, [], 600, "", "<img class='item-img' src='/images/items/long_sword.png' alt=''>", 21006);
var scimitar = new Item("Scimitar", "Weapon", "Melee", 4, 0, 2, 0, 20, [], 750, "", "<img class='item-img' src='/images/items/scimitar.png' alt=''>", 21007);
var estoc = new Item("Estoc", "Weapon", "Melee", 2, 0, 4, 0, 20, [], 750, "", "<img class='item-img' src='/images/items/estoc.png' alt=''>", 21008);
var battle_axe = new Item("Battle Axe", "Weapon", "Melee", 5, 0, 1, 0, 20, [], 800, "", "<img class='item-img' src='/images/items/battle_axe.png' alt=''>", 21009);
var flanged_mace = new Item("Flanged Mace", "Weapon", "Melee", 4, 0, 2, 0, 20, [], 800, "", "<img class='item-img' src='/images/items/flanged_mace.png' alt=''>", 21010);
var claymore = new Item("Claymore", "Weapon", "Melee", 5, -1, 3, 0, 30, [], 1000, "", "<img class='item-img' src='/images/items/claymore.png' alt=''>", 21011);
var lance = new Item("Lance", "Weapon", "Melee", 6, -1, 2, 0, 30, [], 1200, "", "<img class='item-img' src='/images/items/lance.png' alt=''>", 21012);
var halberd = new Item("Halberd", "Weapon", "Melee", 7, -1, 1, 0, 30, [], 1200, "", "<img class='item-img' src='/images/items/halberd.png' alt=''>", 21013);
var zweihander = new Item("Zweihander", "Weapon", "Melee", 7, -2, 3, 0, 30, [], 1500, "", "<img class='item-img' src='/images/items/zweihander.png' alt=''>", 21014);
var maul = new Item("Maul", "Weapon", "Melee", 8, -2, 2, 0, 30, [], 1350, "", "<img class='item-img' src='/images/items/maul.png' alt=''>", 21015);
var short_bow = new Item("Short Bow", "Weapon", "Range", 2, 0, 0, 0, 0, ["Arrow"], 600, "", "<img class='item-img' src='/images/items/short_bow.png' alt=''>", 22001);
var long_bow = new Item("Long Bow", "Weapon", "Range", 4, 0, 0, 0, 0, ["Arrow"], 1200, "", "<img class='item-img' src='/images/items/long_bow.png' alt=''>", 22002);
var crossbow = new Item("Crossbow", "Weapon", "Range", 3, 0, 0, 0, 0, ["Bolt"], 800, "", "<img class='item-img' src='/images/items/crossbow.png' alt=''>", 22003);
var arbalest = new Item("Arbalest", "Weapon", "Range", 5, 0, 0, 0, 0, ["Bolt"], 1500, "", "<img class='item-img' src='/images/items/arbalest.png' alt=''>", 22004);
var powder_pistol = new Item("Powder Pistol", "Weapon", "Range", 5, -1, 0, 0, 0, ["Bullet", "Powder"], 2500, "", "<img class='item-img' src='/images/items/' alt=''>", 22005);
var arquebus = new Item("Arquebus", "Weapon", "Range", 7, -2, 0, 0, 0, ["Bullet", "Powder"], 5000, "", "<img class='item-img' src='/images/items/' alt=''>", 22006);
var brimming_wand = new Item("Brimming Wand", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/brimming_wand.png' alt=''>", 23001);
var jeweled_cane = new Item("Jeweled Cane", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/jeweled_cane.png' alt=''>", 23002);
var magus_staff = new Item("Magus Staff", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/magus_staff.png' alt=''>", 23003);
var antiquated_tome = new Item("Antiquated Tome", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/antiquated_tome.png' alt=''>", 23004);
var sealed_grimoire = new Item("Sealed Grimoire", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/sealed_grimoire.png' alt=''>", 23005);
var primordial_compendium = new Item("Primordial Compendium", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/primordial_compendium.png' alt=''>", 23006);
var esoteric_doll = new Item("Esoteric Doll", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/esoteric_doll.png' alt=''>", 23007);
var ivory_effigy = new Item("Ivory Effigy", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/ivory_effigy.png' alt=''>", 23008);
var shrunken_head = new Item("Shrunken Head", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/shrunken_head.png' alt=''>", 23009);
var porcelain_chalice = new Item("Porcelain Chalice", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/porcelain_chalice.png' alt=''>", 23010);
var ritual_chime = new Item("Ritual Chime", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/ritual_chime.png' alt=''>", 23011);
var eccentric_talisman = new Item("Eccentric Talisman", "Weapon", "Magic", 0, 0, 0, 0, 5, [], 0, "", "<img class='item-img' src='/images/items/eccentric_talisman.png' alt=''>", 23012);

