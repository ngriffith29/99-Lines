
let friends = ['Jenna', 'Paul', 'Rachel', 'Clay', 'Morgan']
for (let index = 0; index < friends.length; index++) {
    console.log(`${friends[index]}:`)
    for (init = 99; init > 0; init--) {
        if (init > 1) {
            console.log(`${init} lines of code in the file, ${init} lines of code; ${friends[index]} strikes out, clears is all out ${init - 1} lines of code in the file`)
        }
        else {
            console.log(`${init} line of code in the file ${init} line of code; ${friends[index]} strikes out clears it all out, no more lines of code in the file`)
        }
    }
}

