# Demo of a Todo List app.

http://watchandcode.com/courses/practical-javascript/

Awesome course, best instructor I've come across; explanations were superb.

Of particular note in the code:

- The onclick handlers assigned directly to the html buttons in index.html help to document what's supposed to happen, and also make the code in the JS shorter as they don't need an addEventListener each time.

- Location of the CSS and JS file links using ../public/client.js

- Use of MVC in the three objects:
    - Model = todoList
    - View = View
    - Controller = handlers


- use of this. to refer to the objects

- .splice to delete entries in the array

- forEach loops and in particular the use of adding 'this' as an arg, to make .this refer to the object and not the forEach loop context.

- .value on a DOM getElementById to get the actual text value.

- valueAsNumber to convert to a number... similar to parseInt.

- Toggle of a feature with boolean: 'completed = !completed' to swap back and forth between true and false

- Clearing a text box after extracting the user info

- querySelector for DOM manipulation

- createElement for DOM manipulation

- Creating multiple li elements dynamically, including adding buttons to those elements

- Being able to get an li button to delete it's li, even when created dynamically without an id. It uses an event listener on the parent of the li elements and targets based on .parentNode.id.

- The event listeners are added to a setUpEventListeners method in the view and called in one go with view.setUpEventListeners(). Don't forget the parens!

- The event listeners have to be kicked off at the end of the file so that they're running and waiting. Guess it doesn't need to be an on pageload as the page will load before the user can start interacting with it.
