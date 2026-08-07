export class Formatter {
    public static sanitizeLogOutput(input: string): string {
        return input.replace(/[\r\n]/g, "_");
    }
}
