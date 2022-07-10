import each from "jest-each";
import {read_csv_to_array, read_csv_to_object} from "../common/operationDoc";
import {login} from "../apis/user";

/**
 * 参数化
 * read_csv_to_array while return a array
 * @param phone and password in array
 */
each(read_csv_to_array('D:\\data\\demo_ts\\src\\data\\account.csv')).test('1', (phone, password)=>{
    console.log(phone, password)
    login(
        {"phone":phone,
        "password":password}).then(res =>{
            expect(res.data).toBe(200)
        jest.setTimeout(5000)
    })
})

/**
 * read_csv_to_object while return a object
 * @param pat is a parameter used to receive the return value
 */
each(read_csv_to_object('D:\\data\\demo_ts\\src\\data\\account.csv')).test('1', (pat)=>{
    login(
        {"phone":pat.phone,
            "password":pat.password}).then(res =>{
        expect(res.data.code).toBe(200)
        jest.setTimeout(10000)
    })
})