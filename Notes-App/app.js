const chalk=require('chalk');
const yargs=require('yargs');
const getNotes=require("./notes.js");

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
    handler: function(argv){
        console.log('tittle : ',argv.title);
        console.log('body is :',argv.body);
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler: function(){
        console.log('removeing a note');
    }
})

// create list command
yargs.command({
    command:'list',
    describe:'list of notes',
    handler: function(){
        console.log('list of all the notes');
    }
})

// create read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        console.log('read a note');
    }
})



yargs.parse();






