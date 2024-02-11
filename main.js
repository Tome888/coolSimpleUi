const arrBox = document.querySelectorAll('.box');
const burgerButton = document.querySelector('.btn');

const arrLines = document.querySelectorAll('.a');
console.log(arrLines)

const slideDiv = document.querySelector('.theBurgerSlideOff');

window.addEventListener('scroll', () =>{
    arrBox.forEach((box) => {
        let theParameter = box.getBoundingClientRect().bottom;
        const red = Math.random()*255
        const intRed = parseInt(red);

        const blue = Math.random()*255
        const intBlue = parseInt(blue);

        const green = Math.random()*255
        const intGreen = parseInt(green);

        if(theParameter < innerHeight){
            box.classList.add('boxAnimation');
            box.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
            
        }
        else{
            box.classList.remove('boxAnimation');
        }
    });
});


let tru = true
burgerButton.addEventListener('click', () => {
    if(tru === true){
        // burgerButton.style.backgroundColor = 'red'

        arrLines[0].classList.add('justAbarRotate');
        arrLines[1].classList.add('justAbar1None');
        arrLines[2].classList.add('justAba2Rotate');
        slideDiv.classList.add('theBurgerSlideOn')
       
        tru = false
    }
    else{
        // burgerButton.style.backgroundColor = ''

        arrLines[0].classList.remove('justAbarRotate');
        arrLines[1].classList.remove('justAbar1None');
        arrLines[2].classList.remove('justAba2Rotate');
        slideDiv.classList.remove('theBurgerSlideOn')
        
        tru = true
    }
});
