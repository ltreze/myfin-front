import React from "react";
import Transacoes from "./transacao-list";

class Home extends React.Component {
  state = {
    transacoes: [],
    loading: true
  };
  componentDidMount() {
    this.getTransacoes();
  }

  async getTransacoes() {
    const results = [
      { valor: 2, descricao: "cafe", data: '2020-01-01'},
      { valor: 30, descricao: "livro", data: '2020-03-01'},
      { valor: 10, descricao: "uber", data: '2020-03-04'}];

    this.setState({ transacoes: [...results], loading: false });   
  }

  render() {
    return (
          <Transacoes transacoes={this.state.transacoes} />
    );
  }
}

export default Home;
