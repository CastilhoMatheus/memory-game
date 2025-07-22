import React from 'react';

export default function AvatarDisplay({ src, alt, selected, onClick }) {
  return (
    <img
      src={src}
      alt={alt || ''}
      className={
        `w-16 h-16 rounded-full cursor-pointer ` +
        (selected ? 'ring-4 ring-sky-500' : 'ring-2 ring-transparent')
      }
      onClick={onClick}
    />
  );
}
