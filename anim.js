window.addEventListener('scroll',function () {
    var element = this.document.querySelector('.grid-item1')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll',function () {
    var element = this.document.querySelector('.grid-item3')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll',function () {
    var element = this.document.querySelector('.grid-item2')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll',function () {
    var element = this.document.querySelectorAll('.review-anim')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.opacity=1;
    } else {
        element.opacity=0;
    }
})