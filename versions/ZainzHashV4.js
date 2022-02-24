function ZainzHashV4(input){
    function ZainzHashV3(input) {
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
    
        let data = String(input)
        let parse_1 = ZainzHashV2(data)
        let parse_2
        let parse_3
        let parse_4
        let salt = "%zhv3s"
        let salt_2 = "$zhv3s_2"
        let parse_1_string = ""
        let parse_2_string = ""
        //Pushing items of parse_1 into parse_1_string along with salt
        parse_1_string += salt
        for(let i = 0; i < parse_1.length; i++){
            parse_1_string += parse_1[i]
        }
        parse_1_string += salt
    
        //Converting parse_1_string to ZainzHashV2
        parse_2 = ZainzHashV2(parse_1_string)
    
        //Pushing items of parse_2 into parse_2_string along with salt_2
        parse_2_string += salt_2
        for(let i = 0; i < parse_2.length; i++){
            parse_2_string += parse_2[i]
        }
        parse_2_string += salt_2
    
        //Converting parse_2_string to ZainzHashV2
        parse_3 = ZainzHashV2(parse_2_string)
    
        //Converting parse_3 to ZainzhashV1
        parse_4 = ZainzHashV1(parse_3)
        return parse_4
    
    
    }
    let data = ZainzHashV3(String(input))
    let salt_1 = "~%zhv4s_1l229__"
    let salt_2 = "~&zhv4s_2l230__"
    let salt_1_application_string = ""
    let salt_1_applicated_ASCII_array = []
    let salt_1_applicated_ASCII_array_sum = 0;
    let salt_1_applicated_ASCII_array_difference;
    let product_sum_difference;
    let appiled_product_sum_difference;
    let appiled_product_sum_difference_base_16;
    let salt_2_not_appiled_product_sum_difference_base_16 = ""
    let salt_2_appiled_product_sum_difference_base_16_array = []
    let sum_product_of_salt_2_appiled_product_sum_difference_base_16_array = 0
    let __return__value__base__32;
    //Pushing values of data into a new string so that salts may be appiled.
    salt_1_application_string += salt_1
    for(let i = 0; i < data.length; i++){
        salt_1_application_string += data[i]
    }
    salt_1_application_string += salt_1

    //Obtaining ASCII Codes of salt_1_string and pushing them to an array
    for(let i = 0; i < salt_1_application_string.length; i++){
        salt_1_applicated_ASCII_array.push((salt_1_application_string.charCodeAt(i)) + 11)
    }

    //Setting the value of salt_1_applicated_ASCII_array_sum
    for(let i = 0; i < salt_1_applicated_ASCII_array.length; i++){
        salt_1_applicated_ASCII_array_sum += salt_1_applicated_ASCII_array[i]
    }

    //Setting the value of salt_1_applicated_ASCII_array_difference
    salt_1_applicated_ASCII_array_difference = salt_1_applicated_ASCII_array_sum - (salt_1_applicated_ASCII_array[0] + salt_1_applicated_ASCII_array[salt_1_applicated_ASCII_array.length-1])

    //Setting the value of product_sum_difference 
    product_sum_difference = salt_1_applicated_ASCII_array_sum * salt_1_applicated_ASCII_array_difference

    //Using sum, difference and their product
    appiled_product_sum_difference = salt_1_applicated_ASCII_array_sum + salt_1_applicated_ASCII_array_difference + product_sum_difference


    //Coverting applied_product_sum_difference to base 16
    appiled_product_sum_difference_base_16 = appiled_product_sum_difference.toString(16)

    //Adding salt_2 to appiled_product_sum_difference_base_16
    salt_2_not_appiled_product_sum_difference_base_16 += salt_2
    for(let i = 0; i < appiled_product_sum_difference_base_16.length; i++){
        salt_2_not_appiled_product_sum_difference_base_16 += appiled_product_sum_difference_base_16[i]
        salt_2_not_appiled_product_sum_difference_base_16 += salt_2
    }
    salt_2_not_appiled_product_sum_difference_base_16 += salt_2

    //Obtaining ASCII Codes of salt_2_not_appiled_product_sum_difference_base_16
    for(let i = 0; i < salt_2_not_appiled_product_sum_difference_base_16.length; i++){
        salt_2_appiled_product_sum_difference_base_16_array.push(salt_2_not_appiled_product_sum_difference_base_16.charCodeAt(i))
    }

    //Summing and multiplying the values of salt_2_appiled_product_sum_difference_base_16_array
    for(let i = 0; i < salt_2_appiled_product_sum_difference_base_16_array.length; i++){
        if(i % 51 == 0){
            sum_product_of_salt_2_appiled_product_sum_difference_base_16_array *= salt_2_appiled_product_sum_difference_base_16_array[i]
        }
        else{
            sum_product_of_salt_2_appiled_product_sum_difference_base_16_array += salt_2_appiled_product_sum_difference_base_16_array[i]
        }
    }

    __return__value__base__32 = sum_product_of_salt_2_appiled_product_sum_difference_base_16_array.toString(32)
    return __return__value__base__32

}

