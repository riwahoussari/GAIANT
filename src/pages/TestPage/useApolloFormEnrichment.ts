import { useEffect } from "react";


  
const TIMEOUT_MS = 5000;
const APP_ID = "69b817e3d73ac20019c7be9d";

export function useApolloFormEnrichment() {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let script: HTMLScriptElement | null = null;

    const cleanup = () => {
      clearTimeout(timeoutId);
      // Reveal any hidden forms
    };

    timeoutId = setTimeout(() => {
      console.warn("[Apollo] Form enrichment timeout after 5s");
      cleanup();
    }, TIMEOUT_MS);

    const nocache = Math.random().toString(36).substring(7);
    script = document.createElement("script");
    script.src = `https://assets.apollo.io/js/apollo-inbound.js?nocache=${nocache}`;
    script.defer = true;

    script.onerror = () => {
      console.error("[Apollo] Failed to load form enrichment script");
      cleanup();
    };

    script.onload = () => {
      try {
        window.ApolloInbound?.formEnrichment.init({
          appId: APP_ID,
          onReady: cleanup,
          onError: (err) => {
            console.error("[Apollo] Form enrichment init error:", err);
            cleanup();
          },
        });
      } catch (err) {
        console.error("[Apollo] Error initializing form enrichment:", err);
        cleanup();
      }
    };

    document.head.appendChild(script);

    return () => {
      cleanup();
      script && document.head.removeChild(script);
    };
  }, []);
}
