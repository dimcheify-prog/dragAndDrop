const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

document.addEventListener('dragstart', dragStart)
document.addEventListener('dragend', dragEnd)

function dragStart(e) {
  setTimeout(() => {
    e.target.classList.add('hide')
  })
}

function dragEnd(e) {
  e.target.className = 'item'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.target.classList.add('hovered')
}

function dragLeave(e) {
  e.target.classList.remove('hovered')
}

function dragDrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}
