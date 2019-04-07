var arr = [2, 0,];

// reverser = (erti, ori) => erti + ori;

function reverser (erti, ori, sami) {
    return erti + ori - sami;
}

console.log(arr.reduce(reverser));