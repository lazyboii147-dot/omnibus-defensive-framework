/**
 * @module SanitizationLayer
 * @description Provides strict query parameter filtering and outbound fetch boundary enforcement.
 */

export function getSanitizedQueryParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(paramName);
  if (!raw) return null;

  return raw.replace(/[^a-zA-Z0-9_\-.]/g, '');
}

export async function safeFetch(url, options = {}, allowedOrigins = [window.location.origin]) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url, window.location.origin);
  } catch {
    throw new Error('Malformed URL provided to safeFetch');
  }

  if (!allowedOrigins.includes(parsedUrl.origin)) {
    throw new Error('Outbound origin rejected by security policy');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(parsedUrl.toString(), { ...options, signal: controller.signal });
    clearTimeout(timeout);
    return res;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}
