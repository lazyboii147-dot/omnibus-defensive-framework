import crypto from "crypto";

export class CryptoUtils {
    public static generateToken(length: number = 32): string {
        return crypto.randomBytes(length).toString("hex");
    }

    public static hashPayload(data: string): string {
        return crypto.createHash("sha256").update(data).digest("hex");
    }
}
