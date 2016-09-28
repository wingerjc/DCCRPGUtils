/* The tables and game content below are taken from:
 *   Dungeon Crawl Classics RPG core rulebook
 *   Published by Goodman Games, ISBN 9780982860953.
 *   Game content under the Open Gaming License ver. 1.0 
 */
/*
 * This code is under the MIT License
 *
 * Copyright (c) 2016 Jaymes Winger
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var abilities_table = [
  "Strength", "Agility", "Stamina",
  "Personality", "Intelligence", "Luck"
];

var STR = abilities_table[0];
var AGI = abilities_table[1];
var STA = abilities_table[2];
var PER = abilities_table[3];
var INT = abilities_table[4];
var LCK = abilities_table[5];

var abil_mod_table = [
  0, 0, 0, -3, -2, -2, -1, -1, -1,
  0, 0, 0, 0, 1, 1, 1, 2, 2, 3
];

var birth_augur_table = [
    "Harsh winter: All attack rolls",
  "The bull: Melee attack rolls",
  "Fortunate date: Missile fire attack rolls",
  "Raised by wolves: Unarmed attack rolls",
  "Conceived on horseback: Mounted attack rolls",
  "Born on the battlefield: Damage rolls",
  "Path of the bear: Melee damage rolls",
  "Hawkeye: Missile fire damage rolls",
  "Pack hunter: Attack and damage rolls for 0-level starting weapon",
  "Born under the loom: Skill checks (including thief skills)",
  "Foxs cunning: Find/disable traps",
  "Four-leafed clover: Find secret doors",
  "Seventh son: Spell checks",
  "The raging storm: Spell damage",
  "Righteous heart: Turn unholy checks",
  "Survived the plague: Magical healing*",
  "Lucky sign: Saving throws",
  "Guardian angel: Savings throws to escape traps",
  "Survived a spider bite: Saving throws against poison",
  "Struck by lightning: Reflex saving throws",
  "Lived through famine: Fortitude saving throws",
  "Resisted temptation: Willpower saving throws",
  "Charmed house: Armor Class",
  "Speed of the cobra: Initiative",
  "Bountiful harvest: Hit points (applies at each level)",
  "Warrior's arm: Critical hit tables**",
  "Unholy house: Corruption rolls",
  "The Broken Star: Fumbles**",
  "Birdsong: Number of languages",
  "Wild child: Speed (each +1/-1 = +5'/-5' speed)"
];

var save_name_table = [
  "Fortitude", "Reflex", "Willpower"
];
var FORT = save_name_table[0];
var REF = save_name_table[1];
var WILL = save_name_table[2];

var random_equipment_table = [
  "Backpack (2gp)",
  "Candle (1cp)",
  "Chain, 10' (30gp)",
  "Chalk, 1 piece (1cp)",
  "Chest, empty (2gp)",
  "Crowbar (2gp)",
  "Flask, empty (3cp)",
  "Flint & steel (15cp)",
  "Grappling hook (1gp)",
  "Hammer, small (5sp)",
  "Holy symbol (25gp)",
  "Holy water, 1 vial** (25gp)",
  "Ironspikes, each (1sp)",
  "Lantern (10gp)",
  "Mirror, hand-sized (10gp)",
  "Oil, 1 flask*** (2sp)",
  "Pole, 10-foot (15cp)",
  "Rations, per day (5cp)",
  "Rope, 50' (25cp)",
  "Sack, large (12cp)",
  "Sack, small (8cp)",
  "Thieves' tools (25gp)",
  "Torch, each (1cp)",
  "Waterskin (5sp)"
];

var random_occupation_table = [
  { title: "Alchemist", weapon: "Staff", goods: "Oil, 1 flask"},
  { title: "Animal trainer", weapon: "Club", goods: "Pony"},
  { title: "Armorer", weapon: "Hammer (as club)", goods: "Iron helmet"},
  { title: "Astrologer", weapon: "Dagger", goods: "Spyglass"},
  { title: "Barber", weapon: "Razor (as dagger)", goods: "Scissors"},
  { title: "Beadle", weapon: "Staff", goods: "Holy symbol"},
  { title: "Beekeeper", weapon: "Staff", goods: "Jar of honey"},
  { title: "Blacksmith", weapon: "Hammer (as club)", goods: "Steel tongs"},
  { title: "Butcher", weapon: "Cleaver (as axe)", goods: "Side of beef"},
  { title: "Caravan guard", weapon: "Short sword", goods: "Linen, 1 yard"},
  { title: "Cheesemaker", weapon: "Cudgel (as staff)", goods: "Stinky cheese"},
  { title: "Cobbler", weapon: "Awl (as dagger)", goods: "Shoehorn"},
  { title: "Confidence artist", weapon: "Dagger", goods: "Quality cloak"},
  { title: "Cooper", weapon: "Crowbar (as club)", goods: "Barrel"},
  { title: "Costermonger", weapon: "Knife (as dagger)", goods: "Fruit"},
  { title: "Cutpurse", weapon: "Dagger", goods: "Small chest"},
  { title: "Ditch digger", weapon: "Shovel (as staff)", goods: "Fine dirt, 1 lb."},
  { title: "Dwarven apothecarist", weapon: "Cudgel (as staff)", goods: "Steel vial"},
  { title: "Dwarven blacksmith", weapon: "Hammer (as club)", goods: "Mithril, 1 oz."},
  { title: "Dwarven blacksmith", weapon: "Hammer (as club)", goods: "Mithril, 1 oz."},
  { title: "Dwarven chest-maker", weapon: "Chisel (as dagger)", goods: "Wood, 10 lbs."},
  { title: "Dwarven herder", weapon: "Staff", goods: "Sow**"},
  { title: "Dwarven miner", weapon: "Pick (as club)", goods: "Lantern"},
  { title: "Dwarven miner", weapon: "Pick (as club)", goods: "Lantern"},
  { title: "Dwarven mushroom-farmer", weapon: "Shovel", goods: "Sack"},
  { title: "Dwarven rat-catcher", weapon: "Club", goods: "Net"},
  { title: "Dwarven stonemason", weapon: "Hammer", goods: "Fine stone, 10 lbs."},
  { title: "Dwarven stonemason", weapon: "Hammer", goods: "Fine stone, 10 lbs."},
  { title: "Elven artisan", weapon: "Staff", goods: "Clay, 1 lb."},
  { title: "Elven barrister", weapon: "Quill (as dart)", goods: "Book"},
  { title: "Elven chandler", weapon: "Scissors (as dagger)", goods: "Candles, 20"},
  { title: "Elven falconer", weapon: "Dagger", goods: "Falcon"},
  { title: "Elven forester", weapon: "Staff", goods: "Herbs, 1 lb."},
  { title: "Elven forester", weapon: "Staff", goods: "Herbs, 1 lb."},
  { title: "Elven glassblower", weapon: "Hammer", goods: "Glass beads"},
  { title: "Elven navigator", weapon: "Bow", goods: "Spyglass"},
  { title: "Elven sage", weapon: "Dagger", goods: "Parchment and quill pen"},
  { title: "Elven sage", weapon: "Dagger", goods: "Parchment and quill pen"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Farmer*", weapon: "Pitchfork (as spear)", goods: "Hen**"},
  { title: "Fortune-teller", weapon: "Dagger", goods: "Tarot deck"},
  { title: "Gambler", weapon: "Club", goods: "Dice"},
  { title: "Gongfarmer", weapon: "Trowel (as dagger)", goods: "Sack of night soil"},
  { title: "Grave digger", weapon: "Shovel (as staff)", goods: "Trowel"},
  { title: "Grave digger", weapon: "Shovel (as staff)", goods: "Trowel"},
  { title: "Guild beggar", weapon: "Sling", goods: "Crutches"},
  { title: "Guild beggar", weapon: "Sling", goods: "Crutches"},
  { title: "Halfling chicken butcher", weapon: "Hand axe", goods: "Chicken meat, 5 lbs."},
  { title: "Halfling dyer", weapon: "Staff", goods: "Fabric, 3 yards"},
  { title: "Halfling dyer", weapon: "Staff", goods: "Fabric, 3 yards"},
  { title: "Halfling glovemaker", weapon: "Awl (as dagger)", goods: "Gloves, 4 pairs"},
  { title: "Halfling gypsy", weapon: "Sling", goods: "Hex doll"},
  { title: "Halfling haberdasher", weapon: "Scissors (as dagger)", goods: "Fine suits, 3 sets"},
  { title: "Halfling mariner", weapon: "Knife (as dagger)", goods: "Sailcloth, 2 yards"},
  { title: "Halfling moneylender", weapon: "Short sword", goods: "5 gp, 10 sp, 200 cp"},
  { title: "Halfling trader", weapon: "Short sword", goods: "20 sp"},
  { title: "Halfling vagrant", weapon: "Club", goods: "Begging bowl"},
  { title: "Healer", weapon: "Club", goods: "Holy water, 1 vial"},
  { title: "Herbalist", weapon: "Club", goods: "Herbs, 1 lb."},
  { title: "Herder", weapon: "Staff", goods: "Herding dog**"},
  { title: "Hunter", weapon: "Shortbow", goods: "Deer pelt"},
  { title: "Hunter", weapon: "Shortbow", goods: "Deer pelt"},
  { title: "Indentured servant", weapon: "Staff", goods: "Locket"},
  { title: "Jester", weapon: "Dart", goods: "Silk clothes"},
  { title: "Jeweler", weapon: "Dagger", goods: "Gem worth 20 gp"},
  { title: "Locksmith", weapon: "Dagger", goods: "Fine tools"},
  { title: "Mendicant", weapon: "Club", goods: "Cheese dip"},
  { title: "Mercenary", weapon: "Longsword", goods: "Hide armor"},
  { title: "Merchant", weapon: "Dagger", goods: "4 gp, 14 sp, 27 cp"},
  { title: "Miller/baker", weapon: "Club", goods: "Flour, 1 lb."},
  { title: "Minstrel", weapon: "Dagger", goods: "Ukulele"},
  { title: "Noble", weapon: "Longsword", goods: "Gold ring worth 10 gp"},
  { title: "Orphan", weapon: "Club", goods: "Rag doll"},
  { title: "Ostler", weapon: "Staff", goods: "Bridle"},
  { title: "Outlaw", weapon: "Short sword", goods: "Leather armor"},
  { title: "Rope maker", weapon: "Knife (as dagger)", goods: "Rope, 100"},
  { title: "Scribe", weapon: "Dart", goods: "Parchment, 10 sheets"},
  { title: "Shaman", weapon: "Mace", goods: "Herbs, 1 lb."},
  { title: "Slave", weapon: "Club", goods: "Strange-looking rock"},
  { title: "Smuggler", weapon: "Sling", goods: "Waterproof sack"},
  { title: "Soldier", weapon: "Spear", goods: "Shield"},
  { title: "Squire", weapon: "Longsword", goods: "Steel helmet"},
  { title: "Squire", weapon: "Longsword", goods: "Steel helmet"},
  { title: "Tax collector", weapon: "Longsword", goods: "100 cp"},
  { title: "Trapper", weapon: "Sling", goods: "Badger pelt"},
  { title: "Trapper", weapon: "Sling", goods: "Badger pelt"},
  { title: "Urchin", weapon: "Stick (as club)", goods: "Begging bowl"},
  { title: "Wainwright", weapon: "Club", goods: "Pushcart***"},
  { title: "Weaver", weapon: "Dagger", goods: "Fine suit of clothes"},
  { title: "Wizard's apprentice", weapon: "Dagger", goods: "Black grimoire"},
  { title: "Woodcutter", weapon: "Handaxe", goods: "Bundle of wood"},
  { title: "Woodcutter", weapon: "Handaxe", goods: "Bundle of wood"},
  { title: "Woodcutter", weapon: "Handaxe", goods: "Bundle of wood"}
];

var SHORTBOW = "Shortbow";
var BOW = "Bow";
var SLING = "Sling";
var DART = "Dart";
var AS_DART = "as dart";

var human_language_table = [
 { name: "Alignment", max_value: 20 },
 { name: "Dwarf", max_value: 30 },
 { name: "Elf", max_value: 35 },
 { name: "Halfling", max_value: 40 },
 { name: "Gnome", max_value: 45 },
 { name: "Bugbear", max_value: 47 },
 { name: "Goblin", max_value: 57 },
 { name: "Gnoll", max_value: 60 },
 { name: "Hobgoblin", max_value: 65 },
 { name: "Kobold", max_value: 75 },
 { name: "Lizard Man", max_value: 80 },
 { name: "Minotaur", max_value: 81 },
 { name: "Ogre", max_value: 83 },
 { name: "Orc", max_value: 93 },
 { name: "Troglodyte", max_value: 99 },
 { name: "Giant", max_value: 100 }
];

var dwarf_language_table = [
 { name: "Alignment", max_value: 20 },
 { name: "Elf", max_value: 25 },
 { name: "Halfling", max_value: 35 },
 { name: "Gnome", max_value: 40 },
 { name: "Bugbear", max_value: 45 },
 { name: "Goblin", max_value: 55 },
 { name: "Gnoll", max_value: 60 },
 { name: "Hobgoblin", max_value: 65 },
 { name: "Kobold", max_value: 75 },
 { name: "Minotaur", max_value: 76 },
 { name: "Ogre", max_value: 81 },
 { name: "Orc", max_value: 86 },
 { name: "Troglodyte", max_value: 91 },
 { name: "Dragon", max_value: 93 },
 { name: "Giant", max_value: 97 },
 { name: "Bear", max_value: 98 },
 { name: "Undercommon", max_value: 100 }
];

var elf_language_table = [
 { name: "Alignment", max_value: 20 },
 { name: "Chaos", max_value: 25 },
 { name: "Law", max_value: 30 },
 { name: "Neutrality", max_value: 35 },
 { name: "Dwarf", max_value: 40 },
 { name: "Halfling", max_value: 45 },
 { name: "Goblin", max_value: 48 },
 { name: "Gnoll", max_value: 50 },
 { name: "Harpy", max_value: 52 },
 { name: "Hobgoblin", max_value: 54 },
 { name: "Kobold", max_value: 57 },
 { name: "Lizard Man", max_value: 58 },
 { name: "Minotaur", max_value: 59 },
 { name: "Ogre", max_value: 60 },
 { name: "Orc", max_value: 63 },
 { name: "Serpent-man", max_value: 64 },
 { name: "Troglodyte", max_value: 65 },
 { name: "Angelic", max_value: 70 },
 { name: "Centaur", max_value: 75 },
 { name: "Demonic", max_value: 80 },
 { name: "Dragon", max_value: 85 },
 { name: "Pixie", max_value: 90 },
 { name: "Naga", max_value: 92 },
 { name: "Eagle", max_value: 94 },
 { name: "Horse", max_value: 96 },
 { name: "Undercommon", max_value: 100 }
];

var halfling_language_table = [
 { name: "Alignment", max_value: 25 },
 { name: "Dwarf", max_value: 35 },
 { name: "Elf", max_value: 40 },
 { name: "Gnome", max_value: 50 },
 { name: "Bugbear", max_value: 55 },
 { name: "Goblin", max_value: 70 },
 { name: "Hobgoblin", max_value: 80 },
 { name: "Kobold", max_value: 90 },
 { name: "Pixie", max_value: 93 },
 { name: "Ferret", max_value: 98 },
 { name: "Undercommon", max_value: 100 }
];

var DWARF_PRE = "Dwarven";
var ELF_PRE = "Elven";
var HALF_PRE = "Halfling"

// -------------- Generator functions ------------------
function rollLanguage(languageTable) {
  var rollValue = roll(100);
  var i = 0;
  for(; rollValue > languageTable[i].max_value; i++);
  return languageTable[i].name;
}

function addLanguage(charList, raceList) {
  var rolled = rollLanguage(raceList);
  while(charList.indexOf(rolled) >= 0) {
    rolled = rollLanguage(raceList);
  }
  charList.push(rolled);
}

function selectText() {
  document.getElementById("character-output").select();
}

function prettyPrint(char) {
  var ret = "";
  ret += "0-Level " + char.occupation.title + "\n";
  ret += "Sex: " + char.sex + "\n";
  ret += "Alignment: ";
  if(char.alignment < 5) {
    ret += "Chaotic (";
  } else if(char.alignment < 9) {
    ret += "Neutral (";
  } else {
    ret += "Lawful (";
  }
  ret += char.alignment + ")\n";
  ret += "HP: " + char.hp.value + " (" + char.hp.roll + ")\n";
  ret += "Languages: ";
  for(var i = 0; i < char.languages.length; i++) {
    if(i > 0) {
      ret += ", ";
    }
    ret += char.languages[i];
  }
  ret += "\n";

  ret += "\n-- ABILITY SCORES --\n";
  for(var i = 0; i < abilities_table.length; i++) {
    var ability = abilities_table[i];
    ret += ability + ": " + plusMinus(char.abilities[ability].ability_modifier, true)
      + "/" + char.abilities[ability].ability_total + " (";
    for(j = 0; j < char.abilities[ability].ability_rolls.length; j++) {
      if(j > 0) {
        ret += ", ";
      }
      ret += char.abilities[ability].ability_rolls[j].toString();
    }
    ret += ")\n";
  }

  ret += "\n-- SAVES --\n";
  for(var i = 0; i < save_name_table.length; i++) {
    var save = save_name_table[i];
    ret += save + ": " + char.saving_throws[save] + "\n";
  }

  ret += "\n-- EQUIPMENT --\n";
  ret += "Petty Cash: " + char.money.value + "cp (";
  for(var i = 0; i < char.money.rolls.length; i++) {
    if(i > 0) {
      ret += ", ";
    }
    ret += char.money.rolls[i];
  }
  ret += ")\n";
  ret += "Favored weapon: " + char.occupation.weapon + "\n";
  ret += "Other equipment: \n";
  ret += "  " + char.occupation.goods + "\n";
  for(var i = 0; i < char.equipment.length; i++) {
    ret += "  " + char.equipment[i] + "\n";
  }

  ret += "\n-- SPECIAL ABILITIES --\n";
  if(char.abilities[LCK].ability_modifier != 0) {
    ret += char.birth_augur + "\n";
  } else if(char.specials.length == 0) {
    ret += "N/A\n";
  }
  for(var i = 0; i < char.specials.length; i++) {
    ret += char.specials[i] + "\n";
  }
  
  return ret;//JSON.stringify(char);
}

function generate() {
  var char = {};

  // Basic ability scores and modifiers.
  char.abilities = {};
  abilities_table.forEach(function(val, index) {
    var dice_roll = [roll(6), roll(6), roll(6)];
    var dice_total = sumList(dice_roll);
    char.abilities[val] = { 
      ability_total: dice_total,
      ability_modifier: abil_mod_table[dice_total],
      ability_rolls: dice_roll
    };
  });

  // Special luck modifier.
  char.birth_augur = 
    birth_augur_table[roll(30)-1] + " "
    + plusMinus(char.abilities[LCK].ability_modifier);
  
  // Saving throws.
  char.saving_throws = {};
  char.saving_throws[FORT] = char.abilities[STA].ability_modifier;
  char.saving_throws[REF] = char.abilities[AGI].ability_modifier;
  char.saving_throws[WILL] = char.abilities[PER].ability_modifier;

  // Sex and Alignment.
  char.sex = (roll(2) == 1? "F" : "M");
  char.alignment = roll(12);

  // Hit points.
  char.hp = {};
  char.hp.roll = roll(4);
  char.hp.value = Math.max(1,
    char.hp.roll + char.abilities[STA].ability_modifier);

  // Starting money.
  char.money = {};
  char.money.rolls = [roll(12), roll(12), roll(12), roll(12), roll(12)];
  char.money.value = sumList(char.money.rolls);

  // Equipment.
  char.equipment = [];
  char.equipment.push(random_equipment_table[roll(24)-1]);

  // Occupation.
  char.occupation = random_occupation_table[roll(100)-1];

  // Languages and racial abilities.
  char.specials = [];
  char.languages = ["Common"];
  var language_table = human_language_table;
  if(char.occupation.title.startsWith(DWARF_PRE)) {
    if(char.abilities[INT].ability_total >= 8) {
      char.languages.push("Dwarf");
    }
    language_table = dwarf_language_table;
    char.specials.push("Infravision");
    char.specials.push("Base speed 20'");
  } else if(char.occupation.title.startsWith(ELF_PRE)) {
    if(char.abilities[INT].ability_total >= 8) {
      char.languages.push("Elf");
    }
    language_table = elf_language_table;
    char.specials.push("Sensitive to iron");
    char.specials.push("Heightened senses");
  } else if(char.occupation.title.startsWith(HALF_PRE)) {
    if(char.abilities[INT].ability_total >= 8) {
      char.languages.push("Halfling");
    }
    language_table = halfling_language_table;
    char.specials.push("Infravision");
    char.specials.push("Base speed 20'");
  }
  for(var i = 0; i < char.abilities[INT].ability_modifier; i++) {
    addLanguage(char.languages, language_table);
  }

  // Ranged weapon ammo.
  var ammoCount = roll(6);
  if(char.occupation.weapon == BOW || char.occupation.weapon == SHORTBOW) {
    char.equipment.push(ammoCount.toString() + "x arrows");
  } else if(char.occupation.weapon == SLING) {
    char.equipment.push(ammoCount.toString() + "x sling bullets");
  } else if(char.occupation.weapon == DART || char.occupation.weapon.indexOf(AS_DART) >= 0) {
    char.equipment.push(ammoCount.toString() + "x " + char.occupation.weapon);
  }


  // Output to input display field.
  var result_el = document.getElementById("character-output");
  result_el.innerHTML = prettyPrint(char);
}
