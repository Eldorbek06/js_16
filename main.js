const eMailRnd = (param) => {
    let pwd = ""

    for (let i = 0; i <= param.length; i++) {
        let rnd = Math.floor(Math.random() * param.length)
        let rndChar = param[rnd]

        pwd += rndChar
    }

    return pwd
}

let name = prompt('Enter you name:')
let sureName = prompt('Enter you surename:')
let fullName = 1234567890 + name + sureName

console.log(eMailRnd(fullName))

function determiner(num) {
    let answer = 0
    if (num[0] === '-') {
        answer = false
    } else {
        answer = true
    }
    return answer
}

let number = prompt()

console.log(determiner(number));