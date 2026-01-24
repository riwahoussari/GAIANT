import { AnimatePresence, motion } from "motion/react";
import { usePreloader } from "../../lib/PreloaderContext";
import preloaderVideo from "../../assets/animations/preloader.mp4";
import { useEffect, useRef } from "react";
import { useLockBodyScroll } from "../../lib/useLockBodyScroll";

export default function Preloader() {
  const { isLoading, hasPlayedOnce, setHasPlayedOnce } = usePreloader();

  // video looping control
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setHasPlayedOnce(true);
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 500); // 0.5s delay between loops
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  // lock scroll while preloader is visible
  useLockBodyScroll(isLoading || !hasPlayedOnce);

  return (
    <AnimatePresence>
      {(isLoading || !hasPlayedOnce) && (
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
            ref={videoRef}
            autoPlay
            muted
            className="h-full max-h-dvh w-full object-contain"
            src={preloaderVideo}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
