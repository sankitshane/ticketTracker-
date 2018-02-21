import React from 'react';
import ReactDOM from 'react-dom';

class Dash extends React.Component {
  constructor(props){
    super(props);
    this.state = {"clicked":false}
  }

  handleClick() {
        this.setState((state) => ({ clicked : !state.clicked}));
  }

  render(){
    var class_active = this.state.clicked? "makeactive": "makeinactive";
    return(
      <from className="dash_con">
        <div className="container">
          <h2>Ticket Number</h2>
          <input name="number" type="text" className="effect"/>
          <span className="focus-border"></span>
        </div>
        <div className="container">
          <div class="squaredThree">
            <input type="checkbox" value="None" id="squaredThree" name="check"/>
            <label for="squaredThree"></label>
          </div>
          <h3>Pager</h3>
        </div>
        <div className="submit">
          <button id="button" className={class_active} onClick={this.handleClick.bind(this)}></button>
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
