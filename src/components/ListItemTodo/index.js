import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import "./style.css";

function ListItemTodo (props){
    console.log('ListItemTodo PROPS', props) 
    const { data, todo} = props;

    return (
        <ListItem  button className={ todo.completed ? 'completedTask' : '' }  >
            <Checkbox
            onChange={() => data.onChange(todo.id)}
            checked={todo.completed}
            color="primary"
            disableRipple
            />

            <ListItemText primary={todo.title} />

            <ListItemSecondaryAction className="todo-icon-del" onClick={() => data.onClick(todo.id)}>
                <DeleteOutlinedIcon aria-label="Delete"></DeleteOutlinedIcon>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
export default ListItemTodo;
