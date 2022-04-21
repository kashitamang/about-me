// import functions


// grab DOM elements

    //yak
const yakButton = document.getElementById('yak-button');
const yakDiv = document.getElementById('yak-div');

    //vulture
const vultureButton = document.getElementById('vulture-button');
const vultureDiv = document.getElementById('vulture-div');

//monkey
const monkeyButton = document.getElementById('monkey-button');
const monkeyDiv = document.getElementById('monkey-div');

//guess again button
const guessAgainButton = document.getElementById('guess-again-button');
// set event listeners 


    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

// yak event listeners

    //removes yak button-hider as a default
yakButton.classList.remove('hide-yak-button');
    //event listener for clicking the yak button
yakButton.addEventListener('click', () => {
    //shows CORRECT ANSWER div: yak 
    yakDiv.classList.toggle('hide-yak-div');
    //hides yak button
    yakButton.classList.toggle('hide-yak-button');
    //hides monkey button 
    monkeyButton.classList.toggle('hide-monkey-button');
    //hides vulture button 
    vultureButton.classList.toggle('hide-vulture-button');
});

// vulture event listeners

    //removes the vulture button-hider as a default 
vultureButton.classList.remove('hide-vulture-button');
    //event listener for clicking the vulture button
vultureButton.addEventListener('click', () => {
    //shows INCORRECT ANSWER div: vulture
    vultureDiv.classList.toggle('hide-vulture-div');
    //hides vulture button
    vultureButton.classList.toggle('hide-vulture-button');
    //hides monkey button
    monkeyButton.classList.toggle('hide-monkey-button');
    //hides yak button
    yakButton.classList.toggle('hide-yak-button');
    //shows guess again button
    guessAgainButton.classList.toggle('hide-guess-again-button');
});

// monkey event listeners

    //removes button hide
monkeyButton.classList.remove('hide-monkey-button');
    //event listener for clicking
monkeyButton.addEventListener('click', () => {
    //shows INCORRECT ANSWER div
    monkeyDiv.classList.toggle('hide-monkey-div');
    //hides monkey button
    monkeyButton.classList.toggle('hide-monkey-button');
    //hide vulture button
    vultureButton.classList.toggle('hide-vulture-button');
    //hides yak button
    yakButton.classList.toggle('hide-yak-button');
    //shows guess again button
    guessAgainButton.classList.toggle('hide-guess-again-button');
});

