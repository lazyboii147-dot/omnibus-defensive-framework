import { SinkAnalyzer } from "../src/core/sinkAnalyzer.js";

describe("SinkAnalyzer", () => {
    it("should detect dangerous eval pattern", () => {
        const analyzer = new SinkAnalyzer();
        const element = { tagName: "DIV", innerHTML: "eval('malicious')" };
        expect(analyzer.inspectDomSink(element)).toBe(true);
    });

    it("should pass safe innerHTML", () => {
        const analyzer = new SinkAnalyzer();
        const element = { tagName: "SPAN", innerHTML: "Hello World" };
        expect(analyzer.inspectDomSink(element)).toBe(false);
    });
});
