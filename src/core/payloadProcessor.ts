import { CryptoUtils } from "../utils/crypto.js";

export class PayloadProcessor {
    public process(payload: string): { hash: string; valid: boolean } {
        const hash = CryptoUtils.hashPayload(payload);
        return {
            hash,
            valid: payload.length > 0,
        };
    }
}
