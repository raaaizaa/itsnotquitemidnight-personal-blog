function TopBorder({ title }: { title: string }) {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  return (
    <div className="w-full absolute top-[80px] flex justify-center">
      <div className="flex-col flex gap-4 w-[90%]">
        <div className="flex justify-between">
          <p className="text-[#E5DDD2] font-bold">{title}</p>
          <p className="text-[#E5DDD2] font-bold">{currentDate}</p>
        </div>
        <hr className="border-[#E5DDD2] border-t-[0.5px]" />
      </div>
    </div>
  );
}

function BottomBorder({ index }: { index: string }) {
  return (
    <div className="w-full absolute bottom-[80px] flex justify-center">
      <div className="flex-col flex gap-4 w-[90%]">
        <hr className="border-[#E5DDD2] border-t-[0.5px]" />
        <div className="flex justify-end">
          <p className="text-[#E5DDD2] font-bold">{index}</p>
        </div>
      </div>
    </div>
  );
}

export function Border({ index, title }: {index: string, title: string}) {
  return (
    <>
      <TopBorder title={title} />
      <BottomBorder index={index} />
    </>
  );
}
