import React from 'react'

function FunctionClick() {
    function eventHandler(){
        alert("Button Clicked!")
    }
    return (
        <div>
            <button onClick={eventHandler} className='button'>Click me</button>       
        </div>
    )
}

export default FunctionClick
        