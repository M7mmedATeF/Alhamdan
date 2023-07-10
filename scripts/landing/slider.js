let slideSize = document.querySelector('.news .sliderContainer .viewport .slider .slide').clientWidth
let slider = document.querySelector('.news .sliderContainer .viewport .slider')
let leftBTN = document.querySelector('.news .sliderContainer button')
let pos = 0;
let endOfSlider = false
let sliderWidth = slider.clientWidth

leftBTN.addEventListener('click', ()=>{
    if(!endOfSlider){
        pos -= slideSize;
        slider.style.left = (pos) + "px"
        endOfSlider = (sliderWidth+pos <= 2 * slideSize)
    }else{
        pos += slideSize;
        slider.style.left = (pos) + "px"
        endOfSlider = (sliderWidth+pos < sliderWidth)
    }

    if(endOfSlider)
        leftBTN.style.transform = " translateY(-50%) rotate(180deg)"
    else
        leftBTN.style.transform = " translateY(-50%) rotate(0deg)"
})