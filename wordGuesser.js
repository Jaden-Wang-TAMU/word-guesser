 //var is used to define any variable, we're going to be more specific
//Most string methods are the same

let fiveLetterWords=[
    'APPLE',
    'BAKES',
    'COUNT',
    'DRIVE',
    'EXIST',
    'FAKER',
    'GREAT',
    'HELLO',
    'IDIOT',
    'JOKES',
    'LEVER',
    'MONEY',
    'NICER',
    'OWNER',
    'PACKS',
    'QUEEN',
    'RACER',
    'SNAKE',
    'TRUCK',
    'UNDER',
    'WAVES',
    'XENON',
    'YACHT',
    'ZEBRA',    
];

let currentWord='';

let tries=1;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('guess-button').addEventListener('click', ()=>{
        guess();
    }); /**() means that it's calling a function without parameters */

    document.getElementById('new-game').addEventListener('click', () => {
        startGame();
    });

    startGame(); /**When the page is done loading, immediately call startGame */
});


/**
 * Start the game
 * 
 * Get a random word and save it to currentWord
 * Blank out guess text area
 * Black out guesses div
*/
function startGame() {
    // document.getElementById('guess').value.toUpperCase(); /**Gets the guess */
    // document.getElementById('guesses').innerHTML;
    let x=Math.floor(Math.random()*fiveLetterWords.length)
    currentWord=fiveLetterWords[x]
    document.getElementById('guess').value=""
    document.getElementById('guesses').textContent=""
    tries=1
}


/**
 * Handle a guess
 * 
 * Read the guess
 * Compare the guess to currentWord
 * Append to guesses div
 * Check if win
 */

/**
 * guess(someParam, anotherParam) no types needed for parameters
 */
function guess() {
    if (tries<=10){
        temp=document.getElementById('guess').value.toUpperCase()
        if(temp.length<=5)
        {
            if(temp==currentWord)
            {
                alert('You Win!')
            }
            else if(tries==10){
                alert('You Lose!')
            }
            document.getElementById('guesses').innerHTML+=tries+". "
            for (let i=0; i<temp.length; i++)
            {
                if (temp[i]==currentWord[i]){
                    // document.getElementById('guesses').append(`<span style='color: green;'>`+temp[i]+`</span>`);
                    document.getElementById('guesses').innerHTML+=("<span style='color: green;'>"+temp[i]+"</span>");
                }
                else if(currentWord.includes(temp[i])){
                    document.getElementById('guesses').innerHTML+=("<span style='color: orange;'>"+temp[i]+"</span>");
                }
                else{
                    document.getElementById('guesses').innerHTML+=("<span style='color: red;'>"+temp[i]+"</span>");
                }
            }
            document.getElementById('guesses').innerHTML+="\n"
            tries+=1
        }
    }   
}
