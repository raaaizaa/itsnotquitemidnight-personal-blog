import { SOCIAL_LIST } from '@/constants/social-list';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex flex-col p-0 m-0 bg-black justify-center items-center">
      <div className="flex flex-col justify-center items-center p-16 gap-5">
        <p className="font-inter-light text-white text-sm text-center">
          ©itsnotquitemidnight {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 items-center">
          {SOCIAL_LIST.map((social, key) => (
            <a
              href={social.url}
              target="_blank"
              key={key}
              className="transition-all transition-100 ease-in-out hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
              <Image
                src={social.icon}
                width={24}
                height={24}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
