function sayHello() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const title = document.getElementById('title');
    title.textContent = `${firstName} ${lastName}`;
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
}

// create another input, the first input will be for the first name
// the second input will be for the last name
// when you click on the submit it will change the title to [first] [last]