import Note from "./Note";
var localStorage = require("web-storage")().localStorage;

class NotesDao {
  getAll() {
    const notesParse = [];
    let db = localStorage.get("db");
    db = db ?? [];
    db.forEach((x) => {
      const note = new Note(
        x.title,
        x.description,
        x.points,
        x.isBacklog,
        x.id,
        x.weekDay
      );
      //console.log(note)
      note.setDao(this);
      notesParse.push(note);
    });

    return notesParse;
  }

  create(note) {
    console.log("create do NotesDao");
    let allNotes = this.getAll();
    //console.log(allNotes);
    allNotes.push(note);
    //console.log("allNotes---2");
    //console.log(allNotes);
    localStorage.set("db", allNotes);
  }

  getById(noteId){
    let allNotes = this.getAll();
    let note = allNotes.filter(x=>x.id == noteId)[0]
    return note;
  }

  updateById(noteId){

    let allNotes = this.getAll();
    let note = allNotes.filter(x=>x.id == noteId)

    console.log('note filter')
    console.log(note)

    // for (let i = 0; i < allNotes.length; i++) {
    //   //console.log("i");
    //   //console.log(i);
    //   //console.log("allNotes[i].id");
    //   //console.log(allNotes[i].id);
    //   if (allNotes[i].id === noteId) {
    //     //console.log("achou igual");
    //     allNotes[i] = note;
    //   }
    // }
    console.log('updateById called')
  }

  update(note) {
    //console.log("---NotesDao .....note");
    //console.log(note);
    //console.log("---note.id");
    //console.log(note.id);

    let allNotes = this.getAll();
    //console.log("allNotes");
    //console.log(allNotes);

    for (let i = 0; i < allNotes.length; i++) {
      //console.log("i");
      //console.log(i);
      //console.log("allNotes[i].id");
      //console.log(allNotes[i].id);
      if (allNotes[i].id === note.id) {
        //console.log("achou igual");
        allNotes[i] = note;
      }
    }
    //const allNotes2 = { ...allNotes, note };
    //console.log("allNotes depois");
    //console.log(allNotes);

    localStorage.set("db", allNotes);
  }
}

export default NotesDao;
