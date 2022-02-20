function ZainzHashV1(input) {
    let data = String(input);
    let code_array = [];
    let octal_array = [];
    let decimal_array = [];
    var sum = 0;
    var zain_code;
    //Converting and pushing the ASCII Codes of the characters in the data to code_array[]
    for (let i = 0; i < data.length; i++) {
        code_array.push(data.charCodeAt(i))
    }

    //Coverting elements of code_array[] to Octal Numbers
    for (let i = 0; i < code_array.length; i++) {
        octal_array.push(code_array[i].toString(8))
    }

    //Transforming Octal Numbers to Decimal without any value change
    for (let i = 0; i < octal_array.length; i++) {
        decimal_array.push(Number(octal_array[i]))
    }

    //Adding the decimal numbers
    for (let i = 0; i < decimal_array.length; i++) {
        sum += decimal_array[i]
    }

    //Coverting the decimal value of sum to hexadecimal
    zain_code = sum.toString(32)

    //Returning the Value 
    return zain_code
}
