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
    var element = this.document.querySelector('.reviews')
    var position = element.getBoundingClientRect();

    var elementHeight = position.height || element.offsetHeight;

    var visibleTop = Math.max(position.top, 0);
    var visibleBottom = Math.min(position.bottom, window.innerHeight);
    var visibleHeight = visibleBottom - visibleTop;

    if (visibleHeight >= elementHeight / 2) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
})

window.addEventListener('scroll',function () {
    var element = this.document.querySelector('.review-header')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll',function () {
    var element = this.document.querySelector('.contact-button')
    var position = element.getBoundingClientRect();

    if(position.top < this.window.innerHeight && position.bottom >=0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".branding-header");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            header.classList.add("animate-border");
            observer.unobserve(header);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (header) {
      observer.observe(header);
    }
  });



window.addEventListener("load", function () {
    document.querySelector(".header-buttons-container").classList.add("fade-in");
    document.querySelector(".welcome-text-container").classList.add("fade-in");
});

window.addEventListener('load', () => {
    const inners = document.querySelectorAll('.slide-up-inner');
    inners.forEach((inner, index) => {
      setTimeout(() => {
        inner.classList.add('visible');
      }, index * 100);
    });
  });