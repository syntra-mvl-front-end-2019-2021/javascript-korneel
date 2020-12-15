// Extra Tasks:
// No submit with empty description
// Error handling
// Do not reload whole list after update, create, delete

const $listContainer = document.getElementById('list-container');
const $formModal = document.getElementById('form-modal');
const $addBtn = document.getElementById('add-btn');
const $todoForm = document.forms['todo-form'];

let allTodoItems = {};

function printTodos(todoItems, clear) {
  if (clear) {
    $listContainer.innerHTML = '';
  }
  let $todoItems = '';

  todoItems.forEach(function (todoItem) {
    $todoItems += `<div data-id="${todoItem.id}" class="list-item ${
      todoItem.done ? 'list-item--done' : ''
    }">
        <p class="list-item__description">${todoItem.description}</p>
        <div class="list-item__actions">
          <button class="list-item__update">Update</button>
          <button class="list-item__delete">Delete</button>
        </div>
      </div>`;
  });

  $listContainer.insertAdjacentHTML('beforeend', $todoItems);
}

function saveTodoList(todoItems, clear) {
  if (clear) {
    allTodoItems = {};
  }

  todoItems.forEach(function (todoItem) {
    allTodoItems[todoItem.id] = todoItem;
  });
}

function fetchAllTodos() {
  $listContainer.classList.add('loading');

  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'GET',
    headers: {
      Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
    },
  })
    .then((result) => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json();
    })
    .then(function (result) {
      saveTodoList(result.data);
      printTodos(result.data, true);
      $listContainer.classList.remove('loading');
    })
    .catch(function (error) {
      console.error(error);
      $listContainer.classList.remove('loading');
    });
}

function postNewTodo(body) {
  $formModal.classList.add('loading');

  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'POST',
    headers: {
      Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((result) => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function (result) {
      console.log(result);
      fetchAllTodos();
      $todoForm.reset();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function updateTodo(id, body) {
  $formModal.classList.add('loading');

  fetch(
    'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )
    .then((result) => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function (result) {
      console.log(result);
      fetchAllTodos();
      $todoForm.reset();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function deleteTodo(id) {
  $listContainer.classList.add('loading');

  fetch(
    'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
      },
    }
  )
    .then((result) => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      fetchAllTodos();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function openModal(todoItem) {
  const todoForm = $todoForm;

  $formModal.classList.add('modal__background--active');

  if (todoItem) {
    todoForm.elements.id.value = todoItem.id;
    todoForm.elements.done.checked = todoItem.done;
    todoForm.elements.description.value = todoItem.description;
  }
}

function closeModal() {
  $formModal.classList.remove('loading');
  $todoForm.elements.id.value = '';
  $formModal.classList.remove('modal__background--active');
}

function deleteBtnClick(event) {
  const $listItem = event.target.closest('.list-item');
  const id = parseInt($listItem.dataset.id);
  deleteTodo(id);
}

function updateBtnClick(event) {
  const $listItem = event.target.closest('.list-item');
  const id = parseInt($listItem.dataset.id);

  openModal(allTodoItems[id]);
}

function listContainerClick(event) {
  if (event.target.matches('.list-item__delete')) {
    deleteBtnClick(event);
  }

  if (event.target.matches('.list-item__update')) {
    updateBtnClick(event);
  }
}

function todoItemFromForm() {
  const todoForm = $todoForm;
  return {
    done: todoForm.elements.done.checked,
    description: todoForm.elements.description.value,
  };
}

function submitTodoForm(event) {
  event.preventDefault();
  const id = $todoForm.elements.id.value;
  const body = todoItemFromForm();

  if (id) {
    updateTodo(id, body);
  } else {
    postNewTodo(body);
  }
}

function addBtnClick() {
  openModal();
}

fetchAllTodos();

$listContainer.addEventListener('click', listContainerClick);
$addBtn.addEventListener('click', addBtnClick);
$todoForm.addEventListener('reset', closeModal);
$todoForm.addEventListener('submit', submitTodoForm);
