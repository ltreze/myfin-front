import React, { Component } from "react";
import Day from "../Day";
import "./style.css";

class Week extends Component {
  constructor(){
    super();
    this.state = {
      notes: []

    };
    this._newNotes = this._newNotes.bind(this)
  }
  _newNotes(notes){
    //console.log(notes)
    //console.log(this.state)
    this.setState({
      notes: notes
    })
    //console.log(this.state)
  }

  componentDidMount(){
    //console.log(this.props.notesProp)
    //console.log(this.props.notesProp.itens)
    this._newNotes(this.props.notesProp.itens)
    this.props.notesProp.inscrever(this._newNotes)
  }

  render() {
    console.log(this.state.notes.filter(x => x.weekDay === 'dom'))
    return (
      <ul className="week">
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'dom')} idProp={'dom'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'seg')} idProp={'seg'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'ter')} idProp={'ter'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'qua')} idProp={'qua'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'qui')} idProp={'qui'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'sex')} idProp={'sex'} />
        <Day dayProp={this.state.notes.filter(x => x.weekDay === 'sab')} idProp={'sab'} />
      </ul>
    );
  }
}

export default Week;
