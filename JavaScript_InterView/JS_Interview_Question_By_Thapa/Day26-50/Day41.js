//Day41: Currency Converter
const rates = {
    USD: 1, //Base Currency
    EUR: 0.9, //1USD = 0.9EUR
    GBP: 0.8, //1USD = 0.8GBP
    INR: 82, //1USD = 82INR
}


//USD == 1 = 0.9;
//EUR == 100 = ?

const convertCurrency = (amount, fC, tC) => {
    let amountInUSD = 0;
    if (fC !== "USD") {
        amountInUSD = amount / rates[fC];
    } else {
        amountInUSD = amount;
    }

    let convertedAmount = 0;
    if (tC !== "USD") {
        convertedAmount = amountInUSD * rates[tC];
    } else {
        convertedAmount = amountInUSD;
    }
    return convertedAmount;
}

console.log(convertCurrency(100, "GBP", "EUR"));//Output will depend on the rates