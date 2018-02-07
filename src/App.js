import React, {Component} from 'react';

class App extends Component {
  render() {
    const store = this.props.store;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const num = store.getState();
    return (
        <div>
          <h1>Gun-{num}</h1>
          <button onClick={() => store.dispatch(addGun())}>addGun weapon</button>
          <button onClick={() => store.dispatch(removeGun())}>removeGun weapon</button>
        </div>
    )
  }
}

export default App;