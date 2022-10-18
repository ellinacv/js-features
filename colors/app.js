const blocks = document.querySelectorAll('.block')

document.addEventListener('keydown', event => {
  if (event.code.toLowerCase() === 'enter') {
    setColors()
  }
})

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
    const text = block.querySelector('h2')
    const btn = block.querySelector('button ')
    const color = generateRandomColor()
  
    text.textContent = color
    block.style.background = color

    setTextColor(text, color)
    setTextColor(btn, color)
  })
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

window.addEventListener('DOMContentLoaded', () => {
  setColors()
})
