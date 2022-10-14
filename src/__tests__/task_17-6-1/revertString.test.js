import { revertString } from "../../task_17-6-1/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});