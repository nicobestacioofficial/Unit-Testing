//Imperial ENglish BMI Formula

function calculateBmi(weight,height) {
    let bmi = (weight / (height * height)* 703);

console.log("Your BMI is: " + bmi.toFixed(2))


if (bmi <= 16) {
    console.log("Severe Thinness 😔");
}else if (bmi <= 17 ) {
    console.log("Moderate Thinness 😖");
}else if (bmi <= 18.5 ) {
    console.log("Mild Thinness 😟");
}else if (bmi <= 25){
    console.log("Normal 😁");
}else if (bmi <= 30) {
    console.log("Overweight 😲");
}else if (bmi <= 35){
    console.log("Obese Class I 🤯");
}else if (bmi <= 40){
    console.log("Obese Class II 😫");
}else if (bmi > 40) {
    console.log("Obese Class III 💣");
}

return bmi.toFixed(2);

}

console.log(calculateBmi(154,66))

//Assertion
function testBmi() {
    let bmi = calculateBmi(154,66);
    let expectedAnswer = 24.85;

    console.log(bmi = expectedAnswer, "Correct result")
}

testBmi();


/* I created a simple html with an input and a button. You can give it a try when you show preview on your browser. :) */
/* I manual test it using my own weight and height and I compare it to the BMI calculator online and its correct */