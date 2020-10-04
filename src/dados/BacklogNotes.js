import NotesDao from "./NotesDao";
import Note from "./Note";

export default class BacklogNotes {
  constructor() {
    this.notesDao = new NotesDao();

    this.itens = this.notesDao.getAll().filter(x => x.isBacklog)

    
    this._inscritos = [];
  }

  addNote(title) {
    const newNote = new Note(title);
    this.itens.push(newNote);
    this.notesDao.create(newNote);
    this.notificar();
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
