import React, { Children } from 'react';
const Greet= ({name, sub ,children}) =>{
    return (
        <div>
            <h1 className='secondary'>Hello, {name} are you intrested in {sub} ?</h1>
            {children}
        </div>
    )
}
export default Greet