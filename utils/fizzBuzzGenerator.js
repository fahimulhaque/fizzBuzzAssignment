module.exports.generateFizzBuzz = (count) => {
    return ([...Array(Number(count))].map((n, i) => {
        i++;
        return ((i % 15 ? '' : 'FizzBuzz') || (i % 5 ? '' : 'Buzz') || (i % 3 ? '' : 'Fizz') || i);
    }))
}