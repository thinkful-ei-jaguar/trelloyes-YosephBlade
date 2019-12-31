import React from 'react';
import Card from './Card.js'
import './List.css';

function List(props) {

  let cardsArray = props.cards.map((item) => {
    return (
      <Card key={item.id} title={item.title} content={item.content} />
  )
  })

  return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {cardsArray}
        </div>
    </section>
  );
}

export default List;