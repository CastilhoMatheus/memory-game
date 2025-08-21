// Board.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import countries from 'flag-icons/country.json';

// Helper to shuffle an array
function shuffleArray(arr) {
  return arr
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

export default function Board({ onMiss, onMatch, onAllMatched }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [totalPairs, setTotalPairs] = useState(0);

  useEffect(() => {
    // Shuffle all countries and pick first 27
    const selected = shuffleArray(countries).slice(0, 20);
    setTotalPairs(selected.length);
    // Duplicate pairs and shuffle
    const paired = shuffleArray([...selected, ...selected]);
    // Map to card objects containing only needed fields
    const cardObjs = paired.map((country, idx) => ({
      code: country.code,
      name: country.name,
      key: idx,
    }));
    setCards(cardObjs);
  }, []);

  const handleClick = (index) => {
    if (matched.has(index) || flipped.includes(index) || flipped.length === 2) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      let [i, j] = newFlipped;

      if (cards[i].code === cards[j].code) {
        const newMatched = new Set(matched).add(i).add(j);
        setMatched(newMatched);
        setFlipped([]);
        onMatch();
        if (newMatched.size === totalPairs * 2) {
          onAllMatched(newMatched.size / 2, totalPairs);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          onMiss();
        }, 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-8 gap-3 justify-center">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          flagCode={card.code}
          name={card.name}
          isFlipped={flipped.includes(idx) || matched.has(idx)}
          isMatched={matched.has(idx)}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}
