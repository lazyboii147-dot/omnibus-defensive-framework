export class AttributeParser {
    public parseDataAttribute(raw: string): Record<string, any> | null {
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }
}
