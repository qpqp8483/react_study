import React, { Component } from 'react'
import ErrorBoundary from './component/ErrorBoundary';
import LifeCycleSamplp from './component/LifeCycleSamplp';


function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSamplp color={this.state.color}></LifeCycleSamplp>
        </ErrorBoundary>
      </div>
    )
  }
}


export default App;