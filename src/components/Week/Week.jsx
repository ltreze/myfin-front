import React, { Component } from "react";
import Day from "../Day";

import "./style.css";

class Week extends Component {
  constructor(props){
    console.log('********** WEEK constructor() - BEGIN');
    console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    super(props);
    this.state = {

      notes: []
    };
    this._newNotes = this._newNotes.bind(this)
    console.log('********** WEEK constructor() - END');
    console.log(new Date().toISOString().replace('Z','').replace('T',' '))
  }

  _newNotes(notes){
    console.log('********** WEEK _newNotes()');
    console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    this.setState({ ...this.state, notes })
  }

  componentDidMount(){
    console.log('********** WEEK componentDidMount()');
    console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    console.log('this.props.notesProp.itens');
    console.log(this.props.notesProp.itens)
    this._newNotes(this.props.notesProp.itens);
    this.props.notesProp.inscrever(this._newNotes);
  }

  render() {
    console.log('********** WEEK render()')
    console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    //console.log(this.state.notes.filter(x => x.weekDay === 'dom'))
    console.log(this.state.notes)

    const dom = this.state.notes.filter(x => x.weekDay === 'dom');
    console.log('dom')
    console.log(dom)

    return (
      <ul className="week">
        <Day dayProp={dom} idProp={'dom'} />
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
