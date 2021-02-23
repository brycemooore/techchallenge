/* #1 Print the number of integers in an array that are above the given input 
and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, 
print “above: 1, below: 4”.*/

export const printNumsAboveAndBelow = (nums, value) => {
    let above = 0;
    let below = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < value) {
            below++;
        }
        else if (nums[i] > value) {
            above++;
        }
    }
    return "above: " + above + ", below: " + below;
};

/* #2 Rotate the characters in a string by a given input 
and have the overflow appear at the beginning, e.g. “MyString” 
rotated by 2 is “ngMyStri”.*/

export const rotateString = (stringToRotate, amountToRotate) => {
    const displacement = stringToRotate.length - amountToRotate;
    return stringToRotate.slice(displacement) + stringToRotate.slice(0, displacement)
}

console.log(rotateString("MyString", 2))

// #3 If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?

