// const aboutSection = document.getElementById('about')

const observer = new IntersectionObserver(sections => {
  sections.forEach(section => {
    if (section.isIntersecting) {
      section.target.classList.add('"animate__animated", "animate__slideInLeft"')
    }
  })
});

observer.observe(document.querySelector('.project-section'));
// Tell the observer which elements to track