

let users = [
    {username : 'mecanbay', isActive : true},
    {username : 'pain', isActive : false},
    {username : 'legendary', isActive : false},
    {username : 'test1', isActive : true}
]




let activeUsers = users.filter(user => user.isActive === true)

console.log(activeUsers);