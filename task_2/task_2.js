const jsonString = `{
    "man": {
        "name":"Anton",
        "age":36,
        "skills":["Javascript","HTML","CSS"],
        "salary":80000
    }
}`;
const data = JSON.parse(jsonString);
const man = data.man;

const result = {
    name: man.name,
    age: man.age,
    skills:man.skills,
    salary: Number(man.salary),
};
console.log('result', result);