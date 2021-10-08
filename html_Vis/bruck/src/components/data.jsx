import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import  InputGroup from 'react-bootstrap/InputGroup';
import  FormControl  from 'react-bootstrap/FormControl';

class Data extends Component {
    constructor(props){
        super(props)
       
    }
  
     handleChange(e){
         this.props.onProcChange(e.target.value);
     }
     namechange(e){
         this.props.onChangeName(e);
     }

     render() { 
        return ( 
            <div>
                <div className='row'>
                     <div className='col'>
                        <div className='row'>
                                <div className='col-4'>
                                    Scheme:
                                 </div>
                                 <div className='col-8'>
                                        <DropdownButton id="dropdown-basic-button"  title={this.props.dropDownName}>
                                            <Dropdown.Item ><div onClick={(e)=>this.namechange(e.target.textContent)}>Uniform</div></Dropdown.Item>
                                            <Dropdown.Item ><div onClick={(e)=>this.namechange(e.target.textContent)}>Non-Uniform</div></Dropdown.Item>
                                            <Dropdown.Item ><div onClick={(e)=>this.namechange(e.target.textContent)}>Select scheme</div></Dropdown.Item>

                                        </DropdownButton> 
                                    </div>
                       

                         </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                    Number of processes:
                            </div>
                        <div className='col'>
                            <InputGroup size="sm">
                                    <FormControl
                                     aria-label="NumProcess"
                                     
                                     onChange={this.handleChange.bind(this)}
                                     value={this.props.proc}
                                     > 
                                        
                                     </FormControl>
                                </InputGroup>
                        </div>

                        </div>
                    </div>
                    <div className='col'>
                       <div className='row'>
                            <div className='col'>

                                 Elements per data block:
                                 </div>
                             <div className='col'>
                                 <InputGroup >
                                     <FormControl
                                      aria-label="Elements">    
                                      </FormControl>
                                 </InputGroup>
                             </div>

                             
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Data;
