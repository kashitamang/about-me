// import functions


// grab DOM elements
const animalButton = document.getElementById('animal-button');
const animalDiv = document.getElementById('animal-div');
// set event listeners 


    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});