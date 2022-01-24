import React from 'react';

function ToDo(props) {
    console.log(props.onChange);
    return (
        <div className="ToDo">
            <input type="checkbox" name="done" checked={props.done} onChange={props.onChange} />
            <input 
                type="text" 
                name="title" 
                value={props.title} 
                onChange={props.onChange} 
            />
            <input type="button" name="delete" value="🗑" onClick={props.onClick}/>
            <input type="text" name="description" value={props.description} onChange={props.onChange} />
            <input type="datetime-local" name="dueDate" />
        </div>
    );
}

export default ToDo;