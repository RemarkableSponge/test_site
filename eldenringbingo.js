function $(id) {
    return document.getElementById(id);
}

let challenges =
[
 // mostly unique/individual challanges:
 "Launch a player vertically using a weapon special attack",
 "Knock someone off of a ladder",
 "Cause a failed chug with a Hunter's Talisman",
 
 "Kill 5+ phantoms in an invasion, then kill host",
 "Kill a Red Phantom as a Darkmoon / Sentinel",
 
 "Parry someone 3 times in one invasion",
 "Parry someone with the Farron Greatsword Dagger",
 
 "Finish someone on an elevator",
 
 // "Finish someone with _" (_ is (a|an) item)
 "Finish someone with a Rope Firebomb",
 "Finish someone with a Regular Firebomb",
 "Finish someone with a torch",
 "Finish someone with a pyro glove punch",
 "Finish someone with a greatshield bash",
 "Finish someone with a thrown Kukri knife",
 // "Kill someone _" (_ is one of the following)
 "Kill someone with a plunge attack",             // "with (a|the) _" (_ is a type of attack)
 "Kill someone with a pine bundle riposte",
 "Kill someone with a Dark Hand grab",
 "Kill someone with a Guard Crush Critical",
 "Kill someone with the Scythe skill",
 "Kill someone with the Bonewheel shield skill",
 "Kill someone using bows ONLY",                  // "using _ ONLY" (_ is a type of weapon or a specific weapon)
 "Kill someone using a shield ONLY",
 "Kill someone using the Blacksmith Hammer ONLY",
 "Kill someone via gravity",                      // "via _" (_ is some kind of environmental kill)
 "Kill someone via greatbow knockdown fall",
 "Kill someone after removing a buff w/Duel Charm",
 // "Win 3 invasions in a row in _" (_ is a location)
 "Win 3 invasions in a row in High Wall of Lothric",
 "Win 3 invasions in a row in Undead Settlement",
 "Win 3 invasions in a row in Cathedral of the Deep",
 "Win 3 invasions in a row in Farron Keep",
 "Win 3 invasions in a row in Catacombs of Carthus",
 "Win 3 invasions in a row in Irithyll / Anor Londo",
 "Win 3 invasions in a row in Irithyll Dungeon",
 "Win 3 invasions in a row in Profaned Capital",
 "Win 3 invasions in a row in Lothric Castle",
 "Win 3 invasions in a row in Crucifixion Woods",
 "Win 3 invasions in a row in Archdragon Peak",
 "Win 3 Invasions in a row in Kiln of the First Flame",
 "Win 3 Invasions in a row in Grand Archives",
 // "Win an invasion _" (_ is any condition)
 "Win an invasion using Demon Fists",
 "Win an invasion wearing Calamity + Carthus Blood Rings",
 "Win an invasion without using melee attacks",
 "Win an invasion with a left-handed melee weapon ONLY",
 "Win an invasion in full dragon form with weapons equipped",
 "Win an invasion > 70% equip load",
 "Win an invasion solely with Farron Dart",
 "Win an invasion naked w/caestus",
 "Win an invasion without using rings",
 // "Inflict _ on an opponent" (_ is a status effect)
 "Inflict poison on an opponent",
 "Inflict toxic on an opponent",
 "Inflict frostbite on an opponent",
 ];

let scaler = 1.22518569910527148; // some random scale to make sure the seeds don't just repeat every 25 steps

function make_cards_from_seed() {
    let scaled_seed = $("bingo_seed").value * scaler;
    let copy = [];
    console.log(scaled_seed);
    
    for(let i = 0; i < challenges.length; i++) {
        copy[i] = {
            text:       challenges[i],
            sort_value: ((i + scaled_seed) % 25), // 25 cause 25 cards
        };
        // this is just some hacky psuedorandom seeded thing cause i couldn't be arsed to look up a good one
        console.log(i+" "+copy[i].sort_value);
    }
    
    copy.sort(function(a, b) { return a.sort_value - b.sort_value; });
    
    for(let i = 0; i < 25; i++) {
        $("bingo_card_" + i).innerHTML = copy[i].text;
        
        console.log(copy[i].sort_value+" "+copy[i].text);
    }
}

function random_int(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min); // +1 cause otherwise it would never land on max
}

window.onload = function() {
    $("bingo_seed").oninput = make_cards_from_seed;
    $("bingo_seed").value   = random_int(1, 9999);
    make_cards_from_seed();
};






function populateBingoCard() {
    let challenge_copy = [];
    for(let i = 0; i < bingoCardChallenges.length; i++)  challenge_copy.push(bingoCardChallenges[i]);
    
    let seed         = document.getElementById('pvpBingoSeed').value;
    let scaler       = 1.22518569910527148; // some random scale to make sure the seeds don't just repeat every 25 steps
    let scaled_seed  = seed * scaler;
    
    // this is just some hacky psuedorandom seeded thing cause i couldn't be arsed to look up a good one
    for(let i = 0; i < challenge_copy.length; i++) { let it = challenge_copy[i];
        it.sortValue = ((it.entryNumber + scaled_seed) % 25); // 25 cause 25 cards
        
        console.log(it.entryNumber+" "+scaled_seed+" "+it.sortValue);
    }
    
    challenge_copy.sort(function(a, b) { return a.sortValue - b.sortValue; });
    
    for(let i = 0; i < 25; i++) { let it = challenge_copy[i];
        console.log(it.sortValue+" "+it.desc);
        document.getElementById('bingoCardItem' + i).innerHTML = it.desc;
    }
}
