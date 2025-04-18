'use client';

import { useState } from 'react';
import { FormDataProps } from '@/types/formData';
import postMessage from '@/services/postMessage';
import { getCurrentDate } from '@/utils/date-utils';
import { motion } from 'framer-motion';

import styles from './MessageForm.module.css';

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
          message: 'Failed to send message, please try again later.',
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
    <div className={styles.container}>
      <div>
        <p className={styles.label}>Send me a message</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <p className={styles.inputLabel}>Name: </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.nameInput}
          />
          <p className={styles.inputLabel}>Email: </p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Optional—for me to reply"
            className={styles.nameInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputLabel}>Message: </p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.messageInput}
          />
        </div>
        {(status || isLoading) && (
          <p
            className={status.styles === 'basic' ? styles.basic : styles.error}>
            {isLoading ? `Loading...` : status.message}
          </p>
        )}
        <motion.button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
          whileHover={{
            scale: 1.06,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.2
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
          <p className={styles.submitText}>Submit</p>
        </motion.button>
      </form>
    </div>
  );
}
