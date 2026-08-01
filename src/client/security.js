/**
 * @module StateSecurity
 * @description Prevents prototype pollution and enforces zero-prototype configurations.
 */

export function secureDeepMerge(target, source) {
  if (!source || typeof source !== 'object' || Array.isArray(source)) return source;
  if (!target || typeof target !== 'object' || Array.isArray(target)) target = Object.create(null);

  for (const [key, value] of Object.entries(source)) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;

    target[key] =
      value && typeof value === 'object' && !Array.isArray(value)
        ? secureDeepMerge(target[key] || Object.create(null), value)
        : value;
  }
  return target;
}

export function createImmutableConfig(raw) {
  const registry = Object.create(null);

  for (const [key, value] of Object.entries(raw)) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;

    registry[key] =
      value && typeof value === 'object' && !Array.isArray(value)
        ? createImmutableConfig(value)
        : value;
  }

  return Object.freeze(registry);
}
