import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center m-auto gap-5 h-[calc(100vh-67px)] w-full">
      <p className="m-0 text-4xl text-center font-inter-bold max-sm:text-3xl">
        404 | Page Not Found
      </p>
      <div className="flex justify-center items-center">
        <Link href="/">
          <button className="font-normal text-base px-3 py-3 border-none rounded-xl bg-black text-white cursor-pointer w-80 text-center">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
