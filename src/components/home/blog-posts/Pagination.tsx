import { motion } from 'framer-motion';

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
    <div className="flex justify-center gap-2 mt-4">
      <motion.button
        onClick={handlePrev}
        disabled={currentPage === 1}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        className="px-3 py-2 border-none bg-[#f0f0f0] cursor-pointer rounded-lg disabled:bg-[#dcdcdc] disabled:cursor-not-allowed">
        {`<`}
      </motion.button>

      {pageNumbers.map((page) => (
        <motion.button
          key={page}
          onClick={() => handlePageChange(page)}
          className={
            currentPage === page
              ? 'px-3 py-2 border-none bg-black text-white font-inter-bold rounded-lg cursor-pointer'
              : 'px-3 py-2 border-none bg-[#f0f0f0] cursor-pointer rounded-lg'
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}>
          {page}
        </motion.button>
      ))}

      <motion.button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        className="px-3 py-2 border-none bg-[#f0f0f0] cursor-pointer rounded-lg disabled:bg-[#dcdcdc] disabled:cursor-not-allowed">
        {`>`}
      </motion.button>
    </div>
  );
}
