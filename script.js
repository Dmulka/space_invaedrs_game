// get gameBoard variable 
const grid = document.querySelector('.board')

const popText = document.getElementById('popText')

let currentShooterIndex = 292

let width = 15

let removedInvaders = []
 
const upperRowIndex = [0,1,2,3,4,5,6,7,8,9]

const alienInvaders = [0]
  //   0,1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,
  //   15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
  //   30,31,32,33,34,35,36,37,38,39,40,41,42,43,44
  // ]


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


///   ***shoote***



// 1. create shooter  Hhoose a grid square at the bottim.
squares[currentShooterIndex].classList.add('shooter')


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

// projectile  logic

    
   

function moveBlast(e) {
    let projectileIndex = currentShooterIndex
    let projectileID

    function moveProj() {
       // console.log(1,squares[projectileIndex].classList.value)
        squares[projectileIndex].classList.remove('projectile')
       // console.log(2,squares[projectileIndex].classList.value)
        projectileIndex -= width
        squares[projectileIndex].classList.add('projectile')
       console.log(3,squares[projectileIndex].classList.value)
       //console.log(projectileIndex)

            if (squares[projectileIndex].classList.contains('invader') ||       projectileIndex -15 < 0 ) {
                squares[projectileIndex].classList.remove('invader')
                squares[projectileIndex].classList.remove('projectile')
                clearInterval(projectileID)

                const invadersRemoved = alienInvaders.indexOf(projectileIndex)
                removedInvaders.push(invadersRemoved)
                console.log(removedInvaders)
                
           } 
           if (removedInvaders.length === alienInvaders.length){
            popText.classList.toggle('show')
            clearInterval(projectileID)

            


        } 
    }
switch(e.key){
    case 'ArrowUp':
        projectileID = setInterval(moveProj, 100)
    break
    } 
}
document.addEventListener('keydown', moveBlast)

