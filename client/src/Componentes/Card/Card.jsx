import React from 'react'
import {Link} from 'react-router-dom'
import "./card.css"

const Card = ({id, name, image, continent}) => {

  return (
      <div className='car'>
          <div className='card-ca'>

              <h2 className='title-ca'>{name}</h2>
              <Link to={`/detail/${id}`}>
                  <img src={image} alt={name} className='img-ca' />
              </Link>
              <h3>{continent}</h3>
          </div>
      </div>
  )
}

export default Card;