import React, { Component } from "react";

export default class App extends Component{
  state={
    numero:0
  }
incremento =() => {
  if(this.state.numero<10){
    this.setState({
      numero:this.state.numero+1
    })
  }
}
decremento = () =>{
  if(this.state.numero>0){
    this.setState({
      numero:this.state.numero-1
    })
  }
}
render(){
  return(
  <div> 
      <h1>Contador</h1>
    
    <h2>{this.state.numero}</h2>
    <div>
      <button onClick={this.decremento} > - </button>
      <button onClick={this.incremento} > + </button>
    </div>
  </div>
  )
}
}