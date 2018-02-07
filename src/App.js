import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGun, removeGun, addGunAsync} from "./index.redux";

@connect(
    // What attribute do you want state to put into prop?
    state => ({num: state}),
    // what function do you want to put into the prop? auto dispatch
    {addGun, removeGun, addGunAsync}
)

class App extends Component {
  render() {
    const num = this.props.num;
    return (
        <div>
          <h1>Gun-{num}</h1>
          <button onClick={this.props.addGun}>addGun weapon</button>
          <button onClick={this.props.removeGun}>removeGun weapon</button>
          <button onClick={this.props.addGunAsync}>delay addGun</button>
        </div>
    )
  }
}

export default App;