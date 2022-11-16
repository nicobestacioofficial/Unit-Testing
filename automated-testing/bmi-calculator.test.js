const calculateBmi = require("./bmi_calculator.js")

test("Check if BMI is correct", () => {
    expect(calculateBmi(154,66)).toBe("24.85")
}); 