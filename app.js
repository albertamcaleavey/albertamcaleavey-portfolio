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

const taskFlowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

taskFlowObserver.observe(document.getElementById('task-flow'))

const cacheObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

cacheObserver.observe(document.getElementById('cache'))

const movieBuffObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow")
    }
  })
})

movieBuffObserver.observe(document.getElementById('movie-buff'))

const runTrackerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInRight", "animate__slow")
    }
  })
})

runTrackerObserver.observe(document.getElementById('run-tracker'))