const box = document.querySelector('.box')
const box2 = document.querySelector('.box2')
const container = document.querySelector('.container')

box.addEventListener('mouseenter', () => container.classList.add('hover-left'))
box.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

box2.addEventListener('mouseenter', () => container.classList.add('hover-right'))
box2.addEventListener('mouseleave', () => container.classList.remove('hover-right'))