import { TelemetryAuditorEngine } from "../src/core/telemetryAuditor.js";

describe("TelemetryAuditorEngine", () => {
    it("should validate correct JSON telemetry stream", () => {
        const engine = new TelemetryAuditorEngine();
        const validJson = '{"c_n":"test","ecn":"1","pa":"none","compnm":"main"}';
        expect(engine.auditTelemetryStream(validJson)).toBe(true);
    });

    it("should fail on invalid telemetry stream", () => {
        const engine = new TelemetryAuditorEngine();
        expect(engine.auditTelemetryStream("invalid-stream")).toBe(false);
    });
});
