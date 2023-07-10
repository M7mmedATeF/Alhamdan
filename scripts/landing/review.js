let sliderContainer = document.querySelector('.clients .viewport .slider');
let clientSlideCount = document.querySelectorAll('.clients .viewport .slider .slide').length;
let clientSlideWidth = sliderContainer.clientWidth / clientSlideCount;
let BTNs = document.querySelectorAll('.clients button');
let clientPos = 0;
let slideINDEX = 0;
let moveToRight = true;
let lateClick = false
let autoPlay = true;

BTNs[0].addEventListener('click', ()=>{
    lateClick = true;
    if(slideINDEX != 0){
        clientPos += clientSlideWidth
        slideINDEX--;
        sliderContainer.style.left = clientPos + "px";
    }
})

BTNs[1].addEventListener('click', ()=>{
    lateClick = true;
    if(slideINDEX != clientSlideCount-1){
        clientPos -= clientSlideWidth;
        slideINDEX++;
        sliderContainer.style.left = clientPos + "px"
    }
})

BTNs[2].addEventListener('click', ()=>{
    BTNs[2].classList.toggle('play')
    autoPlay = !autoPlay;
})

function goLeft(){
    if(slideINDEX != 0){
        clientPos += clientSlideWidth
        slideINDEX--;
        sliderContainer.style.left = clientPos + "px";
    }
}

function goRight(){
    if(slideINDEX != clientSlideCount-1){
        clientPos -= clientSlideWidth;
        slideINDEX++;
        sliderContainer.style.left = clientPos + "px"
    }
}

setInterval(()=>{
    if(autoPlay){
        if(slideINDEX == 0)
            moveToRight = true;
        else if(slideINDEX == clientSlideCount-1)
            moveToRight = false;

        if(!lateClick){
            if(moveToRight)
                goRight()
            else
                goLeft()
                
        }else
            lateClick = false
    }
}, 10000)