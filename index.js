let currentSlide = 0;

document.body.innerHTML = buildSlider(3);

const slider = document.querySelector('.slider')
const holder = slider.querySelector('.slide-holder')
const track = holder.querySelector('.slide-track')

const [leftBtn, rightBtn] = slider.querySelectorAll('button')

leftBtn.onclick = slideLeft
rightBtn.onclick = slideRight

let timer = setInterval(slideRight, 2000)
slider.onmouseover = ()=> clearInterval(timer)
slider.onmouseout = ()=> timer = setInterval(slideRight, 2000)

function buildSlide() {
    return `
        <li class="slide">
            <h3>Header</h3>
            <div class="img"></div>
        </li>
    `
}

function buildSlider(length) {
    return `
        <div class="slider">
            <button></button>
            <div class="slide-holder">
                <ul class="slide-track">
                    ${buildSlide().repeat(length)}
                </ul>
            </div>
            <button></button>
        </div>
    `
}

function slideLeft() {
    if (currentSlide === 0) {
        track.prepend(track.lastElementChild)
        currentSlide++ ;
        holder.scroll({left: 460 * currentSlide})
    }
    currentSlide--
    holder.scroll({left: 460 * currentSlide, behavior: 'smooth'})
}

function slideRight() {
    if (currentSlide === track.children.length - 1) {
        track.append(track.firstElementChild)
        currentSlide-- ;
        holder.scroll({left: 460 * currentSlide})

    }
    currentSlide++
    holder.scroll({left: 460 * currentSlide, behavior: 'smooth'})
}
