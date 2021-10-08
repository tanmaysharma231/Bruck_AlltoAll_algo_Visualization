import React, { Component } from 'react';
import GridCircle from './gridcircle';
//import  assign from './components/t1.js';
import GridBoard from './GridBoard';
class Vis extends Component {
    constructor(props){
        super(props)
    //  console.log(this.props.ar);
    }
    state = {
       
       arr:this.props.ar,
       
      }
    render() { 
        return (  
            <div className="container-xl">
               <div classname="row">Data View</div>
               <div className="container-fluid">
                  
               <GridBoard n="6" ar={this.props.ar}/>
                    
                   {/*this.props.ar.map((n)=>(<div className="col">{n}</div>))*/}


               </div>
            </div>
        );
    }
}
 
export default Vis;



