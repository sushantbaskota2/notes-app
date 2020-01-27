const fs = require('fs')
let getNotes = ()=>{
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note=>{
        return note.title===title;
    })  
    console.log(notes)
    if(duplicateNotes.length ==0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }else{
        console.log('Note title taken')
    }
   
}

const removeNotes =function (title){
    console.log('Removing note with title: ', title)
    const notes= loadNotes();
    const removedNotes = notes.filter(note=>{
        return note.title != title
    })
    saveNotes(removedNotes)
    
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)}
    catch(e){
        return []
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes: removeNotes,
}