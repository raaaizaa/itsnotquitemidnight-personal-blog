import React from 'react';

export default function LoadingSpotifyCard() {
  return (
    <div className='flex flex-col gap-2'>
      {/* thanks claude for migrating this to tailwind */}
      <style>{`
        .skeleton-pulse {
          background-color: #e0e0e0;
          background-image: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
          background-size: 400px 100%;
          animation: skeleton-loading 1.5s infinite linear;
        }
        @keyframes skeleton-loading {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
      `}</style>
      <div className='skeleton-pulse w-full md:w-64 md:h-64 h-64 bg-[#c9c9c9]' />
      <div className='flex flex-col gap-4'>
        <div className='skeleton-pulse h-7 w-60 m-0' />
        <div className='skeleton-pulse h-5 w-48 m-0' />
      </div>
    </div>
  );
}
