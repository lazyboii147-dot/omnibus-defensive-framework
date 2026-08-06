import { Logger } from "../utils/logger.js";

export class EventHandler {
    public handleTelemetryEvent(eventData: any): void {
        Logger.info(`[*] Processing telemetry event type: ${eventData?.type || "unknown"}`);
    }
}
