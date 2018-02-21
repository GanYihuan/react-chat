import React from 'react'
// To obtain parameters from an external component
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'

// Adorner mode
@connect(
    // matStatetoProps
    // state put into props
    state => ({num: state}),
    // actionCreators
    // addGun(), removeGun(), addGunAsync() put into props
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
  render() {
    // num addGun，removeGun，addGunAsync,
    // Are all connect to, do not need manual dispatch
    return (
        <div>
          <h2>There's a machine gun. {this.props.num}</h2>
          <button onClick={this.props.addGun}>Apply for a weapon</button>
          <button onClick={this.props.removeGun}>Handing over weapons</button>
          <button onClick={this.props.addGunAsync}>Two days delayed to give</button>
        </div>
    )
  }
}

// @connect replace it
//  // state put into props
// const mapStatetoProps = (state) => {
//   return {num: state}
// }
//  //addGun, removeGun, addGunAsync put into props
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(mapStatetoProps, actionCreators)(App)

export default App;
