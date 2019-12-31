import React from 'react';
import Card from './Card.js'
import App from './App.js';

function List(header, cards) {

  let cardsArray = cards.map((item, i) => {
    return (
      <Card key={i} title={item.title} content={item.content} />
  )
  })

  return (
    <section className="List">
        <header className="List-cards">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
          {cardsArray}
        </div>
    </section>
  );
}

export default List;