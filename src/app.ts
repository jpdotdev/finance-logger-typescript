import { HasFormatter } from './interfaces/HasFormatter.js'
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
   
})

// GENERICS

// const addUID = <T extends {name:string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'Yoshi', age: 40});

// console.log(docOne.name)

// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }


// TUPLES

// let arr = ['uhdfas', 5, true]
// arr[0] = false;
// arr[1] = 'Yoshi'
// arr = [30, false, 'mario'];

// let tup: [string, number, boolean] = ['yoshi', 50, false]
// tup[0] = true // does not work, must be a string
// tup[0] = 'hello'

// let student: [string, number];
// student = ['Jimbo', 12]