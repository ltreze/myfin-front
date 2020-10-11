import React, { Component } from "react";
import Day from "../Day";

import "./style.css";

class Week extends Component {
  constructor(props){
    super(props);
    this.state = {

      notes: []
    };
    this._newNotes = this._newNotes.bind(this)
  }

  _newNotes(notes){
    this.setState({ ...this.state, notes })
  }

  componentDidMount(){
    this._newNotes(this.props.notesProp.itens);
    this.props.notesProp.inscrever(this._newNotes);
  }

  _tellWeekNoteWasAddedToThisDay(noteId, newWeekDay, updateSumPointsDay){

    this.props.notesProp.itens.forEach((note) => {
      if (note.id === noteId) {
        note.setWeekDay(newWeekDay)
        updateSumPointsDay(newWeekDay, noteId)
      }
    })

    this.props.tellAppThatNoteWasAddedToThisDay(noteId, newWeekDay)
  }

  render() {
    const sun = this.state.notes.filter(x => x.weekDay === 'dom')
    const mon = this.state.notes.filter(x => x.weekDay === 'seg')
    const tue = this.state.notes.filter(x => x.weekDay === 'ter')
    const wed = this.state.notes.filter(x => x.weekDay === 'qua')
    const thu = this.state.notes.filter(x => x.weekDay === 'qui')
    const fri = this.state.notes.filter(x => x.weekDay === 'sex')
    const sat = this.state.notes.filter(x => x.weekDay === 'sab')

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
