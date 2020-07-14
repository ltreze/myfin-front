import React from "react";
import Transacoes from "./transacoes";
import Week from "./week"

class Home extends React.Component {
  state = {
    transacoes: [],
    days: [],
    loading: true
  };
  componentDidMount() {
    this.getTransacoes();
    this.getDays();
  }

  async getTransacoes() {
    const results = [
      { valor: 2, descricao: "cafe", data: '2020-01-01'},
      { valor: 30, descricao: "livro", data: '2020-03-01'},
      { valor: 10, descricao: "uber", data: '2020-03-04'},
      { valor: 50, descricao: "luz", data: '2020-04-04'},
      { valor: 23, descricao: "netflix", data: '2020-05-04'}];

    this.setState({ transacoes: [...results], loading: false });   
  }

  async getDays() {
    const days = [
      { day: 12, month: 7, year: 2020, cards:[ { description: "pagar conta"}, { description: "fazer curso"} ] },
      { day: 13, month: 7, year: 2020, cards:[ { description: "ligar para joao"} ] },
      { day: 14, month: 7, year: 2020, cards:[ { description: "estudar react"} ] },
      { day: 15, month: 7, year: 2020, cards:[ { description: "estudar react"} ] },
      { day: 16, month: 7, year: 2020, cards:[ { description: "estudar react"} ] },
      { day: 17, month: 7, year: 2020, cards:[ { description: "estudar react"} ] },
      { day: 18, month: 7, year: 2020, cards:[ { description: "estudar react"} ] }
    ];

    this.setState({ days: [...days], loading: false });   
  }

  render() {
    //return ( <Transacoes transacoes={this.state.transacoes} /> );
    return ( <Week days={this.state.days} /> );
  }
}

export default Home;
