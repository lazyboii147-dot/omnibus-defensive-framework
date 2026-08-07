import { Request, Response, NextFunction } from "express";
import { Logger } from "../utils/logger.js";

export function globalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    Logger.error(`[-] Unhandled exception: ${err.message}`);
    res.status(500).json({ success: false, error: "Internal server error" });
}
