function ZainzHashV2(input) {
    let data = String(input)
    let code_array = []
    let octal_array = []
    let decimal_array = []
    let sum_1 = 0
    let product_1 = 0
    let octal_sum_1 = 0
    let octal_product_1 = 0
    let sum = 0
    let sum1;
    let sum2;
    let sum3;
    let sum4;
    let grand_sum;
    let __32base__value;
    //Pushing ASCII Codes into code_array[]
    for (let i = 0; i < data.length; i++) {
        code_array.push(data.charCodeAt(i))
    }

    //Setting the value of sum variable
    for(let i = 0; i < code_array.length; i++){
        sum += code_array[i]
    }

    //Setting sum_1 variable value
    sum_1 = code_array[0] + code_array[code_array.length - 1]
    //Setting product_1 variable value
    product_1 = code_array[0] * code_array[code_array.length - 1]
    //Octal Values of ASCII Numbers
    for (let i = 0; i < code_array.length; i++) {
        octal_array.push(code_array[i].toString(8))
    }
    for (let i = 0; i < octal_array.length; i++) {
        decimal_array.push(Number(octal_array[i]))
        sum_1 += decimal_array[i]
    }
    decimal_array.push(786)
    decimal_array.push(369)
    //Setting octal_sum_1 variable value
    octal_sum_1 = decimal_array[0] + decimal_array[decimal_array.length - 1]
    //Setting octal_product_1 variable value
    octal_product_1 = decimal_array[0] * decimal_array[decimal_array.length - 1]

    //Setting other sum variable values
    sum1 = sum * sum_1
    sum2 = sum + product_1
    sum3 = sum * octal_sum_1
    sum4 = sum + octal_product_1
    //Adding all the values
    grand_sum = (sum + sum1 + sum2 + sum3 + sum4)
    //Converting to base 32
    __32base__value = grand_sum.toString(32)
    return __32base__value
}
