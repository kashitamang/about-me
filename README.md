## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
//see wirefram_about-me.jpg
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
-header 
-main 
    -div 
    -img (optional)
    -p
    -button
    -answer
-footer (optional)
-link to other files such as js or css
1. **For each HTML element ask: Why do I need this?**
-header: so the user knows what they are looking at
-main: so we can add content to the page 
    -div: so we have somewhere to add the content of the page 
    -img (optional): to add to positive user experience
    -p: so the user can read the message we are trying to get across
    -button: so the user can interact with the app 
    -answer: so the user can retrieve an answer 
-footer (optional): so the user knows who made the content
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
-header: use "!" to initiate html body 
-main 
    -div: 1 div for the main content using < div > with ID of "about me"
    -img (optional) sing < img > and linking from directory 
    -button using < button > tag with a ID of "button" and text saying "can you guess my favorite animal?"
    -answer use a < h1 > elements with an id of "fav-animal" and text os "can you guess my favorite animal?"
-footer (optional) "aspiring software engineer 2022" 
-link to other files such as js or css 
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
Objective: when user clicks the button, the button becomes hidden and the fav-animal element appears
-grab dom element of "fav-animal" and "button" using "getElementByID"
- us ".addEventListener" to the button to listen for clicks and replace button with fav-animal element. 
    -use inputs.classList.toggle('hide') to hide the button
    -grab DOM element of favAnimal and toggle the hiding button
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
in order to have event listeners i need to give my buttons, the fav-animal classes or ID's 
-in order to hide something, i need to add a class to the hidden element, tag it in css and call a "display: none;" arguement
-in order to grab a div by element id each div needs an ID 

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
