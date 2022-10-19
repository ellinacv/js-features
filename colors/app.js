const blocks = document.querySelectorAll('.block')

document.addEventListener('keydown', event => {
  event.preventDefault()
  if (event.code.toLowerCase() === 'enter') {
    setColors()
  }
})

document.addEventListener('click', event => {
  const type = event.target.dataset.type

  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target 
      : event.target.children[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
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
    const isLocked = block.querySelector('i').classList.contains('fa-lock')
    const text = block.querySelector('h2')
    const btn = block.querySelector('button')
    const color = generateRandomColor()

    if (isLocked) {
      return
    }
  
    text.textContent = color
    block.style.background = color

    setElementTextColor(text, color)
    setElementTextColor(btn, color)
  })
}

function setElementTextColor(element, color) {
  const luminance = chroma(color).luminance()
  element.style.color = luminance > 0.5 ? 'black' : 'white'
}

window.addEventListener('DOMContentLoaded', () => {
  setColors()
})
