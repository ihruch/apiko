import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import "./style.css";


class Form extends Component {
    
    render(){
        const {innnerRef, ...props} = this.props
            
        return (
            <form {...props} className="form-add-task">
                <TextField
                    className="input-add-task"
                    ref={innnerRef}
                    {...props}                
                    label="Add task"
                    type="text"
                    name="addTask"
                    margin="normal"
                    variant="outlined"
                />               
            </form>
        );
    }
}
export default Form;
