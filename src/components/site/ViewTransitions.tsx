import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

type DocWithVT = Document & {
  startViewTransition?: (cb: () => void | Promise<void>) => unknown;
};

/**
 * Enables the View Transitions API for route changes when supported.
 * Falls back silently in browsers without support.
 */
export function ViewTransitions() {
  const router = useRouter();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const doc = document as DocWithVT;
    if (!doc.startViewTransition) return;

    const unsub = router.subscribe("onBeforeNavigate", () => {
      doc.startViewTransition?.(() => Promise.resolve());
    });
    return () => unsub();
  }, [router]);

  return null;
}
