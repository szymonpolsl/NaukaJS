let count = 0
function recursion_funkcion (x){
    if(x < 5){
        count = count + 1
    recursion_funkcion(x+1)
    }
}

recursion_funkcion(0)
console.log(count)


for (let i=0; i<5; i++){ // i++ <=> i=i+1
    count = count + 1
}

console.log(count)

for (let i=0; i<101; i++){
    console.log(i)
}


for (let i=0; i<101; i++){
    if (i%5 === 0 && i%3 === 0 ){
        console.log('buzzfizz')
    }else if (i%5 === 0){
        console.log('fizz')
    }else if (i%3 === 0){
        console.log('buzz')
    }else{
        console.log(i)
    }
}

const table = [1,2,3,4,5,6]

for (let i=0; i<table.length; i++){
    xd = table[i]
    console.log(xd)
}

const table1 = [1,2,3,4,5,6]

for (let i=0; i<table1.length; i++){
    table1[i] = table1[i] + 1
}
console.log(table1)


for (let i=0; i<table1.length; i++){
    table1[i]++
}
console.log(table1)


