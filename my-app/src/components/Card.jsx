import React from 'react'
import './Card.css'
function Card(props) {
    const {title, imageUrl,category, price}=props.data
console.log(props, 'here is props')
    return (
        <div className='card-container'>
            <div style={{width:"286px", height:"429px"}}>
                <img src={imageUrl} alt={title}
                style={{width:"100%"}}/>
            </div>
            <div className='card-footer'>
                <p className='subtitle'>{category}</p>
                <strong className='title'>{title}</strong>
                <p className='price'>{price}</p>
            </div>
        </div>
    )
}

export default Card