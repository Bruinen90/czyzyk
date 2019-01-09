const squares = document.querySelectorAll('.offer__square');
const clickedSquare = (square) => {
    document.querySelector('.offer__container').classList.add('offer__container--folded');
    document.querySelector('.offer').classList.add('offer--folded');
    squares.forEach(square => square.classList.add('offer__square--folded'));
    hideAllCategories(square.id);
}
squares.forEach(square => {
    square.addEventListener('click', () => clickedSquare(square))
})

const categories = document.querySelectorAll('.category');

const hideAllCategories = (exceptId) => {
    categories.forEach(category => {
        if(category.id !== 'cat__'+exceptId) {
            category.classList.add('category--hidden')
        } else {
            category.classList.remove('category--hidden')
        }
    })
}

hideAllCategories();
