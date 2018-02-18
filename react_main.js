import React from 'react';
import ReactDOM from 'react-dom';

class dash extends React.Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return(
      <div>
        <h2>Hi my name is sankit</h2>
      </div>
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
          </div>
        </div>
      );
    }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
