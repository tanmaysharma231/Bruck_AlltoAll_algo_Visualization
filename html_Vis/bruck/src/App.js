
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import './App.css';
import React, { Component } from 'react';
import Vis from './components/vis';
//import assign from './components/t1';
import Data from './components/data';
import Card from 'react-bootstrap/Card';
import {assign} from './components/t1';
//import Data1 from './components/data1';
import { render } from 'react-dom';
import { object } from 'prop-types';
import Buttons from './components/buttons';
import Controls from './components/controls'
import ScoreBoard from './components/score-board'
//const store = createStore(reducers);
//import GridCircle from './components/gridcircle';
class App extends Component {
  constructor(props){
    super(props)
    this.assign1=this.assign1.bind(this);
    this.handlePlay=this.handlePlay.bind(this);
  }
  state = { 
    dropDownName:"Select scheme",
    proc:'6',
    aa:[1,2,3,4,5,6,7,8,5],
    ar:[],
    commstep:'Initial data',
    played:false
 }
 assign1(){
  // const ar1=assign(this.state.n);
   this.setState({ar:assign(this.state.proc)})
  

 }
 componentDidUpdate(){
    console.log(this.state.proc);
    
    console.log(this.state.ar);
 }
 handleProcChange=(e)=> {
 
     this.setState({proc:e});
    
     
 }
 changeName=(t)=>
 {
     this.setState({dropDownName:t})
 }
 handlePlay(){
  this.assign1();
   console.log("play button clicked");
 }
  render() { 
  
  return (
    <div className="App">
      <div className="container-fluid border">
        <div className="row">
            <Data
            onProcChange={this.handleProcChange}
            onChangeName={this.changeName}
            dropDownName={this.state.dropDownName}
            proc={this.state.proc}

            />
           
        </div>
        <div className="row ">
            <div className="col container-fluid border" >
                <Card border='success'bg="light">
                 <Card.Body> 
                   <Vis
                   ar={this.state.ar}
                   aa={this.state.aa}
                   />
                   </Card.Body>
                </Card>
            </div>
            <div className="col border" id="matrix">
                  
              </div>
        </div>
        <div>
          <Buttons onPlay={this.handlePlay} commstep={this.state.commstep}/>
          <Controls/>
          <ScoreBoard/>
        </div>
      </div>
     
    </div>
  );
}
}

export default App;
