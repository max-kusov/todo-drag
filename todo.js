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
            <li>
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
        e.target.parentElement.remove();
    }
}
// Зачеркивание текста
function moveLine(e) {
    if (e.target.classList.contains('todo__text')) {
        e.target.parentElement.classList.toggle('line');
    }
};
// prevent
function dragover(event) {
    event.preventDefault();
};

// drop item
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

// Перебор и удаление
checkbox.forEach(box => {
    box.addEventListener('click', close)
})


li.forEach(list => {
    list.addEventListener('click', moveLine)
    // Реализация Drag & Drop
    list.draggable = true;
    list.addEventListener('dragstart', () => {
        setTimeout(() => {
            list.classList.add('hide');
            return activeItem = document.querySelector(".hide");
        }, 0);
    });
    list.addEventListener('dragend', () => {
        setTimeout(() => {
            list.classList.remove('hide');
        }, 0);

    })
})


checkbox.forEach(item => {
    item.addEventListener('dragover', dragover);
    item.addEventListener('dragenter', () => { });
    item.addEventListener('dragleave', () => { });
    item.addEventListener('drop', dropItem);
})






