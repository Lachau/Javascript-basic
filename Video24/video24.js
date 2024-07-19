console.log("Emb Javascript to a HTML file")

let arr = [1, 40, 3, 21, 10000]
arr.sort((a, b) => {
    return a - b
})
console.log(arr)

// arrow function nếu chỉ có 1 dòng không muốn dùng return thì phải bỏ {} nha
// ví dụ:
let arr1 = [1, 40, 3, 21, 10000]
arr1.sort((a, b) => a - b
)
console.log(arr1)


// sort object theo value

let obj = [{
    name: "Hi",
    def: "1",
},
{
    name: "Hello",
    def: "3",
},
{
    name: "Chao",
    def: "2",
},
]

obj.sort((a, b) => a.def - b.def)

console.log(obj)