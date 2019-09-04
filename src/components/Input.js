import React from 'react';

export default function Input ({type, name, change, value, id = null}) {
    return (
        <input type={type} name={name} id={id || name} onChange={change}  value={value || ''}/>
    )
}