import { Logger } from "../utils/logger.js";
import { AttributeParser } from "../handlers/attributeParser.js";

export class TelemetryAuditorEngine {
    private parser = new AttributeParser();

    public auditTelemetryStream(rawData: string): boolean {
        try {
            const parsed = this.parser.parseDataAttribute(rawData);
            return parsed !== null && typeof parsed === "object";
        } catch (error: any) {
            Logger.error(`[-] Telemetry audit failure: ${error.message}`);
            return false;
        }
    }
}
