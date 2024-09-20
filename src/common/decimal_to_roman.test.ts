import { expect, it } from "vitest"

it("should pass all test for decimal to roman representation",()=>{
    expect(romanizer([1,2,3])).toStrictEqual(["I","II",'III'])

    expect(romanizer([56,67,80,98,233,45,561])).toStrictEqual(["LVI","LXVII","LXXX","XCVIII","CCXXXIII","XLV","DLXI"])

    expect(romanizer([787, 1235 ])).toStrictEqual(["DCCLXXXVII","MCCXXXV"])
})

function romanizer(numbers: number[]) {
    // Write your code here
    const result: string[] = []
    const decimalToRomanMap = {
        "1":'I',
        "2":'II',
        "3":'III',
        "4":'IV',
        "5":'V',
        "6":'VI',
        "7":'VII',
        "8":'VIII',
        "9":'IX',
        "10":'X',
        "40":'XL',
        "50":'L',
        "90":'XC',
        "100":'C',
        "400":'CD',
        "500":'D',
        "900":'CM',
        "1000":'M',
    }
    const decimal_num_arr = Object.keys(decimalToRomanMap).map((n)=> Number(n))


    for(let i=0; i<numbers.length;i++){
        const breaked_numbers: number[] = []
        let curr_num = numbers[i]

        if(decimalToRomanMap[curr_num] != undefined){
          result.push(decimalToRomanMap[curr_num])
        }else{
          let rem = curr_num%10
          let remaining_new_num = curr_num-rem

          breaked_numbers.push(remaining_new_num)

          if(rem != 0){
            breaked_numbers.push(rem)
          }
        //   console.log({breaked_numbers})


          // start conversion to roman
          let roman_representation = ""

          // if exist the representation then add to string
          if(decimalToRomanMap[remaining_new_num] != undefined){
              roman_representation = decimalToRomanMap[remaining_new_num]
          }else{
              roman_representation += findClosestRomanRepresentationOfNum(remaining_new_num)
          }

          if(decimalToRomanMap[rem] != undefined){
            roman_representation += decimalToRomanMap[rem]
          }
          // console.log({roman_representation})
          result.push(roman_representation)
        }
    }

    function findClosestRomanRepresentationOfNum(num: number){
        let closeset_representation_of_num = ""
        let rem = 0

        decimal_num_arr.forEach((n)=>{
            if(n < num){
                closeset_representation_of_num = String(n)
            }
        })

        rem = num - Number(closeset_representation_of_num)
        closeset_representation_of_num = decimalToRomanMap[closeset_representation_of_num]

        if(decimalToRomanMap[rem] != undefined){
            closeset_representation_of_num += decimalToRomanMap[rem]
        }else{
          // console.log({rem}, closeset_representation_of_num)
            closeset_representation_of_num += findClosestRomanRepresentationOfNum(rem)
        }
        return closeset_representation_of_num
    }

    return result
}
