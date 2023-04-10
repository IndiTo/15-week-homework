//Теория 15 неделя

/*
1. Цикл состоит из условия и тела. 

2. В JavaScript нет ограничения на количество уровней вложенности циклов. 
Однако, слишком глубокая вложенность может привести к проблемам с производительностью и сложности отладки кода. 
Поэтому рекомендуется используется не более 3-4 уровней вложенности циклов в JavaScript.

3. Для выхода из оператора switch, который находится внутри функции, можно использовать оператор `return`. 
Когда `return` вызывается внутри оператора switch, выполнение функции прекращается и управление возвращается к вызывающей стороне. 
Если нужно выйти только из оператора switch, а не из функции, то вы можете использовать оператор `break`. 
Он прерывает выполнение текущей итерации цикла и переносит управление на следующую инструкцию после цикла.

4. Любая часть for может быть пропущена. Для примера, мы можем пропустить начало если нам ничего не нужно делать перед стартом цикла.
Вот так:

let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}

Можно убрать и шаг:

let i = 0;

for (; i < 3;) {
alert( i++ );
}

А можно и вообще убрать всё, получив бесконечный цикл:

for (;;) {
  // будет выполняться вечно
}

При этом сами точки с запятой ; обязательно должны присутствовать, иначе будет ошибка синтаксиса.

5. Цикл «while»

let i = 0; 
while (i < 3) {
    alert (i);
    i++;
}

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

6. Обычно цикл завершается при вычислении *условия* в `false`.
Но можно выйти из цикла в любой момент с помощью специальной директивы `break`.
Директива break полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на console.log.

7. for (let i = 2; i < 12; i++){
    if (i % 2 == 0){
        console.log(i);
    }        
}

8. Фигурные скобки не требуются для тела цикла из одной строки
Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}:

let i = 3;
while (i) alert(i--);

9. // 0, 1, 2
for (let i = 0; i < 3; i++) {
    console.log(i)
}

10. 
let i=0; // числа от 1 до 49
while (++i < 50) console.log(i)

let i = 0; // числа от 1 до 50
while (i++ < 50) console.log(i)

*/

//ПРАКТИЧЕСКОЕ ЗАДАНИЕ

const task = document.querySelector('#task');
const button = document.querySelector('#send');
const allTasks = document.querySelector('.all_tasks');
const textInput = document.querySelector('#task');
const emptyList = document.querySelector('#empty-list');
const button2 = document.getElementById('delete');


const createTask = () => {
    const taskText = task.value;
    const taskHTML = `
    <li class="task-list">
    <p class="new-task">${taskText}</p>
    <input type ="checkbox" class="checkbox" id="checkbox${taskText}"/>
    <label for="checkbox${taskText}" type="checkbox" name="author"></label>
    </li>`;

    allTasks.insertAdjacentHTML('beforeend', taskHTML);

    task.value = "";
    if (allTasks.children.length > 1) {
        emptyList.classList.add('none')
    }
    button2.disabled = false;
}

function deleteTasks() {
    allTasks.innerHTML = "";
    button2.disabled = true;
    }
    
button.addEventListener('click', () => {
    createTask();
})