module.exports = function toReadable (number) {
    let items = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let zeroItems = number.toString().charAt(2) == 0 ? '' : ' ' + items[number%10];
    let teenItems = (number % 100 >= 11 && number % 100 <= 19);
    let dozenItems = teenItems ? ' ' + teens[number.toString().charAt(2)] : ' ' + dozens[number.toString().charAt(1)];

    if (number.toString().length === 1) {
        return items[number];
    }

    if (number.toString().length === 2 && teenItems) {
        return teens[number.toString().charAt(1)];
    }

    if (number.toString().length === 2) {
        return dozens[number.toString().charAt(1)];
    }

    if (number.toString().length === 3 && teenItems) {
        return items[Math.trunc(number/100)] + ' hundred' + dozenItems;
    }
    
    if (number.toString().length === 3) {
        return items[Math.trunc(number/100)] + ' hundred' + dozenItems + zeroItems;
    }
};
// number = 80;
// console.log(toReadable(number));