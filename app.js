// import functions


// grab DOM elements

    //yak
const yakButton = document.getElementById('yak-button');
const yakDiv = document.getElementById('yak-div');

    //vulture
const vultureButton = document.getElementById('vulture-button');
const vultureDiv = document.getElementById('vulture-div');
// set event listeners 


    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

// yak event listeners

    //removes button hide
yakButton.classList.remove('hide-yak-button');
    //event listener for clicking
yakButton.addEventListener('click', () => {
    //shows div
    yakDiv.classList.toggle('hide-yak-div');
    yakButton.classList.toggle('hide-yak-button');
});

// vulture event listeners

    //removes button hide
    vultureButton.classList.remove('hide-vulture-button');
    //event listener for clicking
vultureButton.addEventListener('click', () => {
    //shows div
    vultureDiv.classList.toggle('hide-vulture-div');
    vultureButton.classList.toggle('hide-vulture-button');
});