'use client';

import { useState } from 'react';
import { FormDataProps } from '@/types/formData';
import postMessage from '@/services/postMessage';
import { getCurrentDate } from '@/utils/date-utils';
import { motion } from 'framer-motion';

export default function MessageForm() {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    message: '',
    date: '',
  });
  const [status, setStatus] = useState({
    message: '',
    styles: 'basic',
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length === 0) {
      setStatus({ message: 'Name cannot be empty.', styles: 'error' });
      return;
    }

    if (formData.message.trim().length === 0) {
      setStatus({ message: 'Message cannot be empty.', styles: 'error' });
      return;
    }

    const updatedFormData = { ...formData, date: getCurrentDate() };

    try {
      setLoading(true);
      const response = await postMessage(updatedFormData);

      if (response) {
        setFormData({ name: '', email: '', message: '', date: '' });
        setStatus({ message: 'Message sent.', styles: 'basic' });
        setLoading(false);
      } else {
        console.error('Failed to send the message.');
        setStatus({
          message:
            'Failed to send message, please try again later. Guess he’s too lazy to pay for Google One’s monthly subscription.',
          styles: 'error',
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setStatus({
        message: 'An unexpected error occured, please try again later.',
        styles: 'error',
      });
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col w-full max-w-[384px] md:max-w-none md:w-auto gap-6 max-sm:gap-6'>
      <div>
        <p className='font-bold text-2xl md:text-4xl m-0 max-sm:text-3xl'>Send me a message</p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <p className='m-0 font-normal'>Name: </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='rounded px-1.5 text-base font-light border border-0.5 h-6 pl-1.5'
          />
          <p className='m-0 font-normal'>Email: </p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Optional"
            className='rounded px-1.5 text-base font-light border border-0.5 h-6 pl-1.5'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='m-0 font-normal'>Message: </p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='rounded px-1.5 text-base font-light border border-0.5 h-24 pl-1.5'
          />
        </div>
        {(status || isLoading) && (
          <p
            className={status.styles === 'basic' ? 'm-0 font-light text-sm text-[#6b6b6b]' : 'm-0 font-light text-sm text-red-600'}>
            {isLoading ? `Loading...` : status.message}
          </p>
        )}
        <motion.button
          type="submit"
          className='font-bold text-sm py-2.5 border-none rounded-full bg-black text-white text-center disabled:opacity-50'
          disabled={isLoading}
          whileHover={{
            scale: 1.06,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.2,
            },
          }}
          whileTap={{
            scale: 0.97,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
            },
          }}>
          <p className='m-0'>Submit</p>
        </motion.button>
      </form>
    </div>
  );
}
