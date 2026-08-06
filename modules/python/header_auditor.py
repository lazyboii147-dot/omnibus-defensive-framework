class HeaderAuditor:
    REQUIRED_HEADERS = ["Content-Security-Policy", "X-Frame-Options", "X-Content-Type-Options"]

    def audit_headers(self, headers: dict) -> dict:
        results = {}
        for h in self.REQUIRED_HEADERS:
            results[h] = h in headers
        return results
