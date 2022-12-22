const a = 5
const b = a

console.log(a,b)

console.log(a === b) //true

const a1 = 10
const b1 = 10

console.log(a1 === b1)


const ob1 ={
    a: 1,
    b: 2
}

const ob2 ={
    a: 1,
    b: 2
}

console.log(ob1 === ob2)

console.log ('ob1.a vs ob2.a: ', ob1.a === ob2.a)
const p1 ={
    a: 1,
    b: 2
} 

const p2 = p1

p2.a = 10

console.log(p1 === p2)

console.log('p1', p1, 'p2', p2)


const table1 = [1,2,3]

const table2 = [1,2,3]

console.log(table1 === table2)


const table3 = table2

table3[1] = 3

console.log(table3 === table2)
console.log('table2: ', table2, 'table3: ', table3)

