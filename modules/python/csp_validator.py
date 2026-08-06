class CSPValidator:
    def validate_policy(self, csp_header: str) -> bool:
        if not csp_header:
            return False
        has_unsafe_inline = "unsafe-inline" in csp_header
        has_unsafe_eval = "unsafe-eval" in csp_header
        return not (has_unsafe_inline or has_unsafe_eval)
