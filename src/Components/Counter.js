import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count : 0};
    this.handleIncreament = this.handleIncreament.bind(this);
    this.handleDecreament = this.handleDecreament.bind(this);
  }

  handleIncreament(){
    this.setState({count:1});
  }

  handleDecreament(){
    //this.setState({count:10});
    this.setState(prev=>{
      return {count :prev.count + 1}
     })
  }

  render() {
    return (
      <div className='counter'>
        <p className='value'>{this.state.count}</p>
        <button onClick={this.handleIncreament}>+</button>
        <button onClick={this.handleDecreamnent}>-</button>

      </div>
    )
  }
}

export default Counter