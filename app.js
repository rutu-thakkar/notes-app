const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes')
// const command = process.argv[2]

// add,remove,read,list

//add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title,argv.body)
        // console.log("Title:",argv.title, "and Body:", argv.body);
    }
});


yargs.command({
    command: "remove",
    describe: "Remove a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
        // console.log("Removing a new node");
    }
});

yargs.command({
    command: "list",
    describe: "Listing notes",
    handler: function() {
        console.log("Listing notes");
    }
});

yargs.command({
    command: "read",
    describe: "read notes",
    handler: function() {
        const notesloaded = notes.loadNotes()
        console.log(notesloaded);
    }
});

yargs.parse()



// if (command == "add") {
//     console.log("adding notes")
// } else if (command == "read") {
//     console.log("reading note")
// } else {
//     console.log("...")
// }

// console.log(yargs.argv['_'])
// console.log(process.argv)