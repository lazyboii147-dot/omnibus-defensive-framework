export class Validator {
    public static isNonEmptyString(value: unknown): value is string {
        return typeof value === "string" && value.trim().length > 0;
    }

    public static isValidPort(port: unknown): boolean {
        const num = Number(port);
        return !isNaN(num) && num > 0 && num <= 65535;
    }
}
