/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."  */

function fizzbuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " Fizz Buzz");
            continue
        }

        if (i % 3 == 0) {
            console.log(i + " Fizz");
            continue
        }

        if (i % 5 == 0) {
            console.log(i + " Buzz");
            continue
        }
        console.log(i);
    }

}

fizzbuzz();