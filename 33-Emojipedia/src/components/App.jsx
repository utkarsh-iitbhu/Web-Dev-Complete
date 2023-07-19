import React from "react";
import emojipedia from "../emojipedia"
import Card from "./Card"

function createCard(card) {
  return (
    <Card 
      key={card.id}
      id = {card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

{/* Like map we have filter, find, fatarrow */}

      <dl className="dictionary">
        
      {emojipedia.map(card => 
        <Card 
      key={card.id}
      id = {card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
        />
      )}
      

      </dl>
    </div>
  );
}

export default App;
