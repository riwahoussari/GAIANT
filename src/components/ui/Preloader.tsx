import { AnimatePresence, motion } from "motion/react";
import preloaderVideo from "../../assets/animations/preloader.mp4";
import { useLockBodyScroll } from "../../lib/useLockBodyScroll";

export default function Preloader({onFinish}: {onFinish: () => void}) {
  // lock scroll while preloader is visible
  useLockBodyScroll(true);

  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
        >
          <video
            autoPlay
            muted
            className="h-full max-h-dvh w-full object-contain"
            src={preloaderVideo}
            onEnded={onFinish}
          />
        </motion.div>
    </AnimatePresence>
  );
}
