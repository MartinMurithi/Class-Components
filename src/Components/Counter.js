import React, { Component } from 'react'

export class Counter extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {count : 0};
  //   this.handleIncreament = this.handleIncreament.bind(this);
  //   this.handleDecreament = this.handleDecreament.bind(this);
  // }

  // handleIncreament(){
  //   this.setState({count:1});
  //   this.setState(prev=>{
  //     return{count :prev.count -1};
  //   })
  // }

  // handleDecreament(){
  //   //this.setState({count:10});
  //   this.setState(prev=>{
  //     return {count:prev.count + 1}
  //    })
  // }

  state= {
    count:0
 }
 handleIncrement=()=>{
  this.setState({count:this.state.count+1});
 }
 handleDecrement=()=>{ 
  this.setState({count:this.state.count-1});
  
}

        render() {
        return(
            <div className = 'counter'>
                <p className ='numbers'>{this.state.count}</p>
                <span className ='button'>
                    <button onClick={this.handleIncrement}> + </button>
                    <button onClick={this.handleDecrement} > - </button>
                </span>

            </div>
        )
        }
      }

      export default Counter;