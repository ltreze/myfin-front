import React, { Component } from "react";
import Day from "../Day";

import "./style.css";

class Week extends Component {
  constructor(props){
    //console.log('********** WEEK constructor() - BEGIN');
    //console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    super(props);
    this.state = {

      notes: []
    };
    this._newNotes = this._newNotes.bind(this)
    //console.log('********** WEEK constructor() - END');
    //console.log(new Date().toISOString().replace('Z','').replace('T',' '))
  }

  _newNotes(notes){
    //console.log('********** WEEK _newNotes()');
    //console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    this.setState({ ...this.state, notes })
  }

  componentDidMount(){
    //console.log('********** WEEK componentDidMount()');
    //console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    //console.log('this.props.notesProp');
    this._newNotes(this.props.notesProp.itens);
    this.props.notesProp.inscrever(this._newNotes);
  }

  _tellWeekNoteWasAddedToThisDay(noteId, weekDay){

    this.props.notesProp.itens.forEach((note) => {
      console.log(note);
      if (note.id == noteId) {
        console.log('a nota que vc esta mudando esta em algum dia da semana ja')
        note.setWeekDay(weekDay)
      }
    })

    this.props.tellAppThatNoteWasAddedToThisDay(noteId, weekDay)
    // console.log('tellWeekNoteAddToThisDay ' + noteId + ' ' + weekDay )
    // console.log(this.props.notesProp)
    //this.props.notesProp.addNote()

    //this.state.notes.
  }

  render() {
    //console.log('********** WEEK render()')
    //console.log(new Date().toISOString().replace('Z','').replace('T',' '))
    //console.log(this.state.notes.filter(x => x.weekDay === 'dom'))
    //console.log(this.state.notes)

    const sun = this.state.notes.filter(x => x.weekDay === 'dom')
    const mon = this.state.notes.filter(x => x.weekDay === 'seg')
    const tue = this.state.notes.filter(x => x.weekDay === 'ter')
    const wed = this.state.notes.filter(x => x.weekDay === 'qua')
    const thu = this.state.notes.filter(x => x.weekDay === 'qui')
    const fri = this.state.notes.filter(x => x.weekDay === 'sex')
    const sat = this.state.notes.filter(x => x.weekDay === 'sab')

    //console.log('dom')
    //console.log(dom)

    return (
      <ul className="week">
        <Day 
          notesOfThisDay={sun} 
          weekDay={'dom'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)} />

        <Day 
          notesOfThisDay={mon} 
          weekDay={'seg'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)} />

        <Day 
          notesOfThisDay={tue} 
          weekDay={'ter'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)}/>

        <Day 
          notesOfThisDay={wed} 
          weekDay={'qua'}
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)} />

        <Day 
          notesOfThisDay={thu} 
          weekDay={'qui'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)}/>

        <Day 
          notesOfThisDay={fri} 
          weekDay={'sex'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)}/>

        <Day 
          notesOfThisDay={sat} 
          weekDay={'sab'} 
          tellWeekNoteWasAddedToThisDay={this._tellWeekNoteWasAddedToThisDay.bind(this)}/>
      </ul>
    );
  }
}

export default Week;
