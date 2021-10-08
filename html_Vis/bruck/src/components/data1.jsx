import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import  InputGroup from 'react-bootstrap/InputGroup';
import  FormControl  from 'react-bootstrap/FormControl';

class Data1 extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        dropDownName:"Select scheme"
     }
     changeName(t)
     {
         this.setState({dropDownName:t})
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
                                        <DropdownButton id="dropdown-basic-button"  title={this.state.dropDownName}>
                                            <Dropdown.Item ><div onClick={(e)=>this.changeName(e.target.textContent)}>Uniform</div></Dropdown.Item>
                                            <Dropdown.Item ><div onClick={(e)=>this.changeName(e.target.textContent)}>Non-Uniform</div></Dropdown.Item>
                                            <Dropdown.Item ><div onClick={(e)=>this.changeName(e.target.textContent)}>Select scheme</div></Dropdown.Item>

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
                                     aria-label="NumProcess">    
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
                                      aria-label="NumProcess">    
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
 
export default Data1;