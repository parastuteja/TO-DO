const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = '';
  }
});

function addTodoItem(todoText) {
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <span>${todoText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(todoItem);

  const deleteButton = todoItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function() {
    todoItem.remove();
  });

  const editButton = todoItem.querySelector('.edit-btn');
  editButton.addEventListener('click', function() {
    const span = todoItem.querySelector('span');
    const currentText = span.textContent;
    const newText = prompt('Edit todo:', currentText);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  });
}
