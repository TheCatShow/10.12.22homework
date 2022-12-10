let container = document.createElement('div');
container.textContent = 'Текст внутри контейнера';
document.body.appendChild(container);

let myButton = document.createElement('button');
myButton.textContent = 'Применить';
document.body.appendChild(myButton);

container.addEventListener('click', function(){
    container.textContent = container.textContent.toUpperCase();
    title.textContent = title.textContent.toUpperCase();
})

let text = document.createElement('div');
text.textContent = '';
document.body.appendChild(text);

myButton.addEventListener('click', function(){
    text.textContent = 'Блок создан при клике на кнопку';
    container.style.width = 300;
    container.style.width = 200;
    container.style.width = 25;
})

text.addEventListener('click', function(){
    text.style.color = 'red';
})

let myButton2 = document.createElement('button');
myButton2.textContent = 'Заменить';
document.body.appendChild(myButton2);

myButton2.addEventListener('click', function(){
    text.textContent = 'Текст заменен при клике на кнопку';
})