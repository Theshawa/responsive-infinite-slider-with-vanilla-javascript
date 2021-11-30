// Get Elements from DOM
const wrapper = document.querySelector('.slider__wrapper')
const slider = document.querySelector('.slider')
let slides = document.querySelectorAll('.slide')
let sliderWidth, slideWidth, newSlides, index


const initProperties = () => {
    newSlides = slides
    sliderWidth = slider.getBoundingClientRect().width
    slideWidth = sliderWidth / newSlides.length
    index = 0
}


const reset = () => {
    slider.style.transform = `translate3d(0,0,0)`
    slider.innerHTML = ''
    addSlides()
    initProperties()
}

const addSlides = () => {

    slides.forEach(slide => {
        const li = document.createElement('li')
        li.className = slide.className
        li.innerHTML = slide.innerHTML
        slider.append(li)
        newSlides = [...newSlides, slide]
    })


}
const slide = () => {
    slider.style.transform = `translate3d(-${slideWidth * index}px,0,0)`
    index += 1
    if (index === newSlides.length - 4) {
        addSlides()
    }
}



initProperties()
const timer = setInterval(slide, 2000)
window.onresize = reset;
