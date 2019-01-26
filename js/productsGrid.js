const allCells = document.querySelectorAll('.productsGrid__cell');
const toggleDescrption = (parent) => {
    parent.classList.toggle('productsGrid__cell--active')
}
allCells.forEach(cell => {
    cell.addEventListener('click', ()=> toggleDescrption(cell))
})
