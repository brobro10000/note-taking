const en = require("nanoid-good/locale/en")
const nanoid = require("nanoid-good").nanoid(en);

function addID() {
    return nanoid()//?
}

module.exports = { addID }