const addBtn = document.querySelectorAll('.todo__add img'),
    clear = document.querySelectorAll('.todo__checkbox img'),
    contents = document.querySelectorAll('.todo__content'),
    checkbox = document.querySelectorAll('.todo__checkbox ul'),
    li = document.querySelectorAll('.todo__checkbox li'),
    textInput = document.querySelectorAll('.todo__add input');

let counter = 0,
    activeItem = '';

class Task {
    render() {
        checkbox[counter].innerHTML += `
            <li draggable="true">
                <span class="todo__text">${textInput[counter].value}</span>
                <img src="img/trash-solid.svg" class = "delete" alt="">
            </li>
        `
    }
}
const task = new Task();

// Удаление элемента 
function close(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.style.cssText = 'animation-name: end; animation-duration: .45s;'
        setTimeout(() => {
            e.target.parentElement.remove();
        }, 400)
    }
}
// Зачеркивание текста
function moveLine(e) {
    if (e.target.classList.contains('todo__text')) {
        e.target.parentElement.classList.toggle('line');
    }
};
// область куда перемещаем
function dragover(event) {
    event.preventDefault();
};

// раняем элемент в ячейку
function dropItem() {
    this.append(activeItem);
}


// Добавление нового элемента
addBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        if (textInput[i].value === "" || textInput[i].value === '0') {
        } else {
            setTimeout(() => {
                task.render();
                textInput[i].value = '';
            }, 0);
        };
        return counter = i;
    })
})


// навешивание draggable на уже созданные элементы списка
li.forEach(list => {
    list.draggable = true;
})

checkbox.forEach(box => {
    // Перебор, удаление, зачеркивание
    box.addEventListener('click', close);
    box.addEventListener('click', moveLine);
    console.log(box)

    // начало и конец перемещения
    box.addEventListener('dragstart', function (e) {
        setTimeout(() => {
            e.target.classList.add('hide');
            return activeItem = document.querySelector(".hide");
        }, 0);
    });
    box.addEventListener('dragend', function (e) {
        setTimeout(() => {
            e.target.classList.remove('hide');
        }, 0);

    })

    // реализация drag and drop
    box.addEventListener('dragover', dragover);
    box.addEventListener('dragenter', () => { });
    box.addEventListener('dragleave', () => { });
    box.addEventListener('drop', dropItem);
})







