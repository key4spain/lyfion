"use client";

import { useEffect } from "react";
import {
  analyticsAllowed,
  COOKIE_CONSENT_UPDATED_EVENT,
} from "./_cookie-prefs";

const METRICOOL_SCRIPT_SRC = "https://tracker.metricool.com/resources/be.js";
const METRICOOL_HASH = "26535b4d71a0961caaba49a0c55c5f9";
const METRICOOL_SCRIPT_ID = "lyfion-metricool-tracker";
const ALLOWED_HOSTS = ["lyfion.digital", "www.lyfion.digital"];

declare global {
  interface Window {
    beTracker?: {
      t: (config: { hash: string }) => void;
    };
  }
}

function isProductionHostname(): boolean {
  return ALLOWED_HOSTS.includes(window.location.hostname);
}

function metricoolScriptPresent(): boolean {
  return Boolean(
    document.querySelector(`script[src="${METRICOOL_SCRIPT_SRC}"]`)
  );
}

function initMetricoolTracker() {
  try {
    window.beTracker?.t({ hash: METRICOOL_HASH });
  } catch {
    // Ignore tracker init failures.
  }
}

function loadMetricoolScript() {
  if (metricoolScriptPresent()) {
    initMetricoolTracker();
    return;
  }

  const script = document.createElement("script");
  script.id = METRICOOL_SCRIPT_ID;
  script.type = "text/javascript";
  script.src = METRICOOL_SCRIPT_SRC;
  script.onload = initMetricoolTracker;
  script.onerror = () => {
    // Ignore script load failures.
  };
  document.head.appendChild(script);
}

function removeMetricoolScript() {
  document
    .querySelectorAll(`script[src="${METRICOOL_SCRIPT_SRC}"]`)
    .forEach((node) => node.remove());
}

export function syncMetricoolFromPrefs() {
  if (!isProductionHostname()) {
    removeMetricoolScript();
    return;
  }

  if (analyticsAllowed()) {
    loadMetricoolScript();
    return;
  }
  removeMetricoolScript();
}

export default function MetricoolTracker() {
  useEffect(() => {
    syncMetricoolFromPrefs();

    const onConsentUpdated = () => {
      syncMetricoolFromPrefs();
    };

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    };
  }, []);

  return null;
}

export { METRICOOL_SCRIPT_SRC, METRICOOL_HASH };
