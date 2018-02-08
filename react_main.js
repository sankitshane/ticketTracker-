import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
    constructor(prop){
      super(prop);
      this.state = {}
    }
    render(){
      return(
        <div>
          <div className='front'>
            <h1>Ticket Tracker</h1>
          </div>
          <div className='tmonitor'>
          </div>
        </div>
      );
    }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
