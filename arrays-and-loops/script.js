const todoList = []; // 

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name); // push adds a value to the end of the array.
    console.log(todoList);

    inputElement.value = ''; // this makes the text in the textbox empty after we add a value; Ex. if we type "make dinner", then click Add, it will reset the textbox and prepare for a new value.
}


// we use a (.) in the querySelector to get a "class", which is the js-name-input from the HTML document, inside the placeholder class. We then save this into a variable (const).
// to get the text out, we use a property of the input element callled ".value"

// Loops; lets us run code over and over.