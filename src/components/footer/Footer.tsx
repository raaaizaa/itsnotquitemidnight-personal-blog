import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex flex-col p-0 m-0 bg-black justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-16 gap-5'>
        <p className='font-light text-white text-sm text-center'>
          ©itsnotquitemidnight {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/raaaizaa/raizatriestocode-2025"
          target="_blank"
          className='transition-all transition-100 ease-in-out hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]'>
          <Image
            src="../github-mark-white.svg"
            width={24}
            height={24}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
}
