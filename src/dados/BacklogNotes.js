var localStorage = require('web-storage')().localStorage;


export default class BacklogNotes {
  constructor() {
    // const nota111 = new Nota("pagar conta111");
    // nota111.id = 111
    // nota111.description = "hoje eu tenho que pagar a conta tal"
    // nota111.weekDay = "dom"
    // nota111.numberDay = 1
    // nota111.points = 3

    // const nota222 = new Nota("fazer curso222");
    // nota222.id = 222
    // nota222.description = "fazer aquele curso xyz"
    // nota222.weekDay = "seg"
    // nota222.numberDay = 2
    // nota222.points = 13

    this.itens = [
      //nota111,
      //nota222,
    ];
    this._inscritos = []
  }

  addNote(title) {
    // console.log('********************')
    // console.log(title)
    // console.log(this.notas)
    const novaNota = new Nota(title);
    this.itens.push(novaNota);
    localStorage.set(novaNota.id, novaNota)
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
  constructor(title) {
    this.title = title;
    this.id = Math.floor(Math.random() * 10000) + 1
  }

  setPoints(points){
    this.points = points
    localStorage.set(this.id, this)
  }

  setDescription(description){
    this.description = description
    localStorage.set(this.id, this)
  }
}
