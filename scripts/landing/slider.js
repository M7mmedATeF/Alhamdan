let newsSlides = document.querySelectorAll('.news .sliderContainer .viewport .slider .slide')
let slideSize = newsSlides[0].clientWidth
let slider = document.querySelector('.news .sliderContainer .viewport .slider')
let leftBTN = document.querySelector('.news .sliderContainer button')
let newsIDX = 3
let initialVal = 3;
let pos = 0;
const activateNews = !(newsSlides.length <= 3)
let endOfSlider = (newsIDX >= newsSlides.length)
let sliderWidth = slider.clientWidth

leftBTN.addEventListener('click', ()=>{
    if(activateNews)
        if(!endOfSlider){
            newsIDX++;
            pos -= slideSize;
            slider.style.left = (pos) + "px"
            endOfSlider = (newsIDX >= newsSlides.length)
        }else{
            newsIDX--;
            pos += slideSize;
            slider.style.left = (pos) + "px"
            endOfSlider = !(newsIDX <= initialVal)
        }

    if(!activateNews)
        leftBTN.setAttribute('disabled')
    else if(endOfSlider)
        if(screen.width <= 425)
            leftBTN.style.transform = " rotate(180deg)"
        else
            leftBTN.style.transform = " rotate(180deg)"
    else
        if(screen.width <= 425)
                leftBTN.style.transform = " rotate(0deg)"
            else
                leftBTN.style.transform = " rotate(0deg)"
})

// init num of posts per screen
if(screen.width <= 425){
    newsIDX = 1;
    initialVal = 1;
}