import React from 'react'

const Button = ({ children, onCLick } ) => (
    <button onClick={onCLick}>{children}</button>
)

export default Button