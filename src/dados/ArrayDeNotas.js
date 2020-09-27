export default class ArrayDeNotas {
  constructor() {
    this.itens = [
      {
        title: "pagar contax",
        description: "hoje eu tenho que pagar a conta tal",
        weekDay: "dom",
        numberDay: 1,
      },
      {
        title: "fazer cursoy",
        description: "fazer aquele curso xyz",
        weekDay: "seg",
        numberDay: 2,
      },
    ];
    this._inscritos = []
  }

  criarNota(title) {
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
