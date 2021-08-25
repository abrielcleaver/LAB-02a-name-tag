const updateButton = document.getElementById('update-button');
    console.log(updateButton);
        // get an input
const textBox = document.getElementById('text-box');

    console.log(textBox);
        // code here will run when button is clicked

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {
    // post-click logic goes here

const name = textBox.value;
    console.log(name);
    
    nameInput.textContent = name ; 
});

const updateButtonP = document.getElementById('update-button-p');
    console.log(updateButtonP);
        // get an input
const textBoxP = document.getElementById('text-box-p');
    console.log(textBoxP);

const pronounInput = document.getElementById('pronoun-input');
    console.log(pronounInput);

updateButtonP.addEventListener('click', () => {
    // post-click logic goes here

    const pronouns = textBoxP.value;
        console.log(pronouns);
        
        pronounInput.textContent = pronouns ;
})










