const kata1 = 'Radar'
const kata2 = 'Malam'
const kata3 = 'Kasur ini rusak'
const kata4 = 'Ibu Ratna antar ubi'
const kata5 = 'Malas'
const kata6 = 'Makan nasi goreng'
const kata7 = 'Balonku ada lima'

function Palindrome(kata) {
    let strArray = kata.toLowerCase().split('').reverse();
    let newKata = strArray.join('')
    // console.log(newKata)

    if (newKata === kata.toLowerCase()) {
        return console.log(kata, " # --> palindrome")
    } else {
        return console.log(kata, " # --> not palindrome")
    }
}

console.log(Palindrome(kata1));
console.log(Palindrome(kata2));
console.log(Palindrome(kata3));
console.log(Palindrome(kata4));
console.log(Palindrome(kata5));
console.log(Palindrome(kata6));
console.log(Palindrome(kata7));