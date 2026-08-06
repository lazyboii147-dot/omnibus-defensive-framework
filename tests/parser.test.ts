import { AttributeParser } from "../src/handlers/attributeParser.js";

describe("AttributeParser", () => {
    it("should parse valid JSON attribute string", () => {
        const parser = new AttributeParser();
        const result = parser.parseDataAttribute('{"key":"value"}');
        expect(result).toEqual({ key: "value" });
    });

    it("should return null on invalid JSON", () => {
        const parser = new AttributeParser();
        const result = parser.parseDataAttribute("not-json");
        expect(result).toBeNull();
    });
});
