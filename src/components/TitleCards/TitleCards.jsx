import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = () => {
  return (


      <div className="titlecards">
        <h2>
          Popular on k-Local Flix
        </h2>
        <div className="card_list">
          {cards_data.map((card, index)=>{

            return <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          })}
        </div>
      </div>
  )
}

export default TitleCards