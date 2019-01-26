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

    const cakeImage = document.querySelector('.prices__cakeImage');
    if(size <= 22) {
        cakeSize.innerHTML = size + ' cm';
        cakeImage.src='img/offer/cake_layers_1.svg';
    } else {
        cakeSize.innerHTML = 'tort piętrowy';
        cakeImage.src='img/offer/cake_layers_2.svg';
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
const decoTypes = document.querySelectorAll('.prices__decoType');
decoTypes.forEach(decoType => {
    decoType.addEventListener('click', ()=> {
        disactiveDecos();
        deco = decoType.id;
        const currContainer = document.querySelector(`#${deco}`);
        currContainer.querySelector('img').src = currContainer.querySelector('img').src.slice(0, -4)+'_active.svg';
        const decoVis = document.querySelector(`#${deco}_vis`);
        console.log(deco)
        decoVis.classList.remove('prices__decoVisualization--hidden')
        if(deco === 'miniature') {
            minCountCont.classList.remove('form__priceContainer--hidden')
        } else {
            minCountCont.classList.add('form__priceContainer--hidden');
        }
    })
})


const disactiveDecos = () => {
    const allDecos = document.querySelectorAll('.prices__decoMiniature');
    allDecos.forEach(decoIcon => {
        decoIcon.src = decoIcon.src.replace('_active', '');
    });
    const allVis = document.querySelectorAll('.prices__decoVisualization');
    allVis.forEach(vis => {
        vis.classList.add('prices__decoVisualization--hidden')
    })
}

let minCount = 1;
const inputMin = minCountCont.querySelector('input');
inputMin.addEventListener('input', ()=> {
    if(inputMin.value > 1) {
        update(peopleCount, 20*(inputMin.value-1))
    }
})
