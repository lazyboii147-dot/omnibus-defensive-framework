import { Request, Response } from "express";
import { TelemetryAuditorEngine } from "../core/telemetryAuditor.js";

export class AuditController {
    private auditor = new TelemetryAuditorEngine();

    public auditEndpoint = (req: Request, res: Response): void => {
        const { rawData } = req.body;
        const isValid = this.auditor.auditTelemetryStream(JSON.stringify(rawData));
        res.status(200).json({ success: true, valid: isValid });
    };

    public healthCheck = (_req: Request, res: Response): void => {
        res.status(200).json({ status: "ONLINE", timestamp: new Date().toISOString() });
    };
}
