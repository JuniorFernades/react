import React, {Component} from 'react';
import Timer from './timer';
import Button from './button';



class App extends Component {

  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  render () {
    return (
      <div>
        {this.state.showTimer && <Timer />}

        <Button onCLick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show /hide timer</Button>
      </div>
    )
  }
  
}

export default App;