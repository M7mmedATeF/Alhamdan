let form = document.querySelector('.cvForm')
let overlay = document.querySelector('.cvForm .overlay')
let BTN = document.querySelector('.join .connection button')

function hide(){
    form.classList.toggle('hidden')
}

overlay.addEventListener('click', hide)
BTN.addEventListener('click', hide)

// adding file input
let cvCTRL = document.querySelector('.cvForm .formControl.file')
let cvPrev = document.querySelector('#cvPrev')
let cvINP = document.querySelector('.cvForm .cvINP')
cvINP.addEventListener('change', setFile)

function setFile(e){
    let file = e.target.files[0]
    console.log(file);
    if(file){
        cvCTRL.classList.add('added')
        let cv = `<div class="fileView">
            <p>${file.name}</p>
            <button onclick="clearFile()">x</button>
        </div>`
        
        cvPrev.innerHTML = cv;
    }else{
        cvCTRL.classList.remove('added')
        cvINP.files = []
    }
}

function clearFile(){
    console.log('clicked');
    cvCTRL.classList.remove('added')
    cvINP.value = ""
}