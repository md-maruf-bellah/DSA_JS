// Problems:
// even / odd check
// বয়স দেখে Adult / Teen / Baby নির্ধারণ


let dynamicNumber = 4;

if (dynamicNumber % 2 === 0) {
    console.log('This is a odd number', dynamicNumber);

} else {
    console.log('This is a even number', dynamicNumber);
}

if (dynamicNumber >= 18) {
    console.log('You are adult person', dynamicNumber);
} else if (dynamicNumber >= 10) {
    console.log('You are teen person', dynamicNumber);

} else {
    console.log('You are baby', dynamicNumber);

}