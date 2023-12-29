const fs=require('fs')

const getNotes= function(){
    return "Your Notes....";
}

const addNote = function(title,body){
    const notes=loadNotes();

    const duplicate_notes=notes.filter(function(note){
        if(title==note.title){
            return true;
        }
        else{
            return false;
        }
    })

    if(duplicate_notes.length===0){
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

const saveNotes=function(notes){
    const notes_to_save_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_to_save_string);
}

const loadNotes=function(){
    try {
        const data_buffer=fs.readFileSync('notes.json');
        const data_string=data_buffer.toString();
        const data_json=JSON.parse(data_string);
        return data_json;
    } catch (error) {
       return [] 
    }
    
}

const removeNote=function(title){
    console.log(`the note to be removes is of title ${title}`)
    const notes=loadNotes();

    const new_notes=notes.filter(function(note){
        if(title === note.title){
            return false;
        }
        else{
            return true;
        }
    })
    saveNotes(new_notes);

}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
};