// get gameBoard variable 
const grid = document.querySelector('.board')

let currentShooterIndex = 292

let width = 15
 
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,
    15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,40,41,42,43,44
  ]


for (let i = 0; i < 300; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }
  
  const squares = Array.from(document.querySelectorAll('.board div'))
  
  
  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
      }
    }
  
  draw()








// width of board 


// create variable for all the individual square - and make an array?

//    ***invaders***

// 1. arrrya the index positions the invaders will stat off iin


// 2.  function that iterates over the invader index and passsed the value 
// into the squares array.  Creates new class (invader)



// invader movement logic   

// 1. define left edge (invaders sould start lef) in the invader array where is the first invader rekative to the left edge?


//2, define right. invader lenght -1 due to index nnumber.  last invades sould = lenth -1 

//3.  define movement downward

//4.  End game when in coontact with shoote.  If alienarray === shooter positioon end make?

//5. remove alien when hit 

///   ***shoote***



// 1. create shooter  Hhoose a grid square at the bottim.
squares[currentShooterIndex].classList.add('shooter')

//const shooterArray = [285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299]


 function moveShooterLeft() {
 if (currentShooterIndex % width !== 0){
    squares[currentShooterIndex].classList.remove('shooter')
    currentShooterIndex --;
    squares[currentShooterIndex].classList.add('shooter')
    }
 }
function moveShooterRight() {
if ((currentShooterIndex + 1) % width !==0){
    squares[currentShooterIndex].classList.remove('shooter')
    currentShooterIndex ++
    squares[currentShooterIndex].classList.add('shooter')
    }
}
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          moveShooterLeft();
        } else if (event.key === 'ArrowRight') {
          moveShooterRight();
        }
      });

// projectile 
function blaster {

}





