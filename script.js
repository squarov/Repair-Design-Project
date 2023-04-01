let currentIndex = 0;
const projectPics = [
    {
        text: 'Rostov-on-Don LCD admiral',
        img: 'img/admiral.jpg'
    },
    {
        text: 'Sochi Thieves',
        img: 'img/sochi-thieves.jpg'
    },
    {
        text: `Rostov-on-Don Patriotic`,
        img: 'img/rostov-on-don.jpg'
    }
];

const btnLeft = document.querySelector('.block-switch-left');
const btnRight = document.querySelector('.block-switch-right');

const itemOne = document.querySelector('.slider-item-one');
const itemTwo = document.querySelector('.slider-item-two');
const itemThree = document.querySelector('.slider-item-three');

const projectPic = document.querySelector('.img-slider');
const text = document.querySelector('.about-slider');

const btnOne = document.querySelector('.slider-button-one');
const btnTwo = document.querySelector('.slider-button-two');
const btnThree = document.querySelector('.slider-button-three');
const btnArr = [btnOne, btnTwo, btnThree];

const setPics = (i) => {
    text.innerText = projectPics[i].text;
    projectPic.style.backgroundImage = `url(${projectPics[i].img})`;
    document.querySelectorAll('.slider-button').forEach(btnSlide => btnSlide.classList.remove('slider-button-check'));
    document.querySelector(`.slider-button[data-slide="${i}"]`).classList.add('slider-button-check');
    document.querySelectorAll('.slider-item').forEach(itemSlide => itemSlide.classList.remove('slider-item-active'));
    document.querySelector(`.slider-item[data-slide="${i}"]`).classList.add('slider-item-active');
}

btnLeft.addEventListener('click', () => {
    setPics(currentIndex - 1);
    currentIndex--;
})

btnRight.addEventListener('click', () => {
    setPics(currentIndex + 1);
    currentIndex++;
})

itemOne.addEventListener('click', () => {
    setPics(currentIndex);
})

itemTwo.addEventListener('click', () => {
    setPics(currentIndex + 1);
})

itemThree.addEventListener('click', () => {
    setPics(currentIndex + 2);
})

btnOne.addEventListener('click', () => {
    setPics(currentIndex);
})

btnTwo.addEventListener('click', () => {
    setPics(currentIndex + 1);
})

btnThree.addEventListener('click', () => {
    setPics(currentIndex + 2);
})

// table slider

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    setPics(currentIndex - 1);
    currentIndex--;
})

next.addEventListener('click', () => {
    setPics(currentIndex + 1);
    currentIndex++;
})


// mobile slider

const projectPic2 = document.querySelector('.img-slider2');
const prevMob = document.querySelector('.prev-mob');
const nextMob = document.querySelector('.next-mob');

const setPics2 = (i) => {
    text.innerText = projectPics[i].text;
    projectPic2.style.backgroundImage = `url(${projectPics[i].img})`;
}

prevMob.addEventListener('click', () => {
    setPics2(currentIndex - 1);
    currentIndex -= 1;
})

nextMob.addEventListener('click', () => {
    setPics2(currentIndex + 1);
    currentIndex += 1;
})