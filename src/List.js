import React from 'react';

import App from './App.js';

function List(header, cards) {

  return (
    <section className="List">
        <header className="List-cards">
          <h2>First list</h2>
        </header>
        <div className="List-cards">
          {cards}
        </div>
    </section>
  );
}

export default List;