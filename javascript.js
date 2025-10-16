
// import studentsData from "./students-data.js";

/* LOOP EXAMPLES */
console.log('Here\'s a for loop showing 1...10:\n')
for (let i = 0; i < 10; i++) {
    console.log(`${ i }\n`)
}



console.log('Here\'s a do-while loop showing 1...10:\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)



console.log('Here\'s a while loop showing 1...1000:\n')
let reagan = 0
while (reagan < 1000) {
    console.log(`${ reagan }\n`)
    reagan++
}



console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})



















/*

console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable = (to) => {
    for (let i = 1; i <= to; i++) {
        let row = ""
        for (let j = 1; j <= to; j++) {
            row += `${ i * j }\t`
        }
        console.log(row)
    }
}
timesTable(12)




console.log('Here\'s how we can render this array of objects using console.table:\n')
console.table(studentsData)

console.log('Now let\'s look at how to iterate over this array of objects ourselves, using Array.forEach:\n')
studentsData.forEach(student => {
    console.log(`First name is ${ student.firstName }, last name is ${student.lastName}, and their birthday is ${student.dob}.\n`)
})

 */
