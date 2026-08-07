import { Logger } from "../utils/logger.js";
import { TelemetryAuditorEngine } from "./telemetryAuditor.js";
import { SinkAnalyzer } from "./sinkAnalyzer.js";

export class AuditEngine {
    private telemetryAuditor = new TelemetryAuditorEngine();
    private sinkAnalyzer = new SinkAnalyzer();

    public runFullAudit(streamData: string, domElement: { tagName: string; innerHTML: string }): { telemetryValid: boolean; sinkSafe: boolean } {
        Logger.info("[*] Executing full manual audit run...");
        const telemetryValid = this.telemetryAuditor.auditTelemetryStream(streamData);
        const sinkSafe = !this.sinkAnalyzer.inspectDomSink(domElement);
        return { telemetryValid, sinkSafe };
    }
}
