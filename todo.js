const addBtn = document.querySelectorAll('.todo__add img'),
    clear = document.querySelectorAll('.todo__checkbox img'),
    contents = document.querySelectorAll('.todo__content'),
    checkbox = document.querySelectorAll('.todo__checkbox ul'),
    li = document.querySelectorAll('.todo__checkbox li'),
    textInput = document.querySelectorAll('.todo__add input');
let counter = 0;

class Task {
    render() {
        checkbox[counter].innerHTML += `
            <li>
                <input type="checkbox">
                <span>${textInput[counter].value}</span>
                <img src="img/trash-alt-solid.svg" class = "delete" alt="">
            </li>
        `
    }
}
const task = new Task();

function close(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}

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

checkbox.forEach(box => {
    box.addEventListener('click', close)
})



// li.forEach(list => {
//     list.draggable = true;
//     list.addEventListener('dragstart', () => {
//         setTimeout(() => {
//             list.classList.add('hide');
//         }, 0)
//     })
//     list.addEventListener('dragend', () => {
//         setTimeout(() => {
//             list.classList.remove('hide');
//         }, 0)

//     })
// })
// contents.forEach(item => {
//     function dragover(event) {
//         event.preventDefault();
//     };

//     item.addEventListener('dragover', dragover);
//     item.addEventListener('dragenter', () => { });
//     item.addEventListener('dragleave', () => { });
//     item.addEventListener('drop', () => {
//         checkbox[2].append(list)
//     });
// })






