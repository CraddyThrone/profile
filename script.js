


let socialsAll = document.querySelector('.socials__all')
let linksWindowClose = document.querySelector('.links-window__close')

socialsAll.addEventListener('click', function() {
    let linksWindow = document.querySelector('.links-window')
    linksWindow.classList.add('links-window--active')
})

linksWindowClose.addEventListener('click', function() {
    let linksWindow = document.querySelector('.links-window')
    linksWindow.classList.remove('links-window--active')
})




let socialsHours = document.querySelector('.socials__hours')
let socialsMinutes = document.querySelector('.socials__minutes')
let socialsSeconds = document.querySelector('.socials__seconds')

let socialsDay = document.querySelector('.socials__day')
let socialsMonth = document.querySelector('.socials__month')

let nowDay = new Date()
socialsDay.textContent = nowDay.getDate()

switch (nowDay.getMonth()) {
    case 0:
        socialsMonth.textContent = 'янв.'
        break
    case 1:
        socialsMonth.textContent = 'фев.'
        break
    case 2:
        socialsMonth.textContent = 'мар.'
        break
    case 3:
        socialsMonth.textContent = 'апр.'
        break
    case 4:
        socialsMonth.textContent = 'мая'
        break
    case 5:
        socialsMonth.textContent = 'июн.'
        break
    case 6:
        socialsMonth.textContent = 'июл.'
        break
    case 7:
        socialsMonth.textContent = 'авг.'
        break
    case 8:
        socialsMonth.textContent = 'сен.'
        break
    case 9:
        socialsMonth.textContent = 'окт.'
        break
    case 10:
        socialsMonth.textContent = 'ноя.' 
        break
    case 11:
        socialsMonth.textContent = 'дек.'
        break
}



setInterval(function() {

    let now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    socialsHours.textContent = `${hours}`
    socialsMinutes.textContent = `${minutes}`
    socialsSeconds.textContent = `${seconds}`

}, 1000)
 
let sliderLeft = document.querySelector('.slider__left')
let sliderRight = document.querySelector('.slider__right')
let sliderTrack = document.querySelector('.slider__track')

let scrollWidth

if (window.innerWidth <= 580) {
    scrollWidth = 350
} else {
    scrollWidth = 450
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 580) {
        scrollWidth = 350
    } else {
        scrollWidth = 450
    }
})

let order = 1

sliderLeft.addEventListener('click', function() {
    let counter = 0;

    console.log(scrollWidth)

    if (order > 1) {
        setInterval(function() {
            if (counter < scrollWidth) {
    
                let margin = getComputedStyle(sliderTrack).marginLeft
                let parseMargin = parseInt(margin)
    
                sliderTrack.style.marginLeft = parseMargin + 5 + 'px'
                counter = counter + 5
            }
        }, 1)

        order = order - 1
    
    }
    
    
})


sliderRight.addEventListener('click', function() {
    let counter = 0;
    console.log(scrollWidth)

    if (order < 1) {
        setInterval(function() {

            if (counter < scrollWidth && (order < 1)) {
    
                let margin = getComputedStyle(sliderTrack).marginLeft
                let parseMargin = parseInt(margin)
    
                sliderTrack.style.marginLeft = parseMargin - 5 + 'px'
                counter = counter + 5
            }
        }, 1)

        order = order + 1
    }
   

    
})
