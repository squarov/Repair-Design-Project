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
const btnOne = document.querySelector('.slider-button-one');
const btnTwo = document.querySelector('.slider-button-two');
const btnThree = document.querySelector('.slider-button-three');
const projectPic = document.querySelector('.img-slider');
const text = document.querySelector('.about-slider');
let currentIndex = 0;

const setPics = (index) => {
    text.innerText = projectPics[index].text;
    projectPic.style.backgroundImage = `url(${projectPics[index].img})`;
}

btnLeft.addEventListener('click', () => {
    setPics(currentIndex - 1);
    currentIndex -= 1;
})

btnRight.addEventListener('click', () => {
    setPics(currentIndex + 1);
    currentIndex += 1;
})

const itemOne = document.querySelector('.slider-item-one');
const itemTwo = document.querySelector('.slider-item-two');
const itemThree = document.querySelector('.slider-item-three');

itemOne.addEventListener('click', () => {
    setPics(currentIndex);
})

itemTwo.addEventListener('click', () => {
    setPics(currentIndex + 1);
})

itemThree.addEventListener('click', () => {
    setPics(currentIndex + 2);
})

// mobile slider

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const projectPic2 = document.querySelector('.img-slider2');
const prevMob = document.querySelector('.prev-mob');
const nextMob = document.querySelector('.next-mob');

const setPics2 = (index) => {
    text.innerText = projectPics[index].text;
    projectPic2.style.backgroundImage = `url(${projectPics[index].img})`;
}

prev.addEventListener('click', () => {
    setPics(currentIndex - 1);
    currentIndex -= 1;
})

next.addEventListener('click', () => {
    setPics(currentIndex + 1);
    currentIndex += 1;
})

prevMob.addEventListener('click', () => {
    setPics2(currentIndex - 1);
    currentIndex -= 1;
})

nextMob.addEventListener('click', () => {
    setPics2(currentIndex + 1);
    currentIndex += 1;
})