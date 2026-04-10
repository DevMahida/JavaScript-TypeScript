// revser number
let q1_v1 = 2354;
let rev_num_q1 = 0;
let q1 = document.getElementById("q1");
let q1Value = document.getElementById("q1Value");
let q1Ans = document.getElementById("q1Ans");
q1.innerHTML = "Q1. Create a program to reverse a given number using a loop.";
q1Value.innerHTML = "Number : " + q1_v1;
while (q1_v1 != 0) {
    rev_num_q1 = (rev_num_q1 + (q1_v1 % 10)) * 10;
    q1_v1 = Math.floor(q1_v1 / 10);
}
q1Ans.innerHTML = "Reverse Number is : " + (rev_num_q1 / 10);
// revser number
let q2_v1 = 232;
let rev_num_q2 = 0;
let pal = q2_v1;
let q2 = document.getElementById("q2");
let q2Value = document.getElementById("q2Value");
let q2Ans = document.getElementById("q2Ans");
let q2Pal = document.getElementById("q2Pal");
q2.innerHTML = "Q2. Develop a program to check whether a number is a palindrome.";
q2Value.innerHTML = "Number : " + q2_v1;
while (q2_v1 != 0) {
    rev_num_q2 = (rev_num_q2 + (q2_v1 % 10)) * 10;
    q2_v1 = Math.floor(q2_v1 / 10);
}
q2Ans.innerHTML = "Reverse Number is : " + (rev_num_q2 / 10);
if (pal == (rev_num_q2 / 10)) {
    q2Pal.innerHTML = "The number is palindrome";
}
else {
    q2Pal.innerHTML = "The number is not palindrome";
}
// fibonnaci
let q3_v1 = 5;
let fibo1 = 0;
let fibo2 = 1;
let q3 = document.getElementById("q3");
let q3Value = document.getElementById("q3Value");
let q3Ans = document.getElementById("q3Ans");
q3.innerHTML = "Q3. Write a program to print the Fibonacci series up to n terms using a loop.";
q3Value.innerHTML = "Number of Term : " + q3_v1;
q3Ans.innerHTML = "<li>Fibonacci series is :</li>";
if (q3_v1 == 1) {
    q3Ans.innerHTML += "<li>0</li>";
}
else if (q3_v1 == 2) {
    q3Ans.innerHTML += "<li>0</li>";
    q3Ans.innerHTML += "<li>1</li>";
}
else if (q3_v1 > 2) {
    q3Ans.innerHTML += "<li>0</li>";
    for (let i = 0; i <= q3_v1 - 2; i++) {
        fibo1 = fibo1 + fibo2;
        let temp = fibo1;
        fibo1 = fibo2;
        fibo2 = temp;
        q3Ans.innerHTML += "<li>" + fibo1 + "</li>";
    }
}
else {
    q3Ans.innerHTML += "<li>Seriously 0 as input -_- .</li>";
}
// fibonnaci
let q4_v1 = 5;
let fac = 1;
let q4 = document.getElementById("q4");
let q4Value = document.getElementById("q4Value");
let q4Ans = document.getElementById("q4Ans");
q4.innerHTML = "Q4. Create a program to find the factorial of a number using a loop.";
q4Value.innerHTML = "Number : " + q4_v1;
for (let i = 1; i <= q4_v1; i++) {
    fac = fac * i;
}
q4Ans.innerHTML = "Fibonacci series is : " + fac;
//Prime number
let q5_v1 = 23;
let prime = 1;
let q5 = document.getElementById("q5");
let q5Value = document.getElementById("q5Value");
let q5Ans = document.getElementById("q5Ans");
q5.innerHTML = "Q5. Develop a program to check whether a number is a prime number.";
q5Value.innerHTML = "Number : " + q5_v1;
if (q5_v1 <= 1) {
    prime = 0;
}
else {
    for (let i = 2; i < q5_v1; i++) {
        if (q5_v1 % i == 0) {
            prime = 0;
            break;
        }
    }
}
if (prime) {
    q5Ans.innerHTML = "The number is a Prime Number ";
}
else {
    q5Ans.innerHTML = "The number is not a Prime Number ";
}
//total number of digit
let q6_v1 = 23;
let count = 0;
let q6 = document.getElementById("q6");
let q6Value = document.getElementById("q6Value");
let q6Ans = document.getElementById("q6Ans");
q6.innerHTML = "Q6. Write a program to count the total number of digits in a given number.";
q6Value.innerHTML = "Number : " + q6_v1;
while (q6_v1 != 0) {
    q6_v1 = Math.floor(q6_v1 / 10);
    count++;
}
q6Ans.innerHTML = "Numbr of digits : " + count;
//total sum of digit
let q7_v1 = 235;
let sum = 0;
let q7 = document.getElementById("q7");
let q7Value = document.getElementById("q7Value");
let q7Ans = document.getElementById("q7Ans");
q7.innerHTML = "Q7. Create a program to calculate the sum of digits of a number.";
q7Value.innerHTML = "Number : " + q7_v1;
while (q7_v1 != 0) {
    sum = sum + (q7_v1 % 10);
    q7_v1 = Math.floor(q7_v1 / 10);
}
q7Ans.innerHTML = "Sum of digits : " + sum;
//Armstrong number
let q8_v1 = 153;
let temp = q8_v1;
let sum_8 = 0;
let count_8 = 0;
let q8 = document.getElementById("q8");
let q8Value = document.getElementById("q8Value");
let q8Ans = document.getElementById("q8Ans");
let q8des = document.getElementById("q8des");
q8.innerHTML = "Q8. Develop a program to check whether a number is an Armstrong number.";
q8Value.innerHTML = "Number : " + q8_v1;
while (temp != 0) {
    temp = Math.floor(temp / 10);
    count_8++;
}
temp = q8_v1;
while (temp != 0) {
    sum_8 = sum_8 + (Math.pow(temp % 10, count_8));
    temp = Math.floor(temp / 10);
}
q8Ans.innerHTML = "Sum of digits : " + sum_8;
if (q8_v1 == sum_8) {
    q8des.innerHTML = "The number is an Armstrong Number.";
}
else {
    q8des.innerHTML = "The number is not an Armstrong Number.";
}
//find power
let q9_v1 = 2;
let power = 3;
let q9 = document.getElementById("q9");
let q9Value = document.getElementById("q9Value");
let q9Ans = document.getElementById("q9Ans");
q9.innerHTML = "Q9. Write a program to calculate the power of a number using a loop.";
q9Value.innerHTML = "Number : " + q9_v1 + " | Power : " + power;
q9Ans.innerHTML = "Power of Number is : " + Math.pow(q9_v1, power);
//Pattern
let q10 = document.getElementById("q10");
let q10Value = document.getElementById("q10Value");
let q10Ans = document.getElementById("q10Ans");
q10.innerHTML = "Q10. Create a program to print the following number pattern:<br><ul class='ms-5 mt-1 ps-3 list-unstyled fs-5'><li>1</li><li>1 2</li><li>1 2 3</li><li>1 2 3 4</li><li>1 2 3 4 5</li></ul>";
q10Value.innerHTML = "Solution : ";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        q10Ans.innerHTML += "<li class='d-inline'> " + j + " </li>";
    }
    q10Ans.innerHTML += "<li></li>";
}
export {};
