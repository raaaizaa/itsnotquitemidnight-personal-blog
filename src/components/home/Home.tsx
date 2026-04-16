import Clarity from '@microsoft/clarity';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { getHeadline } from '@/services/getPost';

export default async function Home() {
  const posts = await getHeadline();
  Clarity.init(process.env.NEXT_PUBLIC_MICROSOFT_CLARITY!);

  return (
    <div className="w-full font-inter max-w-[640px] md:max-w-[900px] lg:max-w-[1100px] mx-auto flex flex-col md:flex-row px-4">
      <Content posts={posts} />
      <Sidebar />
    </div>
  );
}
