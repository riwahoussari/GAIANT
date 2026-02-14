import { AnimatePresence, motion } from "motion/react";
import preloaderVideo from "../../assets/animations/preloader.mp4";
import { useLockBodyScroll } from "../../lib/useLockBodyScroll";
import { useState } from "react";

export default function Preloader() {
  // lock scroll while preloader is visible
  useLockBodyScroll(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!hasPlayed && (
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
            playsInline
            autoPlay
            muted
            preload="auto"
            className="h-full max-h-dvh w-full bg-black object-contain"
            src={preloaderVideo}
            onEnded={() => setHasPlayed(true)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
