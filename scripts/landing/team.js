let teamSlideContainer = document.querySelector('.team .viewport .slider');
let teamSlideCount = document.querySelectorAll('.team .viewport .slider .slide').length;
let teamSlideWidth = teamSlideContainer.clientWidth / teamSlideCount;
let tmBTNs = document.querySelectorAll('.team button');
let teamPos = 0;
let teamSlideINDEX = 0;
let teamMoveToRight = true;
let teamLateClick = false
let teamAutoPlay = true;

tmBTNs[0].addEventListener('click', ()=>{
    teamLateClick = true;
    if(teamSlideINDEX != 0){
        teamPos += teamSlideWidth
        teamSlideINDEX--;
        teamSlideContainer.style.left = teamPos + "px";
    }
})

tmBTNs[2].addEventListener('click', ()=>{
    teamLateClick = true;
    if(teamSlideINDEX != teamSlideCount-1){
        teamPos -= teamSlideWidth;
        teamSlideINDEX++;
        teamSlideContainer.style.left = teamPos + "px"
    }
})

tmBTNs[1].addEventListener('click', ()=>{
    tmBTNs[1].classList.toggle('play')
    teamAutoPlay = !teamAutoPlay;
})

function goLeft(){
    if(teamSlideINDEX != 0){
        teamPos += teamSlideWidth
        teamSlideINDEX--;
        teamSlideContainer.style.left = teamPos + "px";
    }
}

function goRight(){
    if(teamSlideINDEX != teamSlideCount-1){
        teamPos -= teamSlideWidth;
        teamSlideINDEX++;
        teamSlideContainer.style.left = teamPos + "px"
    }
}

setInterval(()=>{
    if(teamAutoPlay){
        if(teamSlideINDEX == 0)
            teamMoveToRight = true;
        else if(teamSlideINDEX == teamSlideCount-1)
            teamMoveToRight = false;

        if(!teamLateClick){
            if(teamMoveToRight)
                goRight()
            else
                goLeft()
                
        }else
            teamLateClick = false
    }
}, 10000)