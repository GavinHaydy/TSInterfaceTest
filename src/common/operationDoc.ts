import * as fs from 'fs'

/**
 *
 * @param csv_file path of csv file
 */
export function read_csv_to_array(csv_file:string): string[]{
    let csv_str:string = fs.readFileSync(csv_file,'utf-8')
    let arr: string[] = csv_str.split('\n').slice(1, csv_str.split('\n').length)
    let array: any = []
    arr.forEach(line => {
        array.push(line.split(','))
    })
    return array

}

export function read_csv_to_object(csv_file:string): any{
    let csv_str:string = fs.readFileSync(csv_file,'utf-8')
    let headers: string[] = csv_str.split('\r\n').slice(0,1)
    let header:any[] = []
    headers.forEach(line_h =>{
        header = line_h.split(',')
    })

    let arr: string[] = csv_str.split('\r\n').slice(1, csv_str.split('\r\n').length)
    let arr_simple:any[] = []
    arr.forEach(line =>{
        arr_simple.push(line.split(','))
    })

    let array: any = []

    arr_simple.forEach( line_a =>{
        let obj :{[key:string]:string} = {}
        for (let val=0;val<line_a.length;val++){
            obj[header[val]] = line_a[val]
        }
        array.push(obj)
    })
    return array

}