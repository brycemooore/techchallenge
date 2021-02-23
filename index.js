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

// #3 If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?

/*Ruby on Rails is a very powerful and easy to start web framework, but it is very strict in it's conventions.
This is can be awesome as it helps assert industry conventions and makes learning things like MVC much essier in my opinion. 
The problem with Rails is it is not very lightweight and comes with a lot of hassle to install and use. Even when given options like
the API only flag, it is still a large project with a hard workflow to look into. After using Express and seeing how moldable and lightweight
it is, I wish Rails had some options for setting up a project like that. Rails is a fast framework and Ruby is a great language with
awesome tool and easy to read syntax. If the Rails was a little more customizable, I think it would be used by many more people and keep
up in this time of Node dominance.*/


