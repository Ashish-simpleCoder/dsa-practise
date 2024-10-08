//https://www.typescriptlang.org/play/?#code/MYewdgzgLgBAhgJwTAvDA2gKBjA3tnGMOAWwFMAuGAIjggAsBLB6gGgJzgHNKYAmAIztCMCAGtGAG0kQq6agCsIbGgjJxgUagF1hMAL578I4uSrUIcRlFJw2HeDyp8ArHpzipMudQAOIAHcyBBULXzIyABNQ3wBXMGB6HT1DTG0AbkxMAHpsmAC4MFgoejIYADc4SViysTIATxgoEBgAIzKoevDLADMyVhhrUXoQWMlItrKyAEdYqqaWko6uspAemF86CCiYHsYycYA6TFBIWDUIMagAfURkND3JKGCAQSQ4eoB1a3oARRqEPsIAAKO4DLA4XC7fbjczcMgqSrVXjUagGPS5ERYkQAPQA-AQoXsDpFzJ5pMoBkiauY0akcARMdjmYR8WkAJSZTA9eKaRjgaFPV7vL4-f7BIEAHgIABUYGQAB7PMCRCAwABKZFACEikuggLAXAGhXqAD49OLAWQ1YrlaqYMC6vU1jAZez0LpMKbgQRInAbFQZR69LMJdaqMZCOgxIMwDAnS7LUDtBGHDhibCYEnrdGMmmKlUaVmAUDc-KlWQVWqE+s5XjXehsxBc9oYFQwGRysFMiJ9D30Zh2Xh9JggA
import { expect, it } from "vitest";

it("should filter array with multiple queries", () => {
    const res_arr = [
        {
            name: "saitama",
            age: 25,
            monkey: 60
        },
        {
            name: "asta",
            age: 25,
            monkey: 60
        }
    ]
    const result_arr = filterArrayWithQueries(arr, [{ field: "age", value: 25 }, { field: "monkey", value: 60 }])
    expect(result_arr).toEqual(res_arr)
})

it("should filter array with multiple queries with same key", () => {
    const res_arr = [
        {
            name: "saitama",
            age: 25,
            monkey: 60
        },
        {
            name: "naruto",
            age: 19,
            monkey: 60
        },
        {
            name: 'flashy flash',
            age: 25,
            monkey: 67
        },
        {
            name: "asta",
            age: 25,
            monkey: 60
        },
    ]
    const result_arr = filterArrayWithQueries(arr, [
        { field: "age", value: 25 }, { field: "age", value: 19 },
        { field: "monkey", value: 60 }, { field: "monkey", value: 67 },
    ])
    // console.log(result_arr)
    expect(result_arr).toEqual(res_arr)
})


function filterArrayWithQueries<
    T extends Record<string, any>,
    Queries extends (keyof T)[]
>(data: T[], queries: {
    [k in keyof Queries]: {
        field: Queries[k];
        value: Queries[k] extends keyof T ? T[Queries[k]] : never;
    };
}) {
    // group the queries to check if it for same key
    let queryObj: Record<any, typeof queries> = {}

    queries?.forEach(query => {
        if (!queryObj[query.field]) {
            queryObj[query.field] = [] as any
        }
        queryObj[query.field].push(query)
    })
    // console.log(queryObj)
    let filtered_data = data

    Object.keys(queryObj)?.forEach(q_key => {
        filtered_data = filtered_data.filter((item) => {
            let pointer_idx = 0
            let matched = false
            while (pointer_idx < queryObj[q_key].length && matched == false) {
                const filter = queryObj[q_key][pointer_idx]
                // console.log({ q_key }, item, filter.value)
                matched = item[filter['field']] == filter["value"]
                pointer_idx++
            }
            return matched
        })
    })
    return filtered_data
}



// function filterArrayWithQueries<
//     T extends Record<any, any>[],
//     Queries extends Array<Query<T[number]>>
// // Queries extends Array<{field: keyof T[number], value: keyof T[number] extends keyof T[number] ? T[keyof T[number]] : never }>
// >(data: T, queries?: Queries) {
//     let filtered_data = data

//     queries?.forEach(query=>{
//         filtered_data = filtered_data.filter((item)=>{
//             return item[query.field] == query.value
//         }) as T
//     })
//     return filtered_data
// }








const arr = [
    {
        name: "ashish",
        age: 21,
        monkey: 30
    },
    {
        name: "saitama",
        age: 25,
        monkey: 60
    },
    {
        name: "sasuke",
        age: 19,
        monkey: 45
    },
    {
        name: "naruto",
        age: 19,
        monkey: 60
    },
    {
        name: "flashy flash",
        age: 25,
        monkey: 67
    },
    {
        name: "makia",
        age: 21,
        monkey: 60
    },
    {
        name: "mob",
        age: 21,
        monkey: 45
    },
    {
        name: "asta",
        age: 25,
        monkey: 60
    }
]











// testing
// type Arr = []
// type K = {
//     [Key in keyof Arr]:{name:string}
// }
// type KK = keyof Arr

// const val:K = []







// type Query<T extends Record<any, any>, Field = keyof T> = {
//     field: Field,
//     value: T[Field]
// }

// type Query<T extends Iterable<any>> = T extends Iterable<infer E, >
//   ? Array<{field: keyof E, value: keyof E }>
//   : never;
