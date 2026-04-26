export{};

let arr: String[] = ["Red", "Green", "White", "Black"];

let q1 = document.getElementById("q1") as HTMLElement;
let q1Value = document.getElementById("q1Value") as HTMLElement;
let q1Ans = document.getElementById("q1Ans") as HTMLElement;

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
let arr2: number[] = [1, 3, 5];

let q2 = document.getElementById("q2") as HTMLElement;
let q2Value = document.getElementById("q2Value") as HTMLElement;
let q2Ans = document.getElementById("q2Ans") as HTMLElement;

q2.innerHTML = "Q2. Write a JavaScript program to get sum of all array element using for loop and foreach loop.";
q2Value.innerHTML = "Array Values : " + arr2;

let sum_for: number = 0;
let sum_foreach: number = 0;

for (let i = 0; i < arr2.length; i++) {
    sum_for = sum_for + arr2[i];
}

arr2.forEach(element => {
    sum_foreach = sum_foreach + element;
});

q2Ans.innerHTML += "<li class='ms-2'>Using For Loop Ans : " + sum_for + "</li>";
q2Ans.innerHTML += "<li class='ms-2'>Using ForEach Ans : " + sum_foreach + "</li>";

// array MAX MIN;
let arr3: number[] = [4, 3, 50, 1, 20];

let q3 = document.getElementById("q3") as HTMLElement;
let q3Value = document.getElementById("q3Value") as HTMLElement;
let q3Ans = document.getElementById("q3Ans") as HTMLElement;

q3.innerHTML = "Q3. Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)";
q3Value.innerHTML = "Array Values : " + arr3;

let max: number = 0;
let max1: number = 0;
let min: number = 1000000000;
let min1: number = 1000000000;

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

let q4 = document.getElementById("q4") as HTMLElement;
let q4Value = document.getElementById("q4Value") as HTMLElement;
let q4Ans = document.getElementById("q4Ans") as HTMLElement;

q4.innerHTML = "Q4. Write a JavaScript program for convert all array element in ASCII value.";
q4Value.innerHTML = "Array Values : " + arr4;

let ascii = arr4.map(ch => String(ch).charCodeAt(0));

q4Ans.innerText = "ASCII Array : " + ascii;

// remove negative
let arr5: number[] = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let q5 = document.getElementById("q5") as HTMLElement;
let q5Value = document.getElementById("q5Value") as HTMLElement;
let q5Ans = document.getElementById("q5Ans") as HTMLElement;

q5.innerHTML = "Q5. Write a JavaScript program for remove negative values using the filter array function.";
q5Value.innerHTML = "Array Values : " + arr5;

let filter: number[] = arr5.filter(val => val >= 0);

q5Ans.innerText = "Filtered Array is " + filter;

// Square array 
let arr6: number[] = [2, 5, 6, 3, 8, 9];

let q6 = document.getElementById("q6") as HTMLElement;
let q6Value = document.getElementById("q6Value") as HTMLElement;
let q6Ans = document.getElementById("q6Ans") as HTMLElement;

q6.innerHTML = "Q6.  Write a JavaScript program using array map() method and return the square of array element.";
q6Value.innerHTML = "Array Values : " + arr6;

let square: number[] = arr6.map(val => val * val);

q6Ans.innerText = "Square of Array is " + square;

//Sort array 
let arr7: number[] = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let q7 = document.getElementById("q7") as HTMLElement;
let q7Value = document.getElementById("q7Value") as HTMLElement;
let q7Ans = document.getElementById("q7Ans") as HTMLElement;

q7.innerHTML = "Q7. Write a JavaScript program for sort array in ascending descending.";
q7Value.innerHTML = "Array Values : " + arr7;

let sort: number[] = arr7.sort((a, b) => a - b);

q7Ans.innerText = "Sorted Array is " + sort;

//filter String array 
let arr8: String[] = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let q8 = document.getElementById("q8") as HTMLElement;
let q8Value = document.getElementById("q8Value") as HTMLElement;
let q8Ans = document.getElementById("q8Ans") as HTMLElement;

q8.innerHTML = "Q8. Write a JavaScript program which filters out any string which is less than 8 characters. ";
q8Value.innerHTML = "Array Values : " + arr8;

let sort_string: String[] = arr8.filter(val => val.length < 8);

q8Ans.innerText = "Sorted Array is " + sort_string;

//Q9 
let x: String = "airplane";
let x1: String = "oxoxoxox";
let x2: String = "A New Java Book";

let q9 = document.getElementById("q9") as HTMLElement;
let q9Value = document.getElementById("q9Value") as HTMLElement;
let q9Ans = document.getElementById("q9Ans") as HTMLElement;

q9.innerHTML = "Q9.  write a JavaScript program to  to print expected output for following string.";
q9Value.innerHTML += "<li>String : " + x + "</li>";
q9Value.innerHTML += "<li>String : " + x1 + "</li>";
q9Value.innerHTML += "<li>String : " + x2 + "</li>";

let found = [...x].find(ele => ele === "r");
let changed: String[] = [...x1].map(ch => ch === "x" ? "X" : ch)

q9Ans.innerHTML += "<li>Output : " + found + "</li>";
q9Ans.innerHTML += "<li>Output : " + changed + "</li>";
q9Ans.innerHTML += "<li>Output : " + x2.toLowerCase() + "</li>";
q9Ans.innerHTML += "<li>Output : " + x2.toUpperCase() + "</li>";

// reveser array
let arr10: number[] = [5, 4, 10, 65, 2, 10];

let q10 = document.getElementById("q10") as HTMLElement;
let q10Value = document.getElementById("q10Value") as HTMLElement;
let q10Ans = document.getElementById("q10Ans") as HTMLElement;

q10.innerHTML = "Q10. write a JavaScript program for array reverse.";
q10Value.innerHTML = "Array Values : " + arr10;
q10Ans.innerHTML = "Reversed Arraye : " + arr10.reverse();

// value found
let arr11: number[] = [5, 4, 10, 65, 2, 10];
let valueFound: number = 65;

let q11 = document.getElementById("q11") as HTMLElement;
let q11Value = document.getElementById("q11Value") as HTMLElement;
let q11Ans = document.getElementById("q11Ans") as HTMLElement;

q11.innerHTML = "Q11. write a JavaScript program for check value is found or not?";
q11Value.innerHTML = "Array Values : " + arr11 + "<br>";
q11Value.innerHTML += "Value to found is " + valueFound;

if (arr11.includes(valueFound)) {
    q11Ans.innerHTML = "Value Found.";
} else {
    q11Ans.innerText = "Value not found";
}

// name count
let name: String = "Dev";

let q12 = document.getElementById("q12") as HTMLElement;
let q12Value = document.getElementById("q12Value") as HTMLElement;
let q12Ans = document.getElementById("q12Ans") as HTMLElement;

q12.innerHTML = "Q12. write a JavaScript program for print your name and write the no of total character.";
q12Value.innerHTML = "String : " + name;
q12Ans.innerHTML = "Count : " + name.length;

// name count
let str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let q13 = document.getElementById("q13") as HTMLElement;
let q13Value = document.getElementById("q13Value") as HTMLElement;
let q13Ans = document.getElementById("q13Ans") as HTMLElement;

q13.innerHTML = "Q13. write a JavaScript program given this output using replace concept.";
q13Value.innerHTML = "String : " + str;

let result: String = str.replace(/dog/g, "cat");

q13Ans.innerHTML = "Output : " + result;

// string -> array
let str14: String= "Hire the top 1% freelance developers";

let q14 = document.getElementById("q14") as HTMLElement;
let q14Value = document.getElementById("q14Value") as HTMLElement;
let q14Ans = document.getElementById("q14Ans") as HTMLElement;

q14.innerHTML = "Q14. write a JavaScript program convert string to array.";
q14Value.innerHTML = "String : " + str14;

let result14: String[] = str14.split(" ").slice(0, 4);

q14Ans.innerHTML = "Output : " + result14;

// array -> string
let arr15 = [5, 32, "Daniel"];

let q15 = document.getElementById("q15") as HTMLElement;
let q15Value = document.getElementById("q15Value") as HTMLElement;
let q15Ans = document.getElementById("q15Ans") as HTMLElement;

q15.innerHTML = "Q15. write a JavaScript program convert array to string.";
q15Value.innerHTML = "Array : " + arr15;

let result15 = arr15.join(" ");

q15Ans.innerHTML = "Output : " + result15;

