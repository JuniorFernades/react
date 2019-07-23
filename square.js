import React from 'react'

const Square = ({ color, largura }) => (
    <div style={{
        backgroundColor: color,
        height:'100px',
        width: largura
    }} />
)

Square.defaultProps = {
    color: 'red',
    largura: 100
}
export default Square