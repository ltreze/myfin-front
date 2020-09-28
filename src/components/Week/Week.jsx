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
    console.log(notes)
    console.log(this.state)
    this.setState({
      notes: notes
    })
    console.log(this.state)
  }

  componentDidMount(){
    console.log(this.props.notesProp)
    console.log(this.props.notesProp.itens)
    this._newNotes(this.props.notesProp.itens)
    this.props.notesProp.inscrever(this._newNotes)
  }

  render() {
    console.log(this.state.notes.filter((x)=>{ return x.weekDay === 'dom'; }))
    return (
      <ul className="week">
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'dom'; })} id={'dom'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'seg'; })} id={'seg'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'ter'; })} id={'ter'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'qua'; })} id={'qua'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'qui'; })} id={'qui'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'sex'; })} id={'sex'} />
        <Day dayProp={this.state.notes.filter((x)=>{ return x.weekDay === 'sab'; })} id={'sab'} />
      </ul>
    );
  }
}

export default Week;
