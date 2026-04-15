import Link from 'next/link';
import DynamicIsland from './dynamic-island/DynamicIsland';

export default function Navbar() {
  return (
      <div className='flex px-9 h-12.5 max-w-[640px] md:max-w-[900px] lg:max-w-[1100px] items-center justify-between bg-white border-b border-[rgb(242,242,242)] border-0.5 sticky m-auto w-full md:max-w-auto md:w-auto left-0 top-0 right-0 z-10 max-sm:px-6 max-sm:h-12'>
        <Link href="/" className='font-[HitMePunk] text-4xl m-0 no-underline text-black font-smooth md:text-4xl max-sm:text-3xl'>
          itsnotquitemidnight
        </Link>
        <DynamicIsland />
      </div>
  );
}
