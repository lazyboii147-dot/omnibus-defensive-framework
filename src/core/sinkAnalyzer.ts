import { Logger } from "../utils/logger.js";

export class SinkAnalyzer {
    public inspectDomSink(element: { tagName: string; innerHTML: string }): boolean {
        Logger.info(`[*] Inspecting DOM sink on element: ${element.tagName}`);
        const dangerousPatterns = /eval\(|document\.write\(|innerHTML\s*=|outerHTML\s*=/i;
        return dangerousPatterns.test(element.innerHTML);
    }
}
