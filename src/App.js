import React, { Component } from "react";
import Week from "./components/Week";
import Header from "./components/Header/";
import ArrayDeNotas from "./dados/ArrayDeNotas";
import Backlog from "./components/Backlog";

class App extends Component {
  constructor(){
    super();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <>
        <Header title="my-fin react" />
        <Backlog id={"backlog"}
          notas={this.notas} 
          criarNota={this.notas.criarNota.bind(this.notas)}
        /> 
        {/* <Week
          criarNota={this.notas.criarNota}
          notas={this.notas.notas}
        /> */}
      </>
    );
  }
}

export default App;
