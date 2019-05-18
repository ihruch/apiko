import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import "./style.css";

function ListItemTodo (props){
    console.log(props) 
    const { items, onChange, onClick, todo} = props;
    return (
        <ListItem key={todo.id} role={undefined}  button className={ todo.completed ? 'completedTask' : '' }  >
            <Checkbox
            onChange={() => onChange(todo.id)}
            checked={todo.completed}
            color="primary"
            disableRipple
            />

            <ListItemText primary={todo.title} />

            <ListItemSecondaryAction className="todo-icon-del" onClick={() => onClick(todo.id)}>
                <DeleteOutlinedIcon aria-label="Delete"></DeleteOutlinedIcon>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
export default ListItemTodo;
/*
items
onChange
onClick
todo
*/