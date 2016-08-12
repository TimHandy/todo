var todoList = {    // This is the Model
  todos: [], //todos are objects in an array
  addToDo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeToDo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteToDo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos. 
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo) {
      // Case 1: if everything's true, make everything false
      if (completedTodos === totalTodos) {
        todo.completed = false;
      // Case 2: otherwise make everything true, even if some are already true
      } else {
        todo.completed = true;
      }
    });
  }
};




var handlers = {    // This is the Controller
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addToDo(addTodoTextInput.value); // don't forget to only add the value you have to specify .value
    addTodoTextInput.value = ''; // wipes the input box after you add an item.
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeToDo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteToDo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};



var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';   // clears any existing bullets on screen

    todoList.todos.forEach(function(todo, position) {  // notice the callback on a forEach loop also has the index you can use if you want... called it position here
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;  // the li elements need unique ids so that the delete buttons can target them.
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton() );
      todosUl.appendChild(todoLi);
    }, this);   // notice 'this'. It's needed as it makes the other 'this' statements in the method properly refer back to the todoList object and not the forEach function. 
                // It's the same as saying forEach(callback, this). This is part of the forEach function definition.
  }, 
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';  // className used as there will be multiple delete buttons.
    return deleteButton;
  }, 
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {   // set up an event listener on the parent of the li elements. This way you only need one event listener, rather than one for every delete button. Saves memory.
      // Get element that was clicked on
      var elementClicked = event.target;
      // Check if element is a delete button
      if (elementClicked.className === 'deleteButton') {
      // Get the parent id of the button, in this case it's an li id
      handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); // result is a string so parseInt coverts to a number
      }
    });
  }
};


view.setUpEventListeners();













































