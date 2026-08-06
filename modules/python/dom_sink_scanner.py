import re
from typing import List

class DomSinkScanner:
    SINK_PATTERNS = [r"eval\(", r"document\.write\(", r"innerHTML\s*=", r"outerHTML\s*="]

    def scan_content(self, content: str) -> List[str]:
        found = []
        for pattern in self.SINK_PATTERNS:
            if re.search(pattern, content, re.IGNORECASE):
                found.append(pattern)
        return found
