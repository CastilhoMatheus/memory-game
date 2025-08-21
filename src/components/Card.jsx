import React from 'react';

export default function Card({
  flagCode,
  name,
  isFlipped,
  isMatched,
  onClick,
}) {
  const handleClick = () => {
    if (!isMatched && !isFlipped && onClick) onClick();
  };

  return (
    <div
      className={`relative w-30 h-39 [perspective:1000px] ${
        isMatched ? 'pointer-events-none opacity-50' : 'cursor-pointer'
      }`}
      onClick={handleClick}
    >
      <div
        className={
          `absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ` +
          (isFlipped
            ? '[transform:rotateY(0deg)]'
            : '[transform:rotateY(180deg)]')
        }
      >
        {/* Front Face */}
        <div className="p-1 absolute inset-0 [backface-visibility:hidden] bg-white border-3 border-sky-500 rounded-lg shadow flex items-center justify-center font-bold flex flex-col">
          <span className={`fi fi-${flagCode} ring text-5xl`}></span>
          <div className="mt-5 text-xs font-semibold text-gray-800 break-keep font-stretch-condensed text-center">
            {name}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-sky-500 border-3 rounded-lg shadow flex items-center justify-center text-white text-4xl font-bold [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
