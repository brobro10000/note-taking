const en = require("nanoid-good/locale/en")
const nanoid = require("nanoid-good").nanoid(en);

//adds ID from  api, nanoid
function addID(notes) {
    for (let i = 0; i < notes.length; i++)
        if(notes[i].id == undefined){
            notes[i].id = nanoid()
        }
    return notes
}
//deletes note based on notes id then returns the filtered 'true' objects
function deleteByID(notes, id) {
    if(id == -1){
        return notes = []
    }
    for (let i = 0; i < notes.length; i++)
        if(notes[i].id == id){
            delete notes[i]
        }
    return notes.filter(() => true)
}
module.exports = { addID, deleteByID }