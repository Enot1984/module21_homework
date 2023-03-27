const btn = document.querySelector('.button');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const text = document.querySelector('h3');
input.addEventListener('click', () => {
    list.innerHTML = '';
    text.innerHTML = '';
});

btn.addEventListener ('click', () => {
    let id = input.value ? input.value : 0;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
.then((response) => {
    const result = response.json();
    return result;
  })
  .then((data) => {
    return new Promise((resolve, reject) => {
        if (data.length) {
            resolve(data);
        } else {
            reject()
        }
    })
})
  
.then((data) => {
    text.innerHTML = `Ваш список задач (для id ${id}):`
    for (let i = 0; i < data.length; i++) {
        const newList = document.createElement('li');
        const newTaskList = document.createTextNode(data[i].title);
        newList.appendChild(newTaskList);
        list.appendChild(newList);
        if (data[i].completed) {
            newList.classList.add('completed');
        }
    }
})
.catch(() => {
    list.innerHTML = '';
    text.innerHTML = `Пользователь с ID = ${id} не найден.`;
})
input.value = '';
})