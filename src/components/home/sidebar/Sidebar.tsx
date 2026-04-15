import NowPlaying from '../now-playing/NowPlaying';
import MessageForm from '../message-form/MessageForm';

export default function Sidebar() {
  return (
    <div className='flex flex-col w-full md:max-w-[400px] p-8 gap-8 max-w-full md:border-l-[1px] md:border-[rgb(242,242,242)]'>
      <NowPlaying />
      <MessageForm />
    </div>
  );
}
