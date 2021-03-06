const fs = require("fs");
const chalk = require('chalk')

function getNotes(){
    return "your notes.."
}
const addNotes = (title,body) => {
    const notes = loadNotes()
    
    const duplicated = notes.filter((note) => {
         return note.title === title
    });

    if (duplicated.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log(chalk.green.italic.bold("New note duplicated"))
    } else {
        console.log(chalk.red.italic.bold("Note Title taken"))
    }
    // console.log(notes)
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJson)
}

const loadNotes = () => {
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
        console.log(chalk.red.italic.bold('Title not there'));
    } else {
        notes.pop(duplicated)
        console.log(chalk.green.italic.bold('removed'))

        // console.log(duplicated);
    }
    saveNotes(notes)
}

const readNotes = (title) => {
    const notes = loadNotes()

    searchresult = notes.filter((note) => {
        return note.title === title
    });

    if(searchresult.length === 0) {
        console.log("No Note having title \"", title, "\" is found");
    } else {
        console.log(searchresult);
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    loadNotes: loadNotes,
    readNotes: readNotes
};

