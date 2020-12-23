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
      note.setDao(this);
      notesParse.push(note);
    });

    return notesParse;
  }

  create(note) {
    console.log("create do NotesDao");
    let allNotes = this.getAll();
    allNotes.push(note);
    localStorage.set("db", allNotes);
  }

  getById(noteId){
    let allNotes = this.getAll();
    let note = allNotes.filter(x=>x.id === noteId)[0]
    return note;
  }

  update(note) {
    let allNotes = this.getAll();
    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i].id === note.id) {
        allNotes[i] = note;
      }
    }
    localStorage.set("db", allNotes);
  }
}

export default NotesDao;
