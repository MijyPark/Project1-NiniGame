window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas')
  canvas.style.backgroundImage = './ninisgame/images/background.jpg'

  const ctx = canvas.getContext('2d')

  const startBtn = document.querySelector('#start')
  const restartBtn = document.querySelector('#restart')

  const splashScreen = document.querySelector('.game-intro')
  const gameMain = document.querySelector('#game-main')
  const gameEnd = document.querySelector('#game-end')

  const playerImage = new Image()
  playerImage.src = './ninisgame/images/ninini.png'

  const sweetImage = new Image()
  sweetImage.src = './ninisgame/images/sweets.jpg'

 
  let isPlayerMovingLeft = false
  let isPlayerMovingRight = false
  let isPlayerMovingUp = false
  let isPlayerMovingDown = false

  let playerX = canvas.width / 2 - 25
  const playerY = canvas.height - 50 - 25
  const playerWidth = 50
  const playerHeight = 50
  let sweetY = 0
  let sweetX = 0
  const sweetWidth = 50
  const sweetHeight = 25

  let gameOver = false
  let animateId


  const drawPlayer = () => {
    ctx.beginPath()
    ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight)

    ctx.closePath()
  }
   
  const drawSweets = () => {
    ctx.beginPath()
    ctx.drawImage(sweetImage, sweetX, sweetY, sweetWidth, sweetHeight)
    ctx.closePath()
  }

  const drawScore = () => {
    ctx.beginPathe()
    ctx.drawImage 
  }
  const animate = () => {
    console.log('New frame')
    // Draw all my things
    ctx.clearRect(0,0,canvas.width, canvas.height)
    // Make a drawScore function to draw text
    drawPlayer()
    // Update player position
    console.log('Is moving left :', isPlayerMovingLeft)
    console.log('Is moving right :', isPlayerMovingRight)
    if (isPlayerMovingLeft && playerX > 0) {
      playerX -= 1
    } else if (isPlayerMovingRight && playerX < canvas.width - 50) {
      playerX += 1
    }
    console.log('Is moving up :', isPlayerMovingUp)
    console.log('Is moving down :', isPlayerMovingDown)
    if (isPlayerMovingUp && playerX > 0) {
      playerY -= 1
    } else if (isPlayerMovingDown && playerX < canvas.width - 50) {
      playerY += 1
    }

    drawSweets()

    if ( playerX < sweetX + sweetWidth &&
      playerX + playerWidth > sweetX &&
      playerY < sweetY + sweetHeight &&
     playerHeight + playerY > sweetY) {
        gameOver = true
      }

    sweetY += 1

    if (sweetY > canvas.height) {
      sweetY = -25
      sweetX += 50
      // Increment score
    }


    if (gameOver) {
      cancelAnimationFrame(animateId)
      const gameOverImage = new Image()
      gameOverImage.src = './ninisgame/images/Gameover.jpg'
    
      
    } else {
      // Make our function recursive
      animateId = requestAnimationFrame(animate)
    }
  }

  const startGame = () => {
    startBtn.style.display = 'none'
    splashScreen.style.display = "none"
    gameMain.style.display = 'block'

    animate()
  }

  startBtn.addEventListener('click', startGame)

  restartBtn.addEventListener('click', () => {
    window.location.reload()
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
      isPlayerMovingLeft = true
    }
    if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
      isPlayerMovingRight = true
    }
  })

  window.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
      isPlayerMovingLeft = false
    }
    if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
      isPlayerMovingRight = false
    }
  })

})