// os module

const os = require('os')

// info about current user 

const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)

const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

// console.log(currentos)
occupiedmem = currentos.totalmem - currentos.freemem
console.log(occupiedmem,"\n", currentos.freemem)
if (occupiedmem > currentos.freemem) {
    console.log(`memory is less`)
}

else {
    console.log(`memory is more`)
}