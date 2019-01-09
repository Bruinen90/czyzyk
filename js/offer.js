const squares = document.querySelectorAll('.offer__square');
const clickedSquare = (square) => {
    document.querySelector('.offer__container').classList.add('offer__container--folded');
    document.querySelector('.offer').classList.add('offer--folded');
    squares.forEach(square => square.classList.add('offer__square--folded'));
    disactiveUnclicked(square.id);
    colourIcon(square.id);
}
squares.forEach(square => {
    square.addEventListener('click', () => clickedSquare(square))
})

const categories = document.querySelectorAll('.category');
const images = document.querySelectorAll('.offer__draw')

const disactiveUnclicked = (exceptId) => {
    images.forEach(image => {
        image.src = image.src.replace('_colour', '');
    })
    categories.forEach(category => {
        if(category.id !== 'cat__'+exceptId) {
            category.classList.add('category--hidden')
        } else {
            category.classList.remove('category--hidden')
        }
    })
}

const colourIcon = (categoryId) => {
    const image = document.querySelector('#'+categoryId)
    .querySelector('img')
    image.src = image.src.slice(0, -4)+ '_colour.svg';
}

disactiveUnclicked();
