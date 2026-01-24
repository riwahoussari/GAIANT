import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
  useLayoutEffect,
} from "react";

interface PreloaderContextType {
  isLoading: boolean;
  hidePreloader: () => void;
  showPreloader: () => void;
  hasPlayedOnce: boolean;
  setHasPlayedOnce: (played: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | null>(null);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const hidePreloader = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showPreloader = useCallback(() => {
    setIsLoading(true);
  }, []);

  return (
    <PreloaderContext.Provider
      value={{ isLoading, hidePreloader, showPreloader, hasPlayedOnce, setHasPlayedOnce }}
    >
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
}

/**
 * Hook for hero components with images.
 * Returns an onLoad handler to attach to the hero image.
 * The preloader will hide once the image is fully loaded.
 */
export function useHeroImageLoad() {
  const { hidePreloader, showPreloader } = usePreloader();

  useLayoutEffect(() => {
    showPreloader();
  }, [showPreloader]);

  const handleImageLoad = useCallback(() => {
    hidePreloader();
  }, [hidePreloader]);

  return { onImageLoad: handleImageLoad };
}

/**
 * Hook for hero components without images.
 * Immediately hides the preloader when the component mounts.
 */
export function useHeroNoImage() {
  const { hidePreloader, showPreloader } = usePreloader();

  useEffect(() => {
    showPreloader();

    const timer = requestAnimationFrame(() => {
      hidePreloader();
    });
    return () => cancelAnimationFrame(timer);
  }, [hidePreloader, showPreloader]);
}
