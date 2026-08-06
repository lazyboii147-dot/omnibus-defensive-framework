import time

class SessionAnalyzer:
    def __init__(self, timeout_seconds: int = 1800):
        self.timeout = timeout_seconds
        self.sessions = {}

    def update_session(self, token: str) -> None:
        self.sessions[token] = time.time()

    def is_valid(self, token: str) -> bool:
        if token not in self.sessions:
            return False
        return (time.time() - self.sessions[token]) < self.timeout
