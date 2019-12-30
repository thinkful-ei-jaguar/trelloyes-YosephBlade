import React from 'react';
import {store} from './store.js';
import List from './List.js';

//Passing store object in as store prop

function App(store) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {store.lists[0]}
      </div>
    </main>
  );
}



export default App;
