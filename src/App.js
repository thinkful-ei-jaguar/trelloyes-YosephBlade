import React from 'react';
import store from './store.js';
import List from './List.js';

//Passing store object in as store prop

function App(store) {
  
  let listArray = store.lists.map((item, i) => {
    return (
      <List key={i} header={item.header} cards={} />
    );
  })
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        
      </div>
    </main>
  );
}



export default App;
