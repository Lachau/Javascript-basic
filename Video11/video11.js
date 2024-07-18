console.log("Hello World from HTML")

// for (i = 0; i < 10; i++) {
//     console.log("i++ = ", i++)
// }

// for (i = 0; i < 10; ++i) {
//     console.log("++i = ", ++i)
// }

//vòng lặp for ... of : duyệt nội dung phần tử của array
let students = [
    {
        name: "Hoa",
        age: 14
    },
    {
        name: "Lan",
        age: 15
    }
]

for (let student of students) {
    console.log(`students' information:`, student, `students' age: ${student.age}`)
    for (let attribute in student) {
        console.log(`attribute: ${student[attribute]}`)
    }
}
// for ... in: duyệt chỉ số phần tử array
for (let idx in students) {
    console.log(`students' idx:`, idx)
}
// vòng lặp for ... in: duyệt property của object

let school = {
    name: "Huu Canh",
    address: "Binh Thanh",
    distance: "13km",
    amountstd: 1400
}

for (let key in school) {
    console.log("properties of school", key, "value: ", school[key])
}

const obj = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
}
