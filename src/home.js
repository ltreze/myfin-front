import React from "react";
import Week from "./week"

class Home extends React.Component {
  state = {
    daysOfThisWeek: [],
    loading: true
  };
  componentDidMount() {
    this.getDays();
  }

  async getDays() {
    const lists = [
      { 
        description: "dia1", 
        cards:[ 
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
      },
      { 
        description: "dia2", 
        cards:[ 
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
      },
      { 
        description: "dia3", 
        cards:[ 
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
      },
      { 
        description: "dia4", 
        cards:[ 
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
      },
      { 
        description: "dia5", 
        cards:[ 
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
      },
      { 
        description: "dia6", 
        cards:[ 
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
      },
      { 
        description: "dia7", 
        cards:[ 
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

    this.setState({ daysOfThisWeek: [...lists], loading: false });   
  }

  render() {
    return ( <Week days={this.state.daysOfThisWeek} /> );
  }
}

export default Home;
