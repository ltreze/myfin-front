export default class Notes {
  constructor() {
    this.itens = [
      {
        id: 77,
        title: "desenho Pri77",
        description: "tenho que fazer aquele desenho prometido",
        weekDay: "dom",
        numberDay: 1,
      },
      {
        id: 99,
        title: "manutencao academia99",
        description: "ir ate SBC",
        weekDay: "dom",
        numberDay: 1,
      },
      {
        id: 55,
        title: "fazer curso55",
        description: "fazer aquele curso xyz",
        weekDay: "seg",
        numberDay: 2,
      },
    ];
    this._inscritos = []
  }

  addNote(title) {
    // console.log('********************')
    // console.log(title)
    // console.log(this.notas)
    const novaNota = new Nota(title);
    this.itens.push(novaNota);
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
  }
}
