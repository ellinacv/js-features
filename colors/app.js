const blocks = document.querySelectorAll('.block')

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF'
  let color = ''

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color
}

function setColors() {
  blocks.forEach ((block) => {
    block.style.background = generateRandomColor()
  })
}

window.addEventListener('DOMContentLoaded', () => {
  setColors()
})
