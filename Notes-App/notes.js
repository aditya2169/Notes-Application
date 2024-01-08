const chalk=require('chalk')
const fs=require('fs')

const getNotes= ()=>{
    return "Your Notes....";
}

const addNote = (title,body)=>{
    const notes=loadNotes();

    //const duplicate_notes=notes.filter((note) => title==note.title) 
    const duplicate_note=notes.find((note)=> note.title ===title)

    

    if(!duplicate_note){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log('note has been added!!')
    }
    else{
        console.log('note title already exists!!')
    }
    
}

const saveNotes=(notes)=>{
    const notes_to_save_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_to_save_string1);
}

const loadNotes=()=>{
    try {
        const data_buffer=fs.readFileSync('notes.json');
        const data_string=data_buffer.toString();
        const data_json=JSON.parse(data_string);
        return data_json;
    } catch (error) {
       return [] 
    }
    
}

const listNote = () =>{
    const notes=loadNotes();
    console.log(chalk.red('Your Notes!!'));
    notes.forEach((element) => {
        console.log(element.title);
    });
}

const readNote = (title)=>{
    const notes = loadNotes();
    
    const find_note=notes.find((element)=> element.title===title)
    if(find_note){
        console.log(chalk.bgGreen(find_note.title));
        console.log(find_note.body);
    }
    else{
        console.log(chalk.red('ERROR!!'));
    }
}

const removeNote=(title)=>{
    console.log(`the note to be removes is of title ${title}`)
    const notes=loadNotes();

    const new_notes=notes.filter((note)=> title !== note.title)

    if(new_notes.length==notes.length-1){
        const msg=chalk.bgGreen('Note removed!!');
        console.log(msg)
    }
    else{
        console.log(chalk.bgRed('No note found!!'))
    }

    saveNotes(new_notes);


}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
};