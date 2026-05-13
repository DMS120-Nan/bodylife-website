"use client";

import Link from "next/link";
import { useState } from "react";
import { useConsent } from "./ConsentProvider";

export function CookieConsent() {
  const { hasDecision, isHydrated, acceptAll, rejectAll, updateConsent } = useConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  if (!isHydrated || hasDecision) return null;

  function handleSave() {
    updateConsent({ analytics, marketing });
  }

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="cookie-consent-inner">
        {showCustomize ? (
          <div className="cookie-consent-customize">
            <p className="eyebrow">Cookie preferences</p>
            <h2 id="cookie-consent-title">Pick what you want to allow.</h2>
            <p className="cookie-consent-lead">
              We use a short list of cookies to keep the site working and to
              learn what is helpful. Full breakdown lives in our{" "}
              <Link href="/us/privacy">Privacy Policy</Link>.
            </p>
            <ul className="cookie-consent-options">
              <li>
                <label>
                  <input checked disabled readOnly type="checkbox" />
                  <span>
                    <strong>Necessary</strong>
                    <span>Cart, checkout, region, and language. Always on.</span>
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    type="checkbox"
                  />
                  <span>
                    <strong>Analytics</strong>
                    <span>Anonymous usage data so we can fix what is not working.</span>
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    checked={marketing}
                    onChange={(event) => setMarketing(event.target.checked)}
                    type="checkbox"
                  />
                  <span>
                    <strong>Marketing</strong>
                    <span>Lets us reach more people who would use this routine.</span>
                  </span>
                </label>
              </li>
            </ul>
            <div className="cookie-consent-actions">
              <button className="primary-button" onClick={handleSave} type="button">
                Save preferences
              </button>
              <button className="cookie-consent-secondary" onClick={() => setShowCustomize(false)} type="button">
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="cookie-consent-default">
            <div>
              <p className="eyebrow">Cookies</p>
              <p className="cookie-consent-lead" id="cookie-consent-title">
                We use cookies to keep your cart, remember your region, and
                see what works. Details in our{" "}
                <Link href="/us/privacy">Privacy Policy</Link>.
              </p>
            </div>
            <div className="cookie-consent-actions">
              <button className="primary-button" onClick={acceptAll} type="button">
                Accept all
              </button>
              <button className="cookie-consent-ghost" onClick={rejectAll} type="button">
                Reject
              </button>
              <button className="cookie-consent-secondary" onClick={() => setShowCustomize(true)} type="button">
                Customize
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
