function nearestFibonacci(num) {
    if (num == 0) {
        console.log(0);
        return;
    }

    let first = 0,
        second = 1;

    let third = first + second;

    while (third <= num) {
        first = second;
        second = third;
        third = first + second;
    }

    let result = Math.abs(third - num) >= Math.abs(second - num) ? second : third;

    console.log(result-num);
}

let number = 19;
nearestFibonacci(number);