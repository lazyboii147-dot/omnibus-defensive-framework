/**
 * @module TelemetryLayer
 * @description Validates metrics payloads and handles safe console logging.
 */

const TelemetrySchemas = {
  page_view: {
    required: ['path'],
    maxLengths: { path: 2048, campaignId: 128 }
  }
};

export function safeLog(level, message, context = {}) {
  const validLevels = ['log', 'info', 'warn', 'error', 'debug'];
  const safeLevel = validLevels.includes(level) ? level : 'log';
  
  const msg = String(message).replace(/[\r\n\t]/g, ' ');
  const ctx = {};

  for (const [k, v] of Object.entries(context)) {
    ctx[k] = typeof v === 'string'
      ? v.replace(/[\r\n\t]/g, ' ').slice(0, 1024)
      : v;
  }

  console[safeLevel](`[OMNIBUS] ${msg}`, ctx);
}

export function safeTrack(type, data, transportCallback) {
  const schema = TelemetrySchemas[type];
  if (!schema) return;

  const sanitized = {};
  for (const [k, v] of Object.entries(data)) {
    sanitized[k] = typeof v === 'string'
      ? v.replace(/[\r\n\t]/g, ' ').slice(0, 4096)
      : v;
  }

  for (const field of schema.required) {
    if (!sanitized[field]) return;
  }

  for (const [key, max] of Object.entries(schema.maxLengths)) {
    if (sanitized[key]) sanitized[key] = sanitized[key].slice(0, max);
  }

  transportCallback({ type, data: sanitized });
}
