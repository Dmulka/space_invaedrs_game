
const grid = document.querySelector('.grid')

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }
  
  const squares = Array.from(document.querySelectorAll('.grid div'))
  
  const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]
  
  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
      }
    }
  
  draw()






// // get gameBoard variable 
// const gameBoard = document.querySelector('.gameBoard')

// // width of board 
// let width = 15

// // create variable for all the individual square - and make an array?

// const squares = Array.from(gameBoard.querySelectorAll('div'));

// // creates the divs for the 15 * 20 board 
//  for (let i=0; i < 300; i++){
// const square = document.createElement('div')
// gameBoard.appendChild(square)
// }

// //    ***invaders***

// // 1. arrrya the index positions the invaders will stat off iin
// const invadeArray = [0,1,2,3,4,5,6,7,8,9]

// // 2.  function that iterates over the invader index and passsed the value 
// // into the squares array.  Creates new class (invader)
// function makeInvader() {
//     for (let i = 0; i < invadeArray.length; i++) {
//       const squareIndex = invadeArray[i];
//       squares[squareIndex].classList.add('invader');
//     }
//   }
// invader movement logic   

// 1. define left edge (invaders sould start lef) in the invader array where is the first invader rekative to the left edge?

//const leftEdge = 

//2, define right. invader lenght -1 due to index nnumber.  last invades sould = lenth -1 

//3.  define movement downward

//4.  End game when in coontact with shoote.  If alienarray === shooter positioon end make?

//5. remove alien when hit 

///   ***shoote***

// 1. create shoote.  Hhoose a grid square at the bottim. 

// 2. deviine left 

//3.  define right 





