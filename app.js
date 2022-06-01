const taskFlowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft")
    }
  })
});

taskFlowObserver.observe(document.getElementById('task-flow'));

const cacheObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInRight")
    }
  })
});

cacheObserver.observe(document.getElementById('cache'));

const movieBuffObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft")
    }
  })
});

movieBuffObserver.observe(document.getElementById('movie-buff'));

const runTrackerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInRight")
    }
  })
});

runTrackerObserver.observe(document.getElementById('run-tracker'));