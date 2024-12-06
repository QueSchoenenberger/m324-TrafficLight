const app = require("./trafficlight");

describe("Traffic Light Tests", () => {
    it("should return 'OUT OF ORDER' if no argument is provided", () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });

    it("should return 'DON'T WALK!' for 'red'", () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });

    it("should return 'ATTENTION!' for 'orange'", () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });

    it("should return 'WALK!' for 'green'", () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });

    it("should handle case insensitivity (e.g., 'Red' should work like 'red')", () => {
        expect(app.trafficLight("Red")).toBe("DON'T WALK!");
        expect(app.trafficLight("ORANGE")).toBe("ATTENTION!");
        expect(app.trafficLight("Green")).toBe("WALK!");
    });

    it("should handle invalid inputs with 'OUT OF ORDER'", () => {
        expect(app.trafficLight("blue")).toBe("OUT OF ORDER");
        expect(app.trafficLight("yellow")).toBe("OUT OF ORDER");
    });
});
