var localStorage = require('web-storage')().localStorage;

export default class BacklogNotes {
  constructor() {
    let backlogNotesPersisted = localStorage.get("db")
    const notasParse = []
    backlogNotesPersisted = backlogNotesPersisted ?? [];
    backlogNotesPersisted.forEach(x => 
      notasParse.push(new Nota(x.title, x.description, x.points, x.isBacklog, x.id))
    )

    this.itens = notasParse
    this._inscritos = []
  }

  addNote(title) {
    const novaNota = new Nota(title);
    this.itens.push(novaNota);

    const db = localStorage.get("db") ?? [];
    db.push(novaNota)
    localStorage.set("db", db)

    this.notificar()
  }

  apagarNota(indice) {
    this.itens.splice(indice, 1);
  }

  inscrever(func){   
    this._inscritos.push(func)
  }

  desinscrever(func){
      this._inscritos = this._inscritos.filter(f => f !== func)
  }

  notificar(){
      this._inscritos.forEach(func => { 
          func(this.itens)
      })
  }
}

class Nota {
  constructor(title, description, points, isBacklog, id) {
    this.title = title ?? "";
    this.id = id ?? Math.floor(Math.random() * 10000) + 1
    this.description = description ?? ""
    this.points = points ?? ""
    this.isBacklog = isBacklog ?? true;
  }

  setPoints(points){
    this.points = points
    console.log( 'setpoint do backlog notes')

    let db = localStorage.get("db")
    const dbParsed = []
    db = db ?? [];
    db.forEach(x => 
      dbParsed.push(new Nota(x.title, x.description, x.points, x.isBacklog, x.id))
    )

    console.log('dbParsed---')
    console.log(dbParsed)
    for(let i = 0; i < dbParsed.length; i++){
      console.log('dbParsed[i]---')
      console.log(dbParsed[i])
      if (dbParsed[i].id === this.id){
        dbParsed[i].points = points
      }
    }
    localStorage.set("db", dbParsed)
  }

  setDescription(description){
    this.description = description
  }
}
