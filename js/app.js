//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
let board;
let turn;
let winner;
let tie;
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('#sqr');
const messageEl = document.querySelector('#message');
/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
