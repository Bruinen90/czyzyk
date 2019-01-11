const range = document.querySelector('.form__range');
const number = document.querySelector('.form__number');
const priceContainer = document.querySelector('#cenaTortu');
const cakeSize = document.querySelector('#cakeSize');

const update = (people, extra = 0) => {
    priceContainer.innerHTML = people*10 + extra + ' zł';
    let size;
    switch (true) {
        case (people < 16):
            size = 16;
            break;
        case (people < 20):
            size = 18;
            break;
        case (people < 25):
            size = 20;
            break;
        case (people < 35):
            size = 22;
            break;
        case (people >= 35):
            size: 'tort piętrowy'
            break;
    }
    if(size <= 22) {
        cakeSize.innerHTML = size + ' cm';
    } else {
        cakeSize.innerHTML = 'tort piętrowy';
    }

}

let peopleCount = 9;
range.value = number.value = peopleCount;
update(peopleCount)



range.addEventListener('input', ()=> {
    peopleCount = range.value;
    number.value = peopleCount;
    update(peopleCount)
})

number.addEventListener('input', ()=> {
    peopleCount = number.value;
    range.value = peopleCount;
    update(peopleCount)
})

let deco = 'dekoracja_kwiatowa';
const minCountCont = document.querySelector('#iloscFigurek');
const decoTypes = document.querySelectorAll('.cennik__decoType');
decoTypes.forEach(decoType => {
    decoType.addEventListener('click', ()=> {
        deco = decoType.id;
        if(deco === 'figurka') {
            minCountCont.classList.remove('form__priceContainer--hidden')
        } else {
            minCountCont.classList.add('form__priceContainer--hidden');
        }
    })
})

let minCount = 1;
const inputMin = minCountCont.querySelector('input');
inputMin.addEventListener('input', ()=> {
    if(inputMin.value > 1) {
        update(peopleCount, 20*(inputMin.value-1))
    }
})
