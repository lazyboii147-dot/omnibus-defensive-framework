import { Request, Response, NextFunction } from "express";

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function rateLimiter(req: Request, res: Response, next: NextFunction): void {
    const ip = req.ip || "unknown";
    const now = Date.now();
    const windowMs = 60000;
    const maxRequests = 100;

    let record = requestCounts.get(ip);
    if (!record || now > record.resetTime) {
        record = { count: 1, resetTime: now + windowMs };
        requestCounts.set(ip, record);
    } else {
        record.count++;
        if (record.count > maxRequests) {
            res.status(429).json({ error: "Rate limit exceeded" });
            return;
        }
    }
    next();
}
