import React, { useState } from 'react'; 

export const NewRoomForm = (props) => {
    const [state, setState] = useState({
        name:'', 
        area:undefined, 
    }); 

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10); 
        setState({...state, area: int >= 0 ? int : ''}); 
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        if(state.name && state.area ) {
            props.addNewRoom(state); 
            setState({...state, name:'', area:undefined}); 
        } else {
            console.log("cant submit")
        }
    }

    return (
        <div>
            <h4>New Room</h4>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="name"
                onChange={(e)=> setState({...state,name:e.target.value})}
                value={state.name}/>
                <input 
                type="text"
                placeholder="area"
                onChange={handleAreaInput}
                value={state.area}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
} 



