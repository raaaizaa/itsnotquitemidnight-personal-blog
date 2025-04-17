import { motion } from 'framer-motion';

import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: Props) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <motion.button
        onClick={handlePrev}
        disabled={currentPage === 1}
        whileTap={{ scale: 0.95 }}>
        {`<`}
      </motion.button>

      {pageNumbers.map((page) => (
        <motion.button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? styles.activePage : ''}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          {page}
        </motion.button>
      ))}

      <motion.button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        whileTap={{ scale: 0.95 }}>
        {`>`}
      </motion.button>
    </div>
  );
}
