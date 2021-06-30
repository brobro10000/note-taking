const en = require("nanoid-good/locale/en")
const nanoid = require("nanoid-good").nanoid(en);

function addID(notes) {
    for(let i = 0;i<notes.length;i++)
    (notes[i].id == undefined ? notes[i].id = nanoid() : true);
    return notes
}

module.exports = { addID }