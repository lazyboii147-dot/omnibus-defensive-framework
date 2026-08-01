<?php
/**
 * @module ServerIngestDefense
 * @description Enforces strict JSON decoding limits and newline scrubbing on server ingest.
 */

function decode_safe_json_to_array(string $json): array {
    $data = json_decode($json, true, 512, JSON_THROW_ON_ERROR);

    if (!is_array($data)) {
        throw new InvalidArgumentException('Invalid JSON payload structure');
    }

    array_walk_recursive($data, function (&$value) {
        if (is_string($value)) {
            $value = preg_replace('/[\r\n\t]/', ' ', $value);
        }
    });

    return $data;
}
?>
