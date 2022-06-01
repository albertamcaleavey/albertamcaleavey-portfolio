const aboutMePicObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

aboutMePicObserver.observe(document.querySelector('.about-img-container'))

const aboutDescriptionPicObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

aboutDescriptionPicObserver.observe(document.querySelector('.about-description'))

aboutMePicObserver.observe(document.querySelector('.about-img-container'))

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeIn", "animate__slow")
    }
  })
})

skillsObserver.observe(document.getElementById('skills'))

// Task Flow --------------------------------

const taskflowImgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

taskflowImgObserver.observe(document.querySelector('.task-flow-img'))

const taskflowTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

taskflowTextObserver.observe(document.querySelector('.task-flow-text'))

// Cache --------------------------------

const cacheImgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

cacheImgObserver.observe(document.querySelector('.cache-img'))

const cacheTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

cacheTextObserver.observe(document.querySelector('.cache-text'))

// Movie Buff --------------------------------

const movieBuffImgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

movieBuffImgObserver.observe(document.querySelector('.movie-buff-img'))

const movieBuffTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

movieBuffTextObserver.observe(document.querySelector('.movie-buff-text'))

// Run Tracker --------------------------------

const movieBuffImgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

movieBuffImgObserver.observe(document.querySelector('.movie-buff-img'))

const movieBuffTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

movieBuffTextObserver.observe(document.querySelector('.movie-buff-text'))




