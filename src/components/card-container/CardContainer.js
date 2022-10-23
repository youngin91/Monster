import React from 'react'
import Card from '../card/Card'
import "./CardContainer.css"

export default function CardContainer(props) {
  return (
    <div className="card-container">
      {props.data.map((item) => (
        <Card 
        img={item.id}
        key={item.id}
        name={item.name}
        email={item.email}
      />
      ))}
     
    </div>
  )
}
