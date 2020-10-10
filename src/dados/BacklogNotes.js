import NotesDao from "./NotesDao";
import Note from "./Note";

export default class BacklogNotes {
  constructor() {
    this.notesDao = new NotesDao();

    this.itens = this.notesDao.getAll().filter(x => x.isBacklog)

    
    this._inscritos = [];
  }

  addNote(title) {
    console.log('chamou addNote do BacklogNotes.js')
    
    const newNote = new Note(title);
    console.log(newNote)
    
    newNote.setDao(this.notesDao);
    console.log(newNote)
    
    this.itens.push(newNote);
    this.notesDao.create(newNote);
    this.notificar();
  }

  putOnBacklog(noteId){
    let note = this.notesDao.getById(noteId)
    note.isBacklog = true;
    this.notesDao.update(note)
  }

  apagarNota(indice) {
    this.itens.splice(indice, 1);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.itens);
    });
  }
}
