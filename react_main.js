import React from 'react';
import ReactDOM from 'react-dom';

class Dash extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <from className="dash_con">
        <div className="container">
          <h2>Ticket Number</h2>
            <input name="number" type="text" className="effect"/>
            <span className="focus-border"></span>
        </div>
      </from>
    );
  }
}

class Header extends React.Component {
    constructor(prop){
      super(prop);
      this.state = {}
    }
    render(){
      return(
        <div className="main">
          <div className="screen">
            <Dash />
          </div>
        </div>
      );
    }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
