import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  state={
    count: 0,
  };

  add = ()=>{
    this.setState(current => ({count: current.count + 1}));
  }

  minus = ()=>{
    this.setState(current => ({count: current.count - 1}));
  }

  componentDidMount(){
    console.log('component redered');
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>I'm a class Component</h1>
        <h2>The number is: {this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
