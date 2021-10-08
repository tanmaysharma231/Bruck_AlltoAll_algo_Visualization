import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Buttons extends Component {

    state = {  
        commstep:'Initial data'
    }
    render() { 
        return ( 
            <div>
                <div className='row'> 

                    <div className='col-4'>
                       {this.state.commstep}
                    </div>
                    
                     <div className="col-1">
                     <Button as="input" type="submit" value="Play"variant="outline-dark"  onClick={this.props.onPlay} />
                     </div>
                     <div className="col-1">
                     <Button as="input" type="button" value="Pause"variant="outline-dark" />   
                     </div>
                     <div className="col-1">
                     <Button as="input" type="button" value="Step"variant="outline-dark" />  
                     </div>
                     <div className="col-1">
                     <Button as="input" type="reset" value="Reset"variant="outline-dark" />   
                     </div>
                     <div className='col-4'>             
                       </div>
                </div>

            </div>
         );
    }
}
 
export default Buttons;
