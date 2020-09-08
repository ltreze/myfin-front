import React, { Component } from 'react';
import Week from './components/Week';
import Header from './components/Header/';

class App extends Component {
  render() {
    const days = [{
      numberDay: 1,
      notes: [{
        title: "pagar conta",
        description: "hoje eu tenho que pagar a conta tal",
        dateScheduled: "2020-07-16T08:00"
      }, {
        title: "fazer curso",
        dateScheduled: "2020-07-16T11:00"
      }]
    }, {
      numberDay: 2,
      notes: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00"
        },
        {
          title: "fazer curso",
          description: "fazer aquele curso que ta quase acabando",
          dateScheduled: "2020-07-02T19:00"
        }
      ]
    }, {
      numberDay: 3,
      notes: [
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
      notes: [
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
      notes: [
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
      notes: [
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
      notes: [
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
        <>
          <Header title="my-fin react" />
          <Week weekDays={days} />
        </>
    );
  }
}

export default App;
