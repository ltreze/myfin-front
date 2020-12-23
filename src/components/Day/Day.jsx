import React, { Component } from "react";
import Note from "../Note";
import "./style.css";


class Day extends Component {
  constructor(props){
    super(props)
    this.state = { notesOfThisDay: {}, sumDayPoints: "" }
    this._newNotes = this._newNotes.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.sumDayPoints = this.sumDayPoints.bind(this)
  }
  
  _newNotes(notesOfThisDay){
    this.setState({ ...this.state, notesOfThisDay})
  }

  componentDidMount(){
    console.log(this.props.notesOfThisDay);
    this._newNotes(this.props.notesOfThisDay);
    const sumDayPoints = this.sumDayPoints()
    const novoState = {
      notesOfThisDay: this.props.notesOfThisDay,
      sumDayPoints: sumDayPoints
    }
    this.setState(novoState)
  }

  componentDidUpdate() {
    this.props.notesOfThisDay.map(x => x.inscrever(this._newNotes))
  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    const noteId = Number(e.dataTransfer.getData("id"));
    const points = Number(e.dataTransfer.getData("points"));
    const sumDayPoints = this.sumDayPoints() + points;
    this.setState({...this.state, sumDayPoints})

    console.log(sumDayPoints)
    const noteElement = document.getElementById(noteId);

    if (e.currentTarget.id.startsWith('ul-lista-de-notas')) {
      e.currentTarget.appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith('dia')){
      e.currentTarget.children[1].appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith('h2-')){
      e.currentTarget.parentElement.children[1].appendChild(noteElement)
    }

    this.props.tellWeekNoteWasAddedToThisDay(noteId, this.props.weekDay, this.updateSumPointsDay.bind(this))
  }

  updateSumPointsDay(newWeekDay, noteId){
    console.log('updateSumPointsDay chamado')
    console.log(newWeekDay)
    console.log(noteId)
  }

  onDragOver(e){
    e.preventDefault();
    e.stopPropagation();
  }

  sumDayPoints(){
    return this.props.notesOfThisDay.reduce((sum, n) => sum + Number(n.points), 0)
  }

  render() {
    return (
      <li 
        className="day" 
        id={"dia_" + this.props.weekDay}
        onDrop={this.onDrop} 
        onDragOver={this.onDragOver} >
        <h2 
          className="day_description"
          id={"h2-" + this.props.weekDay}
          onDrop={this.onDrop} 
          onDragOver={this.onDragOver}>
          {this.props.weekDay} - {this.state.sumDayPoints}
        </h2>
        <ul 
          className="ul_notas" 
          id={"ul-lista-de-notas-" + this.props.weekDay} 
          onDrop={this.onDrop} 
          onDragOver={this.onDragOver} >
          { this.props.notesOfThisDay.map((item) => ( 
            <Note note={item} key={item.id} id={item.id} idParent={this.props.id} 
            />
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
