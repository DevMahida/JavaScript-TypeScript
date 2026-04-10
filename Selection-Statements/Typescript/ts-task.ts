export { };
// add
let q1_v1: number = 3;
let q1_v2: number = 5;

let q1 = document.getElementById("q1");
let q1Value = document.getElementById("q1-value");
let q1Ans = document.getElementById("q1-ans");

if (q1 && q1Value && q1Ans) {
    q1.innerText = "Q1. Create a program to calculate the sum of two numbers.";
    q1Value.innerText = "Values : " + q1_v1 + " & " + q1_v2;
    q1Ans.innerText = "Ans : " + (q1_v1 + q1_v2);
}

// difference
let q2_v1: number = 3;
let q2_v2: number = 5;

let q2 = document.getElementById("q2") as HTMLElement;
let q2Value = document.getElementById("q2-value") as HTMLElement;
let q2Ans = document.getElementById("q2-ans") as HTMLElement;

q2.innerText = "Q2. Create a program to calculate the difference between two numbers.";
q2Value.innerText = "Values : " + q2_v1 + " & " + q2_v2;
q2Ans.innerText = "Ans : " + (q2_v1 - q2_v2);

// Product
let q3_v1: number = 3;
let q3_v2: number = 5;

let q3 = document.getElementById("q3") as HTMLElement;
let q3Value = document.getElementById("q3-value") as HTMLElement;
let q3Ans = document.getElementById("q3-ans") as HTMLElement;

q3.innerText = "Q3. Develop a function to calculate the product of two numbers.";
q3Value.innerText = "Values : " + q3_v1 + " & " + q3_v2;
q3Ans.innerText = "Ans : " + (q3_v1 * q3_v2);

// Divide
let q4_v1: number = 3;
let q4_v2: number = 5;

let q4 = document.getElementById("q4") as HTMLElement;
let q4Value = document.getElementById("q4-value") as HTMLElement;
let q4Ans = document.getElementById("q4-ans") as HTMLElement;

q4.innerText = "Q4. Write a program to divide two numbers and handle division by zero using conditional statements.";
q4Value.innerText = "Values : " + q4_v1 + " Divided by " + q4_v2;

if (q4_v2 === 0) {
    q4Ans.innerText = "Ans : Divide by zero not possible"
}
else {
    q4Ans.innerText = "Ans : " + (q4_v1 / q4_v2);
}

// square and cube
let q5_v1: number = 3;

let q5 = document.getElementById("q5") as HTMLElement;
let q5Value = document.getElementById("q5-value") as HTMLElement;
let q5Ans = document.getElementById("q5-ans") as HTMLElement;

q5.innerText = "Q5. Create a program to calculate the square and cube of a number.";
q5Value.innerText = "Values : " + q5_v1;
q5Ans.innerText = "Square : " + (q5_v1 * q5_v1) + " | Cube : " + (q5_v1 * q5_v1 * q5_v1);

// area of rectanlge
let q6_v1: number = 3;
let q6_v2: number = 5;

let q6 = document.getElementById("q6") as HTMLElement;
let q6Value = document.getElementById("q6-value") as HTMLElement;
let q6Ans = document.getElementById("q6-ans") as HTMLElement;

q6.innerText = "Q6. Develop a program to calculate the area of a rectangle.";
q6Value.innerText = "L & B (respectively) : " + q6_v1 + " & " + q6_v2;
q6Ans.innerText = "Area : " + (q6_v1 * q6_v2);

// area of circle
let q7_v1: number = 3;

let q7 = document.getElementById("q7") as HTMLElement;
let q7Value = document.getElementById("q7-value") as HTMLElement;
let q7Ans = document.getElementById("q7-ans") as HTMLElement;

q7.innerText = "Q7. Create a program to calculate the area of a circle.";
q7Value.innerText = "Radius : " + q7_v1;
q7Ans.innerText = "Area : " + (3.14 * q7_v1 * q7_v1);

// C to F
let q8_v1: number = 3;

let q8 = document.getElementById("q8") as HTMLElement;
let q8Value = document.getElementById("q8-value") as HTMLElement;
let q8Ans = document.getElementById("q8-ans") as HTMLElement;

q8.innerText = "Q8. Write a program to convert Celsius to Fahrenheit.";
q8Value.innerText = "Celsius : " + q8_v1;
q8Ans.innerText = "Fahrenheit : " + ((q8_v1 * (9 / 5)) + 32);

// Calculate Simple Interest
let q9_v1: number = 30000; // price
let q9_v2: number = 1.5; // rate
let q9_v3: number = 2; // time line in year

let q9 = document.getElementById("q9") as HTMLElement;
let q9Value = document.getElementById("q9-value") as HTMLElement;
let q9Ans = document.getElementById("q9-ans") as HTMLElement;

q9.innerText = "Q9. Develop a program to calculate Simple Interest using the formula: SI = (P × R × T) / 100";
q9Value.innerText = "Principal Amount : " + q9_v1 + " | Rate : " + q9_v2 + " | Time : " + q9_v3 + " years";
q9Ans.innerText = "Simple Interest : " + ((q9_v1 * q9_v2 * q9_v3) / 100);

// Calculate Simple Interest
let q10_v1: number = 5;

let q10 = document.getElementById("q10") as HTMLElement;
let q10Value = document.getElementById("q10-value") as HTMLElement;
let q10Ans = document.getElementById("q10-ans") as HTMLElement;

q10.innerText = "Q10. Write a program to check whether a number is even or odd.";
q10Value.innerText = "Value : " + q10_v1;

if (q10_v1 % 2 == 0) {
    q10Ans.innerText = "Number is Even.";
}
else {
    q10Ans.innerText = "Number is Odd.";
}

// positive negative zero
let q11_v1: number = 6;

let q11 = document.getElementById("q11") as HTMLElement;
let q11Value = document.getElementById("q11-value") as HTMLElement;
let q11Ans = document.getElementById("q11-ans") as HTMLElement;

q11.innerText = "Q11. Create a program to check whether a number is positive, negative, or zero..";
q11Value.innerText = "Value : " + q11_v1;

if (q11_v1 == 0) {
    q11Ans.innerText = "Number is Zero.";
}
else if (q11_v1 > 1) {
    q11Ans.innerText = "Number is Positive.";
}
else {
    q11Ans.innerText = "Number is Negative.";
}

// max of 2 number
let q12_v1: number = 6;
let q12_v2: number = 5;

let q12 = document.getElementById("q12") as HTMLElement;
let q12Value = document.getElementById("q12-value") as HTMLElement;
let q12Ans = document.getElementById("q12-ans") as HTMLElement;

q12.innerText = "Q12. Develop a program to find the largest of two numbers using if-else.";
q12Value.innerText = "Values : " + q12_v1 + " & " + q12_v2;

if (q12_v1 > q12_v2) {
    q12Ans.innerText = q12_v1 + " is Greater.";
}
else {
    q12Ans.innerText = q12_v2 + " is Greater.";
}

// max of 3 number
let q13_v1: number = 6;
let q13_v2: number = 5;
let q13_v3: number = 10;
let mark: number = 0;

let q13 = document.getElementById("q13") as HTMLElement;
let q13Value = document.getElementById("q13-value") as HTMLElement;
let q13Ans = document.getElementById("q13-ans") as HTMLElement;

q13.innerText = "Q13. Create a program to find the largest of three numbers using conditional statements.";
q13Value.innerText = "Values : " + q13_v1 + ", " + q13_v2 + " & " + q13_v3;

if (q13_v1 > q13_v2 && q13_v1 > q13_v3) {
    q13Ans.innerText = q13_v1 + " is Greater.";
}
else if (q13_v2 > q13_v1 && q13_v2 > q13_v3) {
    q13Ans.innerText = q13_v2 + " is Greater.";
}
else {
    q13Ans.innerText = q13_v3 + " is Greater.";
}

// eligible for voting
let q14_v1: number = 21;

let q14 = document.getElementById("q14") as HTMLElement;
let q14Value = document.getElementById("q14-value") as HTMLElement;
let q14Ans = document.getElementById("q14-ans") as HTMLElement;

q14.innerText = "Q14. Write a program to check whether a person is eligible for voting (age ≥ 18).";
q14Value.innerText = "Age : " + q14_v1;

if (q14_v1 >= 18) {
    q14Ans.innerText = "Person is eligible.";
}
else {
    q14Ans.innerText = " Person is not eligible.";
}

// Grade calculator
let q15_v1: number = 75;

let q15 = document.getElementById("q15") as HTMLElement;
let q15Value = document.getElementById("q15-value") as HTMLElement;
let q15Ans = document.getElementById("q15-ans") as HTMLElement;

q15.innerText = "Q15. Develop a program to calculate grade based on marks: 90+ → A | 75–89 → B | 50–74 → C | Below 50 → Fail";
q15Value.innerText = "Grade : " + q15_v1;

if (q15_v1 > 90) {
    q15Ans.innerText = "A grade.";
}
else if (q15_v1 >= 75 && q15_v1 <= 89) {
    q15Ans.innerText = "B Grade.";
}
else if (q15_v1 >= 50 && q15_v1 <= 74) {
    q15Ans.innerText = "C Grade.";
}
else {
    q15Ans.innerText = "Fail.";
}

// Leap Year

let q16_v1: number = 2026;

let q16 = document.getElementById("q16") as HTMLElement;
let q16Value = document.getElementById("q16-value") as HTMLElement;
let q16Ans = document.getElementById("q16-ans") as HTMLElement;

q16.innerText = "Q16. Write a program to check whether a given year is a leap year.";
q16Value.innerText = "Year : " + q16_v1;

if ((q16_v1 % 400 == 0) || (q16_v1 % 4 == 0 && q16_v1 % 100 != 0)) {
    q16Ans.innerText = q16_v1 + " is a Leap Year.";
}
else {
    q16Ans.innerText = q16_v1 + " is not Leap Year.";
}

// divisible by 5 and 11 both

let q17_v1: number = 55;

let q17 = document.getElementById("q17") as HTMLElement;
let q17Value = document.getElementById("q17-value") as HTMLElement;
let q17Ans = document.getElementById("q17-ans") as HTMLElement;

q17.innerText = "Q17. Create a program to check whether a number is divisible by both 5 and 11.";
q17Value.innerText = "Number : " + q17_v1;

if (q17_v1 % 5 == 0 && q17_v1 % 11 == 0) {
    q17Ans.innerText = q17_v1 + " is divisible by 5 and 11 both.";
}
else {
    q17Ans.innerText = q17_v1 + " is not divisible by 5 and 11 both.";
}

// calculator
let chosen_case: number = 2;
let q18_v1: number = 3;
let q18_v2: number = 5;

let q18 = document.getElementById("q18") as HTMLElement;
let Case = document.getElementById("case") as HTMLElement;
let ChosenCase = document.getElementById("chosen-case") as HTMLElement;
let q18Value = document.getElementById("q18-value") as HTMLElement;
let q18Ans = document.getElementById("q18-ans") as HTMLElement;

q18.innerText = "Q18. Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.";
Case.innerHTML = "Cases : <br> <span class = 'ms-5'>1 for Addition</span> <br> <span class = 'ms-5'>2 for Subtraction</span> <br> <span class = 'ms-5'>3 for Multiplication</span> <br> <span class = 'ms-5'>4 for Division</span>";
ChosenCase.innerText = "Chosen Case : " + chosen_case;
q18Value.innerText = "Values : " + q2_v1 + " & " + q2_v2;

switch (chosen_case) {
    case 1:
        q18Ans.innerText = "Addition is : " + (q18_v1 + q18_v2);
        break;
    case 2:
        q18Ans.innerText = "Subtraction is : " + (q18_v1 - q18_v2);
        break;
    case 3:
        q18Ans.innerText = "Multiplication is : " + (q18_v1 * q18_v2);
        break;
    case 4:
        q18Ans.innerText = "Division is : " + (q18_v1 / q18_v2);
        break;
    default:
        q18Ans.innerText = "Invalid Case";
        break;
}

// BMI

let q19_v1: number = 80;//weight in kg
let q19_v2: number = 1.8;//height in meter
let BMI: number = q19_v1 / (q19_v2 * q19_v2);

let q19 = document.getElementById("q19") as HTMLElement;
let q19Value = document.getElementById("q19-value") as HTMLElement;
let q19Ans = document.getElementById("q19-ans") as HTMLElement;
let health = document.getElementById("health-category") as HTMLElement;

q19.innerText = "Q19. Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).";
q19Value.innerText = "Weight : " + q19_v1 + " kg | Height : " + q19_v2 + " meter";
q19Ans.innerText = "BMI : " + BMI;

if (BMI < 18.5) {
    health.innerText = "Underweight";
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    health.innerText = "Normal Weight";
}
else if (BMI >= 25.0 && BMI <= 29.9) {
    health.innerText = "Overweight";
}
else {
    health.innerText = "Obesity";
}

// electric bill
let q20_v1: number = 125; // unit consumed
let sum: number = 0;

let q20 = document.getElementById("q20") as HTMLElement;
let q20Value = document.getElementById("q20-value") as HTMLElement;
let q20Ans = document.getElementById("q20-ans") as HTMLElement;

q20.innerText = "Q20. Create a program to calculate electricity bill based on units consumed : First 100 units → ₹5 per unit | Next 100 units → ₹7 per unit | Above 200 units → ₹10 per unit ";
q20Value.innerText = "Unit consumed : " + q20_v1;

if (q20_v1 <= 100) {
    sum = q20_v1 * 5;
    q20Ans.innerText = "Electricity Bill : ₹" + sum;
}
else if (q20_v1 > 100 && q20_v1 < 200) {
    sum = (100 * 5) + ((q20_v1 - 100) * 7);
    q20Ans.innerText = "Electricity Bill : ₹" + sum;
}
else {
    sum = (100 * 5) + (100 * 7) + ((q20_v1 - 200) * 10);
    q20Ans.innerText = "Electricity Bill : ₹" + sum;
}