let dbUsers = [ 
    {
        username: "Aida",
        password: "123456",
        name: "Aida",
        email: "aidazainuddin@gmail.com",
    },

    {
        username: "Alifah",
        password: "654321",
        name: "Alifah",
        email: "alifahzainuddin@gmail.com",
    },

    {
        username: "Aisyah",
        password: "78910",
        name: "Aisyah",
        email: "aisyahzainuddin@gmail.com",
    }
]

function login (reqUsername, reqPassword){
    let matchUser = dbUsers.find(
        user => user.username == reqUsername 
    )
    

    if (!matchUser) return "User not found!"
    if (matchUser.password ==reqPassword) {
        return matchUser 
    } else {
        return "Invalid Password"
    }
}

function register (requsername, reqpassword, reqname, reqemail) {
    dbUsers.push({
        username: requsername,
        password : reqpassword,
        name : reqname,
        email: reqemail,
    })
}


//try to login 
//console.log(login ("Aida", "123478")) //Invalid Password
//console.log(login ("Dina", "142526"))   //User not found

//register
console.log(login ("Aida", "123456"))

register ("farah", "farahcomel","farah","farah@gmail.com")

console.log(login ("farah", "farahcomel"))





