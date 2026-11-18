export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <p className="font-hit-me-punk text-[72px] text-[#A65A50] ">
        404 not found
      </p>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="text-[#E5DDD2] text-[28px] font-road-rage hover:underline decoration-1 underline-offset-2">
        Go back to home
      </a>
    </div>
  );
}
