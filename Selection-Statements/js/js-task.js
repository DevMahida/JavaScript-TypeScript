
// Add
let q1_v1 = 3;
let q1_v2 = 5;

document.getElementById("q1").innerText = "Q1. Create a program to calculate the sum of two numbers";
document.getElementById("q1-value").innerText = "Values : " + q1_v1 + " & " + q1_v2;
document.getElementById("q1-ans").innerText = "Ans : " + (q1_v1 + q1_v2);

// difference
let q2_v1 = 3;
let q2_v2 = 5;

document.getElementById("q2").innerText = "Q2. Create a program to calculate the difference between two numbers.";
document.getElementById("q2-value").innerText = "Values : " + q2_v1 + " & " + q2_v2;
document.getElementById("q2-ans").innerText = "Ans : " + (q2_v1 - q2_v2);

// product
let q3_v1 = 3;
let q3_v2 = 5;

document.getElementById("q3").innerText = "Q3. Develop a function to calculate the product of two numbers.";
document.getElementById("q3-value").innerText = "Values : " + q3_v1 + " & " + q3_v2;
document.getElementById("q3-ans").innerText = "Ans : " + (q3_v1 * q3_v2);

// Divide
let q4_v1 = 3;
let q4_v2 = 5;

document.getElementById("q4").innerText = "Q4. Write a program to divide two numbers and handle division by zero using conditional statements.";
document.getElementById("q4-value").innerText = "Values : " + q4_v1 + " Divide by " + q4_v2;

if (q4_v2 == 0) {
    document.getElementById("q4-ans").innerText = "Ans : Divide by Zero not Possible";
}
else {
    document.getElementById("q4-ans").innerText = "Ans : " + (q4_v1 / q4_v2);
}

// square and cube
let q5_v1 = 3;

document.getElementById("q5").innerText = "Q5. Create a program to calculate the square and cube of a number.";
document.getElementById("q5-value").innerText = "Value : " + q5_v1;
document.getElementById("q5-ans").innerText = "Ans : Square is :" + (q5_v1 * q5_v1) + " | Cube is :  " + (q5_v1 * q5_v1 * q5_v1);

// area of rectangle
let q6_v1 = 3;
let q6_v2 = 5;

document.getElementById("q6").innerText = "Q6. Develop a program to calculate the area of a rectangle.";
document.getElementById("q6-value").innerText = "L & B (respectivly) : " + q6_v1 + " & " + q6_v2;
document.getElementById("q6-ans").innerText = "Area : " + (q6_v1 * q6_v2);

// area of circle
let q7_v1 = 3;

document.getElementById("q7").innerText = "Q7. Create a program to calculate the area of a circle.";
document.getElementById("q7-value").innerText = "Radius : " + q7_v1;
document.getElementById("q7-ans").innerText = "Area : " + (3.14 * q7_v1 * q7_v1);

// C to F
let q8_v1 = 3;

document.getElementById("q8").innerText = "Q8. Write a program to convert Celsius to Fahrenheit.";
document.getElementById("q8-value").innerText = "Celsius : " + q8_v1;
document.getElementById("q8-ans").innerText = "Fahrenheit : " + ((q8_v1 * (9 / 5)) + 32);

//calculate Simple Interest
let q9_v1 = 30000; // price
let q9_v2 = 1.5; // rate
let q9_v3 = 2; // time line in year

document.getElementById("q9").innerText = "Q9. Develop a program to calculate Simple Interest using the formula: SI = (P × R × T) / 100";
document.getElementById("q9-value").innerText = "Principal Amount : " + q9_v1 + " | Rate : " + q9_v2 + " | Time : " + q9_v3 + " years";
document.getElementById("q9-ans").innerText = "Simple Interest : " + ((q9_v1 * q9_v2 * q9_v3) / 100);

// odd even

let q10_v1 = 5;

document.getElementById("q10").innerText = "Q10. Write a program to check whether a number is even or odd.";
document.getElementById("q10-value").innerText = "Value : " + q10_v1;

if (q10_v1 % 2 == 0) {
    document.getElementById("q10-ans").innerText = "Number is Even.";
}
else {
    document.getElementById("q10-ans").innerText = "Number is Odd.";
}

// positive negative zero

let q11_v1 = 6;

document.getElementById("q11").innerText = "Q11. Create a program to check whether a number is positive, negative, or zero..";
document.getElementById("q11-value").innerText = "Value : " + q11_v1;

if (q11_v1 == 0) {
    document.getElementById("q11-ans").innerText = "Number is Zero.";
}
else if (q11_v1 > 1) {
    document.getElementById("q11-ans").innerText = "Number is Positive.";
}
else {
    document.getElementById("q11-ans").innerText = "Number is Negative.";
}

// max of 2 number

let q12_v1 = 6;
let q12_v2 = 5;

document.getElementById("q12").innerText = "Q12. Develop a program to find the largest of two numbers using if-else.";
document.getElementById("q12-value").innerText = "Values : " + q12_v1 + " & " + q12_v2;

if (q12_v1 > q12_v2) {
    document.getElementById("q12-ans").innerText = q12_v1 + " is Greater.";
}
else {
    document.getElementById("q12-ans").innerText = q12_v2 + " is Greater.";
}

// max of 3 number

let q13_v1 = 6;
let q13_v2 = 5;
let q13_v3 = 10;

document.getElementById("q13").innerText = "Q13. Create a program to find the largest of three numbers using conditional statements.";
document.getElementById("q13-value").innerText = "Values : " + q13_v1 + ", " + q13_v2 + " & " + q13_v3;

if (q13_v1 > q13_v2 && q13_v1 > q13_v3) {
    document.getElementById("q13-ans").innerText = q13_v1 + " is Greater.";
}
else if (q13_v2 > q13_v1 && q13_v2 > q13_v3) {
    document.getElementById("q13-ans").innerText = q13_v2 + " is Greater.";
}
else {
    document.getElementById("q13-ans").innerText = q13_v3 + " is Greater.";
}

// eligible for voting

let q14_v1 = 21;

document.getElementById("q14").innerText = "Q14. Write a program to check whether a person is eligible for voting (age ≥ 18).";
document.getElementById("q14-value").innerText = "Age : " + q14_v1;

if (q14_v1 >= 18) {
    document.getElementById("q14-ans").innerText = "Person is eligible.";
}
else {
    document.getElementById("q14-ans").innerText = " Person is not eligible.";
}

// Grade calculator

let q15_v1 = 75;

document.getElementById("q15").innerText = "Q15. Develop a program to calculate grade based on marks: 90+ → A | 75–89 → B | 50–74 → C | Below 50 → Fail";
document.getElementById("q15-value").innerText = "Grade : " + q15_v1;

if (q15_v1 > 90) {
    document.getElementById("q15-ans").innerText = "A grade.";
}
else if (q15_v1 >= 75 && q15_v1 <= 89) {
    document.getElementById("q15-ans").innerText = "B Grade.";
}
else if (q15_v1 >= 50 && q15_v1 <= 74) {
    document.getElementById("q15-ans").innerText = "C Grade.";
}
else {
    document.getElementById("q15-ans").innerText = "Fail.";
}

// Leap Year

let q16_v1 = 2026;

document.getElementById("q16").innerText = "Q16. Write a program to check whether a given year is a leap year.";
document.getElementById("q16-value").innerText = "Year : " + q16_v1;

if ((q16_v1 % 400 == 0) || (q16_v1 % 4 == 0 && q16_v1 % 100 != 0)) {
    document.getElementById("q16-ans").innerText = q16_v1 + " is a Leap Year.";
}
else {
    document.getElementById("q16-ans").innerText = q16_v1 + " is not Leap Year.";
}

// divisible by 5 and 11 both

let q17_v1 = 55;

document.getElementById("q17").innerText = "Q17. Create a program to check whether a number is divisible by both 5 and 11.";
document.getElementById("q17-value").innerText = "Number : " + q17_v1;

if (q17_v1 % 5 == 0 && q17_v1 % 11 == 0) {
    document.getElementById("q17-ans").innerText = q17_v1 + " is divisible by 5 and 11 both.";
}
else {
    document.getElementById("q17-ans").innerText = q17_v1 + " is not divisible by 5 and 11 both.";
}

// calculator
let chosen_case = 2;
let q18_v1 = 3;
let q18_v2 = 5;

document.getElementById("q18").innerText = "Q18. Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.";
document.getElementById("case").innerHTML = "Cases : <br> <span class = 'ms-5'>1 for Addition</span> <br> <span class = 'ms-5'>2 for Subtraction</span> <br> <span class = 'ms-5'>3 for Multiplication</span> <br> <span class = 'ms-5'>4 for Division</span>";
document.getElementById("chosen-case").innerText = "Chosen Case : " + chosen_case;
document.getElementById("q18-value").innerText = "Values : " + q2_v1 + " & " + q2_v2;

switch (chosen_case) {
    case 1:
        document.getElementById("q18-ans").innerText = "Addition is : " + (q18_v1 + q18_v2);
        break;
    case 2:
        document.getElementById("q18-ans").innerText = "Subtraction is : " + (q18_v1 - q18_v2);
        break;
    case 3:
        document.getElementById("q18-ans").innerText = "Multiplication is : " + (q18_v1 * q18_v2);
        break;
    case 4:
        document.getElementById("q18-ans").innerText = "Division is : " + (q18_v1 / q18_v2);
        break;
    default:
        document.getElementById("q18-ans").innerText = "Invalid Case";
        break;
}

// BMI

let q19_v1 = 80;//weight in kg
let q19_v2 = 1.8;//height in meter
let BMI = q19_v1 / (q19_v2 * q19_v2);

document.getElementById("q19").innerText = "Q19. Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).";
document.getElementById("q19-value").innerText = "Weight : " + q19_v1 + " kg | Height : " + q19_v2 + " meter";
document.getElementById("q19-ans").innerText = "BMI : " + BMI;
if (BMI < 18.5) {
    document.getElementById("health-category").innerText = "Underweight";
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    document.getElementById("health-category").innerText = "Normal Weight";
}
else if (BMI >= 25.0 && BMI <= 29.9) {
    document.getElementById("health-category").innerText = "Overweight";
}
else {
    document.getElementById("health-category").innerText = "Obesity";
}

// electric bill
let q20_v1 = 125; // unit consumed
let sum = 0;

document.getElementById("q20").innerText = "Q20. Create a program to calculate electricity bill based on units consumed : First 100 units → ₹5 per unit | Next 100 units → ₹7 per unit | Above 200 units → ₹10 per unit ";
document.getElementById("q20-value").innerText = "Unit consumed : " + q20_v1;

if (q20_v1 <= 100) {
    sum = q20_v1 * 5;
    document.getElementById("q20-ans").innerText = "Electricity Bill : ₹" + sum;
}
else if (q20_v1 > 100 && q20_v1 < 200) {
    sum = (100 * 5) + ((q20_v1 - 100) * 7);
    document.getElementById("q20-ans").innerText = "Electricity Bill : ₹" + sum;
}
else {
    sum = (100 * 5) + (100 * 7) + ((q20_v1 - 200) * 10);
    document.getElementById("q20-ans").innerText = "Electricity Bill : ₹" + sum;
}