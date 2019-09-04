import React from 'react';
import PropTypes from 'prop-types';

export default function Input ({type, name, change, value, id = null}) {
    return (
        <input type={type} name={name} id={id || name} onChange={change}  value={value || ''}/>
    )
}
Input.defaultProps = {
    type: 'text',
    name: 'name1'
}
Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    change: PropTypes.func, 
    value: PropTypes.string
}