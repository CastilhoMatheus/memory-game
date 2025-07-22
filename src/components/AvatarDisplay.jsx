import React from 'react';

export default function AvatarDisplay({
  avatar,
  alt,
  selected,
  onClick,
  size,
}) {
  const sz = size + 16;
  return (
    <img
      src={`src/assets/${avatar}.png`}
      alt={alt || ''}
      className={
        `w-${sz} h-${sz} rounded-full cursor-pointer ` +
        (selected ? 'ring-4 ring-sky-500' : 'ring-2 ring-transparent')
      }
      onClick={onClick}
    />
  );
}
