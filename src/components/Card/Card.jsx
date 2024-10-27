import React from 'react'
import style from './Card.module.css'

function Card({product}) {
    return (
        <div className={style.card} key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    )
}

export default Card