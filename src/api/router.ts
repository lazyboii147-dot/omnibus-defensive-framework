import { Router } from "express";
import { AuditController } from "./controller.js";

export const router = Router();
const controller = new AuditController();

router.post("/audit", controller.auditEndpoint);
router.get("/health", controller.healthCheck);
