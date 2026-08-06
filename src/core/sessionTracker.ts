export class SessionTracker {
    private sessions = new Map<string, number>();

    public registerSession(sessionId: string): void {
        this.sessions.set(sessionId, Date.now());
    }

    public isSessionActive(sessionId: string): boolean {
        return this.sessions.has(sessionId);
    }
}
