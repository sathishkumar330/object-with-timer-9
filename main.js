let obj = {

foo: { a: "hello", b: "world" },

bar: ["example", "mem", null, { xyz: 6 }, 88],

qux: [4, 8, 12]

};

var a=obj.bar[3].xyz=606;
console.log(a);
console.log(obj);