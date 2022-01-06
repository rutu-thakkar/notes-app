const fs = require("fs");

function getNotes(){
    return "your notes.."
}
const addNotes = function(title,body) {
    const notes = loadNotes()
    
    const duplicated = notes.filter((note) => {
         return note.title === title
    });

    // console.log(duplicated.length)

    if (duplicated.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log("New node duplicated")
    } else {
        console.log("Note Title taken")
    }
    // console.log(notes)
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJson)
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data);
    } catch(err) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicated = notes.filter((note) => {
        return note.title == title
    })

    
    if(duplicated.length === 0 ) {
        console.log('Title not there')
    } else {
        notes.pop(duplicated)
        // console.log(duplicated);
    }
    saveNotes(notes)
    console.log('removed')
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    loadNotes: loadNotes
};