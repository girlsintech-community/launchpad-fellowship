import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Enables the View Transitions API for route changes when supported.
 * Falls back silently in browsers without support.
 */
export function ViewTransitions() {
  const router = useRouter();
  useEffect(() => {
    // @ts-expect-error - startViewTransition is not yet typed in lib.dom
    if (typeof document === "undefined" || !document.startViewTransition) return;

    const unsub = router.subscribe("onBeforeNavigate", () => {
      // @ts-expect-error - non-standard, supported in Chromium
      document.startViewTransition?.(() => Promise.resolve());
    });
    return () => unsub();
  }, [router]);

  return null;
}
