// --X-- 1) Define the required variables used to track the state of the game.

// --X-- 2) Store cached element references.

// --X-- 3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

// --X-- 4) The state of the game should be rendered to the user.

// --X-- 5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X';
let winner = false;
let tie = false;

let board = [
    '','','',
    '','','',
    '','',''
    ];

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtmEl = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
    board.forEach((square, index) => {
        if (square === 'X') {
            squareEls[index].innerText = 'X';
        } else if (square === 'O') {
            squareEls[index].innerText = 'O';
        }
        console.log(squareEls[index]);
    });
};

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = 'It\'s X\'s go!';
    } else if (winner === false && tie === true) {
        messageEl.textContent = 'It\'s a tie!';
    } else {
        messageEl.textContent = 'X wins!';
    };
};

squareEls.forEach((square, index) => {
    square.addEventListener('click', (event) => {
        handleClick(event, index);
    });
    console.log('click');
});

const handleClick = (event, index) => {
  const square = event.target;

  if (board[index] !== '') {
    return;
  };

  const currentPlayer = turn;
  square.innerText = turn;
  board[index] = currentPlayer;
  square.innerText = currentPlayer;

  checkForWinner();
  checkForTie();

  if (winner === false && tie === false) {
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    };
  };
};


const checkForWinner = () => {
    for (const combo of combos) {
        const [a, b, c ] = combo;
        if (board[a] && board[a] == board[b] && board[a] === board[c]) {
            winner = true;
            return;
        };
    };
};

const checkForTie = () => {
    if (board.every((square) => square !== '') && winner === false) {
        tie = true;
    };
};

const render = () => {
  updateBoard();
  updateMessage();
};

const init = () => {
  render();
};

init();


/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('click', updateBoard);
document.addEventListener('click', init);