import React from 'react';

export default function LoadingPostCard() {
  return (
    <div className='flex flex-col'>
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
      <div className='border-t border-[rgb(242,242,242)] border-0.5' />
      <div className='py-7'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col text-black gap-3 w-full'>
            <p className='skeleton-pulse h-8 w-52' />
            <div className='flex flex-col gap-2'>
              <p className='skeleton-pulse h-4 w-4/5' />
              <p className='skeleton-pulse h-4 w-32 mt-2' />
            </div>
          </div>
          <div className='w-40 h-28 max-md:w-32 max-md:h-20 max-sm:w-24 max-sm:h-16 overflow-hidden'>
            <div className='skeleton-pulse w-40 h-28 max-md:w-32 max-md:h-20 max-sm:w-24 max-sm:h-16' />
          </div>
        </div>
      </div>
    </div>
  );
}
