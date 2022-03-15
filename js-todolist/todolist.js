//Info Date - Nos trae el Id y lo guarda en las variables
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Task Container - Donde se guardaran las tareas
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('en', { weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('en', { month: 'short'});
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric'});
};

const addNewTask = event => {
    event.preventDefault(); //esto evita que el buton submit nos lleve a otra pagina
    const { value } = event.target.taskText; //input
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task); //Se agrega al principio de la lista
    event.target.reset(); //limpiar campos
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach (elemento => {
        elemento.classList.contains('done') ? done.push(elemento) : toDo.push(elemento)
    })
    return [...toDo, ...done]; //Organiza las tareas para que primero deje las que estan por hacer y despues las que ya estan hechas
};

const renderOrderedTasks = () => {
    order().forEach(elemento => tasksContainer.appendChild(elemento))
}

setDate();

