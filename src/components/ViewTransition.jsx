import { AnimatePresence, motion } from 'motion/react';

export default function ViewTransition({ viewKey, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={viewKey}
        initial={{ opacity: 0, y: -16, scaleY: 0.96 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        exit={{ opacity: 0, y: 12, scaleY: 0.98 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top center' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
