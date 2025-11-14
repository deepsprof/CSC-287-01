// users.js

function createUser(name, age, isAdmin) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin
    };
}

function promoteUser(user) {
    return {...user, isAdmin: true};
}

const users = [];

users.push(createUser("Alice", 20, false));
users.push(createUser("Bob", "25", false));
users.push(createUser(30, "Janet", true));

function getAverageAge(users) {
    let total = 0;
    for (let u of users) {
        total += u.age;
    }
    return total / users.length;
}

console.log("Average age:", getAverageAge(users));
console.log("Users:", users);
