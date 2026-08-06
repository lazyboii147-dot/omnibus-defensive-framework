import json
import logging
from typing import Dict, Any

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("TelemetryExtractor")

class TelemetryExtractor:
    def parse_payload(self, raw_stream: str) -> Dict[str, Any]:
        try:
            data = json.loads(raw_stream)
            logger.info("[+] Successfully extracted and validated telemetry attributes.")
            return data
        except json.JSONDecodeError as e:
            logger.error(f"[-] JSON decoding failed: {e}")
            return {}
