import React from 'react'
// To obtain parameters from an external component
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './redux-2'

// Adorner mode
@connect(
    // matStatetoProps
    // state put into props
    state => ({num: state}),
    // actionCreators
    // addGun(), removeGun(), addGunAsync() put into props, auto dispatch
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
  render() {
    // num addGun，removeGun，addGunAsync,
    // Are all connect to, do not need manual dispatch
    return (
        <div>
          <h2>There's a machine gun. {this.props.num}</h2>
          <button onClick={this.props.addGun}>申请武器</button>
          <button onClick={this.props.removeGun}>上交武器</button>
          <button onClick={this.props.addGunAsync}>延迟给</button>
        </div>
    )
  }
}

// // @connect replace it
// // state put into props
// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// // addGun, removeGun, addGunAsync put into props
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(mapStatetoProps, actionCreators)(App)

export default App;
