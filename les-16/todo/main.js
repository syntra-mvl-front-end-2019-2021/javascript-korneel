function fetchAllTodos() {
  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'GET',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
    }
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json();
    })
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error){
      console.error(error)
    });
}

function postNewTodo() {
  const body = {
    description: 'Test2',
    done: false,
  };

  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error){
      console.error(error)
    });
}

function updateTodo(id) {
  const body = {
    description: 'Test3',
    done: true,
  };

  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
    method: 'PATCH',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error){
      console.error(error)
    });
}

function deleteTodo(id) {
  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
    },
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      console.log(result);
    })
    .catch(function(error){
      console.error(error)
    });
}
// postNewTodo();
// updateTodo(2);
// deleteTodo(3);
fetchAllTodos();
