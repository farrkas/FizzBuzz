/* A robiłeś ta fizzbuzz zadanie?
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."  */

function fizzbuzz() {

    var tab = [];
    for (let i = 0; i <= 100; i++) {
        tab[i] = i+1;

        if (tab[i] % 3 == 0 && tab[i] % 5 == 0) { tab[i] = tab[i] + " Fizz Buzz"; }

        if (tab[i] % 3 == 0) { tab[i] = tab[i] + " Fizz"; }
        if (tab[i] % 5 == 0) { tab[i] = tab[i] + " Buzz"; }
        
    }

    console.log(tab);
}

fizzbuzz();