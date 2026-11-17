import React from 'react';
import Navigation from '../navigation/Navigation';
import { SOCIAL_LIST } from '@/constants/social-list';
import Image from 'next/image';

export default function Contact({ ref, onPrevious }) {
  return (
    <section
      ref={ref}
      className="relative flex flex-col h-dvh shrink-0 w-full snap-start items-center justify-center mx-6 md:mx-0 gap-6">
      <p className="font-road-rage text-[#a83dc5] text-[72px] text-center lg:text-[106px] posterize-text leading-14">
        Other social media
      </p>
      <div className="grid grid-cols-4 items-center justify-center gap-4 posterize-text-2">
        {SOCIAL_LIST.map((social, key) => (
          <a
            href={social.url}
            target="_blank"
            key={key}
            className="hover:scale-110">
            <Image src={social.icon} width={36} height={36} alt={social.name} />
          </a>
        ))}
      </div>
      <Navigation onPrevious={onPrevious} variant="bottom-section" />
      <div className='absolute bottom-8 flex items-center justify-center'>
        <p className='font-road-rage text-[#a83dc5] text-[24px]'> ©itsnotquitemidnight {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
