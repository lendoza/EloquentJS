var journal = [];

function addEntry(events, didITurnIntoASquirrel){
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}

addEntry(["work", "touched tree", "pizza", "running", "tv",], false);

function phi(table){
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

console.log(JOURNAL.journal);

