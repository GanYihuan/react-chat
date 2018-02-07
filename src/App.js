import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGun, removeGun, addGunAsync} from "./index.redux";

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

const mapStatetoProps = (state) => {
  return {num: state}
}
const actionCreators = {addGun, removeGun, addGunAsync};
App = connect(mapStatetoProps, actionCreators)(App);
export default App;