let userNameJson = localStorage.getItem('myKey');
let userName = '';
let visitTime = '';
function createVisitTime() {
    let date = new Date();
    visitTime = date.toLocaleString();
    localStorage.setItem('lastVisit', JSON.stringify(visitTime));
};
if (userNameJson) {
    userName = JSON.parse(userNameJson);
    let visitTimeJson = localStorage.getItem('lastVisit');
    visitTime = JSON.parse(visitTimeJson);
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${visitTime}`);
    createVisitTime();
} else {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    if (!userName) {
        localStorage.removeItem('myKey');
    } else {
        localStorage.setItem('myKey', JSON.stringify(userName));
        createVisitTime();
    };
};

