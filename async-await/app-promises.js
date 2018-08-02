const users = [
    {
        id: 1,
        name: "Mario",
        schoolId: 101
    },
    {
        id: 2,
        name: "Maria",
        schoolId: 999
    }
];

const grades = [
    {
        id: 1,
        schoolId: 101,
        grade: 86
    },
    {
        id: 2,
        schoolId: 999,
        grade: 96
    },
    {
        id: 3,
        schoolId: 101,
        grade: 80
    }
];

const getUser = id => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject("No user found for id " + id);
        }
    });
};

getUser(2)
    .then(user => console.log(user))
    .catch(err => console.log(err));

getUser(21)
    .then(user => console.log(user))
    .catch(err => console.log(err));

const getGrades = id => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter(grade => grade.schoolId === id));
    });
};

getGrades(101).then(grades => console.log(grades));
getGrades(999).then(grades => console.log(grades));
getGrades(123).then(grades => console.log(grades));

// print user name and his average
const getStatus = userdId => {
    let user; // work around for user scopt

    return getUser(userdId)
        .then(userTemp => {
            user = userTemp;

            return getGrades(user.schoolId);
        })
        .then(grades => {
            // don't have access to user her because of function scope

            // compute user average
            let average = 0;
            if (grades.length > 0) {
                average =
                    grades.map(grade => grade.grade).reduce((a, b) => a + b) /
                    grades.length;
            }

            return `${user.name} has ${average}% in the class`;
        });
};

getStatus(1)
    .then(status => console.log(status))
    .catch(err => console.log(err));
