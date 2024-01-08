const chalk=require('chalk');
const yargs=require('yargs');
const notes_utils=require("./notes.js");

yargs.version('1.1.0'); // customise yargs version 

// add , remove ,read ,list ,notes ..

// create add command
yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title: {
            describe:'note title',
            demandOption:true,
            typeof:'string'
        },
        body:{
            describe:'body for the add note',
            demandOption:true,
            typeof:'string'
        }
    },
    handler(argv){
        notes_utils.addNote(argv.title,argv.body);
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',

    builder:{
        title:{
            describe:"Note title to be removed",
            demandOption:true,
            typeof:'string'
        }
    },

    handler(argv){
        notes_utils.removeNote(argv.title);
    }
})

// create list command
yargs.command({
    command:'list',
    describe:'list of notes',
    handler(){
        notes_utils.listNote();
    }
})

// create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder :{
        title:{
            describe : 'add title of note to be read',
            demandOption:true,
            typeof:'string'
        }
    },
    handler(argv){
        notes_utils.readNote(argv.title);
    }
})



yargs.parse();






