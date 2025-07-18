import React from 'react';
import AvatarDisplay from './AvatarDisplay';

export default function AvatarSelector({ options, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {options.map((opt) => (
        <AvatarDisplay
          key={opt.id}
          src={opt.src}
          alt={opt.id}
          selected={opt.id === selectedId}
          onClick={() => onSelect(opt.id)}
        />
      ))}
    </div>
  );
}
