// একটি সংখ্যা ইনপুট নাও এবং দেখো সংখ্যাটি even নাকি odd।

let inputNumber = 2000;
let inputNumberTow = 300;
let inputNumberThree = 533;


if (inputNumber % 2 === 0) {
    console.log('This number is even');

} else {
    console.log('This is number is odd');

}

// একটি সংখ্যা positive, negative না zero তা প্রিন্ট করো।

if (inputNumber > 0) {
    console.log('This is number is positive', inputNumber);

} else if (inputNumber < 0) {
    console.log('This number is negative', inputNumber);

} else {
    console.log('Thsi is number is', inputNumber);

}

//  বয়স দিলে:

// * 0–12 → Child
// * 13–17 → Teen
// * 18 + → Adult

// যেটা match হবে সেটা দেখাও।

if (inputNumber <= 12 && inputNumber >= 0) {
    console.log('You are child', inputNumber);

} else if (inputNumber <= 17) {
    console.log('You are teen', inputNumber);

} else if (inputNumber >= 18) {
    console.log('You are adult', inputNumber);

}


// দুইটি সংখ্যা ইনপুট নাও, কোনটি বড় তা প্রিন্ট করো।

if (inputNumber > inputNumberTow) {
    console.log('InputNumber is greter then two', inputNumber, inputNumberTow);

} else if (inputNumberTow > inputNumber) {
    console.log('InputNumberTwo is greter then one', inputNumberTow, inputNumber);

} else {
    console.log('Both numbers are equal', inputNumber);

}

// তিনটি সংখ্যার মধ্যে সর্বোচ্চ কোনটি তা প্রিন্ট করো।

if (inputNumber > inputNumberTow && inputNumber > inputNumberThree) {
    console.log('Number One is green then Two and Three', inputNumber, inputNumberTow, inputNumberThree);

} else if (inputNumberTow > inputNumberThree && inputNumberTow > inputNumber) {
    console.log('Number Two is greeter then Three and One', inputNumberTow, inputNumberThree, inputNumber);

} else {
    console.log('Nummber Three is larges', inputNumberThree
    );
}


// একটি year ইনপুট নাও এবং leap year কিনা তা নির্ধারণ করো।
// শর্ত:

// * 4 দিয়ে বিভাজ্য হলে
// * কিন্তু 100 দিয়ে বিভাজ্য হলে নয়
// * তবে 400 দিয়ে বিভাজ্য হলে leap year
// ---

let leapYear = 2400;

if (inputNumber % 400 === 0) {
    console.log(inputNumber, "is a leap year (divisible by 400).");
} else if (inputNumber % 100 === 0) {
    console.log(inputNumber, "is NOT a leap year (divisible by 100 but not 400).");
} else if (inputNumber % 4 === 0) {
    console.log(inputNumber, "is a leap year (divisible by 4).");
} else {
    console.log(inputNumber, "is NOT a leap year.");
}


// একটি mark দিলে:

// * 80 + → A
// * 70–79 → B
// * 60–69 → C
//  * 50–59 → D
//  * নিচে → F

// ---

if (inputNumber >= 0 && inputNumber <= 100) {
    if (inputNumber >= 80) {
        console.log('You got A', inputNumber);

    } else if (inputNumber >= 70) {
        console.log('You got B', inputNumber);

    } else if (inputNumber >= 60) {
        console.log('You got C', inputNumber);

    } else if (inputNumber >= 50) {
        console.log('You got D', inputNumber);

    } else {
        console.log('You are fail', inputNumber);

    }
} else {
    console.log('Invalid Input', inputNumber);

}


// একটি সংখ্যা:

// * যদি 3 এবং 5 দুটো দিয়েই divisible হয় → “FizzBuzz”
// * শুধু 3 দিয়ে হলে → “Fizz”
// * শুধু 5 দিয়ে হলে → “Buzz”
// * এর কোনোটিই না হলে → সংখ্যা প্রিন্ট করো


if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    console.log("FizzBuzz");

} else if (inputNumber % 3 === 0) {
    console.log('Fizz');

} else if (inputNumber % 5 === 0) {
    console.log('Buzz');

} else {
    console.log('No divisible Number');

}

// Temperature দিলে:

// * 0 এর নিচে → “Freezing”
// * 0–20 → “Cold”
// * 21–30 → “Warm”
// * 30 এর বেশি → “Hot”

if (inputNumber < 0) {
    console.log('Freezing');

} else if (inputNumber <= 20) {
    console.log('Cold');

} else if (inputNumber <= 30) {
    console.log('Warm');

} else {
    console.log('Hot');

}

// একটি password ইনপুট নিয়ে:

// * length < 4 → “Very Weak”
// * 4–7 → “Weak”
// * length >= 8 → “Strong”
let len = inputNumber.lenght;

if (len < 4) {
    console.log('Verry Week');

} else if (len <= 7) {
    console.log('Week');

} else {
    console.log('Strong');

}