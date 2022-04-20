// import functions


// grab DOM elements
const animalButton = document.getElementById('animal-button');
const animalDiv = document.getElementById('animal-div');
// set event listeners 


    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

    //removes button hide
animalButton.classList.remove('hide-button');
    //event listener for clicking
animalButton.addEventListener('click', () => {
    //shows div
    animalDiv.classList.toggle('hide-div');
    animalButton.classList.toggle('hide-button');
});

