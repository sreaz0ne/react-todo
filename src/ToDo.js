import React from 'react';

function ToDo(props) {
    console.log(props.onChange);
    return (
        <div className="ToDo">
            <input type="checkbox" name="done" checked={props.done} onChange={props.onChange} />
            <input 
                type="text" 
                name="todo" 
                value={props.value} 
                onChange={props.onChange} 
            />
            <input type="button" name="delete" value="🗑" onClick={props.onClick}/>
        </div>
    );
}

export default ToDo;