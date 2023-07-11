let newsSlides = document.querySelectorAll('.news .sliderContainer .viewport .slider .slide')
let slideSize = newsSlides[0].clientWidth
let slider = document.querySelector('.news .sliderContainer .viewport .slider')
let leftBTN = document.querySelector('.news .sliderContainer button')
let newsIDX = 3
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
            endOfSlider = !(newsIDX <= 3)
        }

    if(!activateNews)
        leftBTN.setAttribute('disabled')
    else if(endOfSlider)
        leftBTN.style.transform = " translateY(-50%) rotate(180deg)"
    else
        leftBTN.style.transform = " translateY(-50%) rotate(0deg)"
})