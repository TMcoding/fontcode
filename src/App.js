import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
    };
  }
  hanlder = ()=>{
    if(this.state.a < 10){
      this.setState({
        a:this.state.a + 1
      })
    }
  }
  render() {
    return(
      <div>
        this is my first component
        <p>
          {this.state.a}
        </p>
        <button onMouseMove = {this.hanlder}>点我哟</button>
      </div>
    )
  }
}
export default App;
