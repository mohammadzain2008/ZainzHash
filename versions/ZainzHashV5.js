function ZainzHashV5(input) {
    let data = String(input)
    let ascii = []
    let raw_array = []
    let pro_arr = []
    let pro_avg = 0
    let pro_median = 0
    let pro_sum = 0
    let final_string = ""
    let finale = ""

    //Data Checks
    if (data.length > 262144) {
        return "Digits exceeding"       
    }

    if (data == "" || data == "undefined") {
        return "Input Empty"
    }
    data += "#"

    //MAIN
    for (let i = 0; i < data.length; i++) {
        ascii.push(data.charCodeAt(i))
    }

    for (let i = 1; i <= data.length; i++) {
        raw_array.push(i)
    }

    for (let i = 0; i < data.length; i++) {
        pro_arr.push(raw_array[i] * ascii[ascii.length - (i + 1)])
    }
    
    //null item addition
    pro_arr.push(99)
    
    let sum = 0
    for (let i = 0; i < pro_arr.length; i++) {
        sum += pro_arr[i]
    }
    pro_avg = Math.floor(sum / pro_arr.length)

    //median 
    if (pro_arr.length % 2 == 1) {
        pro_median = pro_arr[((pro_arr.length + 1) / 2) - 1]
    }
    else {
        pro_median = Math.floor(pro_arr[(pro_arr.length / 2) - 1] + pro_arr[(pro_arr.length / 2)])
    }
    for (let i = 0; i < pro_arr.length; i++) {
        pro_sum += pro_arr[i]
    }

    pro_sum += Math.floor(pro_sum * (pro_arr[0] + pro_arr[pro_arr.length - 1]))

    pro_sum *= pro_avg
    pro_sum *= pro_median
    pro_sum += pro_avg
    pro_sum += pro_median
    pro_sum *= ((pro_median + pro_avg))
    final_string = pro_sum.toString(16)
    var diff = 32 - final_string.length
    var x = 0
    var i = 0
    // console.log(final_string, final_string.length)
    while (diff <= 32 - final_string.length) {
        finale += x.toString(16)
        x += Math.ceil(pro_arr[i] / 128) + Math.floor(pro_arr[i] / 256)
        i++
        diff--
        if (diff == 0) {
            break
        }
        if (x >= 16) {
            x = 1
        }
        if (i >= 16 || i == pro_arr.length) {
            i = 0
        }
    }
    finale += final_string
    return finale
}