"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "bodylife-consent";
const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored) {
          setConsent(JSON.parse(stored));
        }
      } catch {
        /* ignore */
      }
      setIsHydrated(true);
    });
  }, []);

  const updateConsent = useCallback((nextConsent) => {
    const value = {
      necessary: true,
      analytics: !!nextConsent.analytics,
      marketing: !!nextConsent.marketing,
      timestamp: new Date().toISOString()
    };
    setConsent(value);
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, []);

  const acceptAll = useCallback(
    () => updateConsent({ analytics: true, marketing: true }),
    [updateConsent]
  );

  const rejectAll = useCallback(
    () => updateConsent({ analytics: false, marketing: false }),
    [updateConsent]
  );

  const value = {
    consent,
    isHydrated,
    hasDecision: consent !== null,
    analyticsEnabled: consent?.analytics === true,
    marketingEnabled: consent?.marketing === true,
    acceptAll,
    rejectAll,
    updateConsent
  };

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used inside <ConsentProvider>");
  }
  return ctx;
}
