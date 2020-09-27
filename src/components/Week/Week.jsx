import React, { Component } from "react";
import Day from "../Day";
import "./style.css";

class Week extends Component {
  constructor(){
    super();
    this.dom = []
    this.seg = []
  }
  // componentDidMount(){
  //   console.log(this.props.notas)
  //   const n = this.props.notas;

  //   for(let i = 0; i < n.length; i++) {

  //     if (n[i].weekDay === 'dom') {
  //       this.dom.push(n[i]);
  //     } else if (n[i].weekDay === 'seg'){
  //       this.seg.push(n[i])
  //     }
  //   }
  //   console.log(this.dom)
  //   console.log(this.seg)
  // }
  render() {
    console.log(this.props.notas)
    return (
      <ul className="week">
        {/*
        <Day day={this.dom} id={"dom"} />
        <Day day={this.seg} id={"seg"}/>
        <Day day={this.props.weekDays[2]} id={"ter"}/>
        <Day day={this.props.weekDays[3]} id={"qua"}/>
        <Day day={this.props.weekDays[4]} id={"qui"}/>
        <Day day={this.props.weekDays[5]} id={"sex"}/>
        <Day day={this.props.weekDays[6]} id={"sab"}/> */}
      </ul>
    );
  }
}

export default Week;
