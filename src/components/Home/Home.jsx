import React, { Component } from "react";
import Week from "../Week"

class Home extends Component {
  render() {
    const days = [{
      numberDay: 1,
      cards: [{
        title: "pagar conta",
        description: "hoje eu tenho que pagar a conta tal",
        dateScheduled: "2020-07-16T08:00"
      }, {
        title: "fazer curso",
        dateScheduled: "2020-07-16T11:00"
      }]
    }, {
      numberDay: 2,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }, {
      numberDay: 3,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }, {
      numberDay: 4,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }, {
      numberDay: 5,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }, {
      numberDay: 6,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }, {
      numberDay: 7,
      cards: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          dateScheduled: "2020-07-16T11:00"
        }
      ]
    }
    ];

    return (
      <div>
        <Week days={days} />
      </div>
    );
  }
}

export default Home;
