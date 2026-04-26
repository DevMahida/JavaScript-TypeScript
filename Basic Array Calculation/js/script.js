let arr = ["Red", "Green", "White", "Black"];

let q1 = document.getElementById("q1");
let q1Value = document.getElementById("q1Value");
let q1Ans = document.getElementById("q1Ans");

q1.innerText = "Q1. Write a simple JavaScript program to print expected Output using following array.";
q1Value.innerText = "Value : arr = [\"Red\",\"Green\",\"White\",\"Black\"]";
q1Ans.innerHTML += "<li class='ms-2'>" + arr.join() + "</li>";
q1Ans.innerHTML += "<li class='ms-2'>" + arr.join("+") + "</li>";

arr.pop();
q1Ans.innerHTML += "<li class='ms-2'>" + arr.join() + "</li>";
q1Ans.innerHTML += "<li class='ms-2'>" + arr.shift() + "</li>";
q1Ans.innerHTML += "<li class='ms-2'>" + arr + "</li>";

arr.unshift("Red");
arr.push("Black", "Orange");
q1Ans.innerHTML += "<li class='ms-2'>" + arr + "</li>";

// array sum;
let arr2 = [1, 3, 5];

let q2 = document.getElementById("q2");
let q2Value = document.getElementById("q2Value");
let q2Ans = document.getElementById("q2Ans");

q2.innerHTML = "Q2. Write a JavaScript program to get sum of all array element using for loop and foreach loop.";
q2Value.innerHTML = "Array Values : " + arr2;

let sum_for = 0;
let sum_foreach = 0;

for (let i = 0; i < arr2.length; i++) {
    sum_for = sum_for + arr2[i];//  4
}

arr2.forEach(element => {
    sum_foreach = sum_foreach + element; // 4
});

q2Ans.innerHTML += "<li class='ms-2'>Using For Loop Ans : " + sum_for + "</li>";
q2Ans.innerHTML += "<li class='ms-2'>Using ForEach Ans : " + sum_foreach + "</li>";

// array MAX MIN;
let arr3 = [4, 3, 50, 1, 20];

let q3 = document.getElementById("q3");
let q3Value = document.getElementById("q3Value");
let q3Ans = document.getElementById("q3Ans");

q3.innerHTML = "Q3. Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)";
q3Value.innerHTML = "Array Values : " + arr3;

let max = 0;
let max1 = 0;
let min = 1000000000;
let min1 = 1000000000;

for (let i = 0; i < arr3.length; i++) {
    if (max1 < arr3[i]) {
        max1 = arr3[i];
    }
}
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < min1) {
        min1 = arr3[i];
    }
}

arr3.forEach(ele => {
    if (max < ele) {
        max = ele;
    }
})

arr3.forEach(ele => {
    if (ele < min) {
        min = ele;
    }
})

q3Ans.innerHTML += "<li class='ms-2'>Max using function : " + max + "</li>";
q3Ans.innerHTML += "<li class='ms-2'>Min using function : " + min + "</li>";
q3Ans.innerHTML += "<li class='ms-2'>Max using Logic : " + max1 + "</li>";
q3Ans.innerHTML += "<li class='ms-2'>Min using Logic : " + min1 + "</li>";

// ASCII
let arr4 = [4, 3, "H", 1, 8];

let q4 = document.getElementById("q4");
let q4Value = document.getElementById("q4Value");
let q4Ans = document.getElementById("q4Ans");

q4.innerHTML = "Q4. Write a JavaScript program for convert all array element in ASCII value.";
q4Value.innerHTML = "Array Values : " + arr4;

let ascii = arr4.map(ch => String(ch).charCodeAt(0));

q4Ans.innerText = "ASCII Array : " + ascii;

// remove negative
let arr5 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let q5 = document.getElementById("q5");
let q5Value = document.getElementById("q5Value");
let q5Ans = document.getElementById("q5Ans");

q5.innerHTML = "Q5. Write a JavaScript program for remove negative values using the filter array function.";
q5Value.innerHTML = "Array Values : " + arr5;

let filter = arr5.filter(val => val >= 0);

q5Ans.innerText = "Filtered Array is " + filter;

// Square array 
let arr6 = [2, 5, 6, 3, 8, 9];

let q6 = document.getElementById("q6");
let q6Value = document.getElementById("q6Value");
let q6Ans = document.getElementById("q6Ans");

q6.innerHTML = "Q6.  Write a JavaScript program using array map() method and return the square of array element.";
q6Value.innerHTML = "Array Values : " + arr6;

let square = arr6.map(val => val * val);

q6Ans.innerText = "Square of Array is " + square;

//Sort array 
let arr7 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let q7 = document.getElementById("q7");
let q7Value = document.getElementById("q7Value");
let q7Ans = document.getElementById("q7Ans");

q7.innerHTML = "Q7. Write a JavaScript program for sort array in ascending descending.";
q7Value.innerHTML = "Array Values : " + arr7;

let sort = arr7.sort((a, b) => a - b);

q7Ans.innerText = "Sorted Array is " + sort;

//filter String array 
let arr8 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let q8 = document.getElementById("q8");
let q8Value = document.getElementById("q8Value");
let q8Ans = document.getElementById("q8Ans");

q8.innerHTML = "Q8. Write a JavaScript program which filters out any string which is less than 8 characters. ";
q8Value.innerHTML = "Array Values : " + arr8;

let sort_string = arr8.filter(val => val.length < 8);

q8Ans.innerText = "Sorted Array is " + sort_string;

//Q9 
let x = "airplane";
let x1 = "oxoxoxox";
let x2 = "A New Java Book";

let q9 = document.getElementById("q9");
let q9Value = document.getElementById("q9Value");
let q9Ans = document.getElementById("q9Ans");

q9.innerHTML = "Q9.  write a JavaScript program to  to print expected output for following string.";
q9Value.innerHTML += "<li>String : " + x + "</li>";
q9Value.innerHTML += "<li>String : " + x1 + "</li>";
q9Value.innerHTML += "<li>String : " + x2 + "</li>";

let found = [...x].find(ele => ele === "r");
let changed = [...x1].map(ch => ch === "x" ? "X" : ch)

q9Ans.innerHTML += "<li>Output : " + found + "</li>";
q9Ans.innerHTML += "<li>Output : " + changed.join("") + "</li>";
q9Ans.innerHTML += "<li>Output : " + x2.toLowerCase() + "</li>";
q9Ans.innerHTML += "<li>Output : " + x2.toUpperCase() + "</li>";

// reveser array
let arr10 = [5, 4, 10, 65, 2, 10];

let q10 = document.getElementById("q10");
let q10Value = document.getElementById("q10Value");
let q10Ans = document.getElementById("q10Ans");

q10.innerHTML = "Q10. write a JavaScript program for array reverse.";
q10Value.innerHTML = "Array Values : " + arr10;
q10Ans.innerHTML = "Reversed Arraye : " + arr10.reverse();

// value found
let arr11 = [5, 4, 10, 65, 2, 10];
let valueFound = 65;

let q11 = document.getElementById("q11");
let q11Value = document.getElementById("q11Value");
let q11Ans = document.getElementById("q11Ans");

q11.innerHTML = "Q11. write a JavaScript program for check value is found or not?";
q11Value.innerHTML = "Array Values : " + arr11 + "<br>";
q11Value.innerHTML += "Value to found is " + valueFound;

if (arr11.includes(valueFound)) {
    q11Ans.innerHTML = "Value Found.";
} else {
    q11Ans.innerText = "Value not found";
}

// name count
let name = "Dev";

let q12 = document.getElementById("q12");
let q12Value = document.getElementById("q12Value");
let q12Ans = document.getElementById("q12Ans");

q12.innerHTML = "Q12. write a JavaScript program for print your name and write the no of total character.";
q12Value.innerHTML = "String : " + name;
q12Ans.innerHTML = "Count : " + name.length;

// dog -> cat
let str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let q13 = document.getElementById("q13");
let q13Value = document.getElementById("q13Value");
let q13Ans = document.getElementById("q13Ans");

q13.innerHTML = "Q13. write a JavaScript program given this output using replace concept.";
q13Value.innerHTML = "String : " + str;

let result = str.replace(/dog/g,"cat");

q13Ans.innerHTML = "Output : " + result;

// string -> array
let str14 = "Hire the top 1% freelance developers";

let q14 = document.getElementById("q14");
let q14Value = document.getElementById("q14Value");
let q14Ans = document.getElementById("q14Ans");

q14.innerHTML = "Q14. write a JavaScript program convert string to array.";
q14Value.innerHTML = "String : " + str14;

let result14 = str14.split(" ").slice(0,4);

q14Ans.innerHTML = "Output : " + result14;

// array -> string
let arr15 = [5,32,"Daniel"];

let q15 = document.getElementById("q15");
let q15Value = document.getElementById("q15Value");
let q15Ans = document.getElementById("q15Ans");

q15.innerHTML = "Q15. write a JavaScript program convert array to string.";
q15Value.innerHTML = "Array : " + arr15;

let result15 = arr15.join(" ");

q15Ans.innerHTML = "Output : " + result15;

