const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: .00007,
  multiplier: 3,
});

gsap.registerPlugin(ScrollTrigger)
const hero = document.querySelector('.hero-section')
const heroImg = document.querySelector('.hero-section img')

gsap.to(heroImg, {
  y: 120,
  duration: 1,
  scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
})





const about = document.querySelector('.about-section')
const aboutImg = document.querySelector('.about-section img')
const aboutMagneticButton = document.querySelector('.about-section .magnetic-button-container')
gsap.fromTo(aboutImg, 
  {y: -100}, 
  {
    y: 100, 
    duration: 1, 
    scrollTrigger: {
      trigger: about,
      start: "top center",
      end: "bottom top",
      scrub: true
    }
  })

gsap.from(aboutMagneticButton, {
  x: 300,
  duration: 1,
  scrollTrigger: {
    trigger: about,
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
})


const projects = document.querySelectorAll('.project')
const projectsOverlay = document.querySelectorAll('.project .overlay')
const projectDisplay = document.querySelector('.project-display')
const projectsContainer = document.querySelector('.projects')
const projectDisplayContainer = document.querySelector('.project-display > div')

const projectsInfo = [
  {img: "cocopow.webp", bg: "#ddd", name: "cocopow"},
  {img: "nomnom.webp", bg: "#f5f5dc", name: "nomnom"},
  {img: "sinetambayan.webp", bg: "#333", name: "SineTambayan"},
]
projectsInfo.forEach(project => {
  projectDisplayContainer.innerHTML += `
    <a href="https://netkopi.github.io/${project.name}" target="_blank" class="img-container" style="background-color: ${project.bg};">
        <img src="images/${project.img}" alt="">
        <span  class="project-link">view</span>
    </a>
  `
})

projects.forEach((project, i) => {

  project.addEventListener('mousemove', (e) => {

    gsap.to(project, {
      scale: .95,
      duration: 1,
      ease: Power4.easeOut
    })

    gsap.to(projectDisplayContainer, {
      "--y": -300 * i,
      duration: 1,
      ease: Power4.easeOut
    })

})

  project.addEventListener('mouseleave', () => {
    gsap.to(project, {
      scale: 1,
      duration: 1,
      ease: Power4.easeOut
    })
  })

})

projectsContainer.addEventListener('mousemove', (e) => {

  const mx = e.pageX - projectsContainer.offsetLeft
  const my = e.pageY - projectsContainer.offsetTop

  projectDisplay.style.setProperty('--x', mx + 'px')
  projectDisplay.style.setProperty('--y', my + 'px')
})



const magneticButton = document.querySelectorAll(".magnetic-button")
const magneticButtonText = document.querySelectorAll(".magnetic-text")
const circleMagneticButton = document.querySelectorAll('.circle-magnetic-button')
circleMagneticButton.forEach(button => {
  
  button.addEventListener('mouseenter', () => {
    gsap.fromTo(magneticButton, {"--y": "100%"}, {"--y": "0%", duration: 1, ease: Power4.easeOut})
  })
  button.addEventListener('mouseleave', () => {
    gsap.fromTo(magneticButton, {"--y": "0%"}, {"--y": "-150%", duration: 1, ease: Power4.easeOut})

  })
})

magneticButton.forEach((button, i) => {

  button.addEventListener('mousemove', (e) => {
    const boundBox = button.getBoundingClientRect()

    const magneticStrength = button.dataset.magneticStrength
    const magneticTextStrength = button.dataset.magneticTextStrength

    const newX = (e.clientX - boundBox.left) / button.offsetWidth - 0.5
    const newY = (e.clientY - boundBox.top) / button.offsetHeight - 0.5

    gsap.to(button, {
      x: newX * magneticStrength,
      y: newY * magneticStrength,
      duration: 1,
      ease: Power4.easeOut
    })
    gsap.to(magneticButtonText[i], {
      x: newX * magneticTextStrength,
      y: newY * magneticTextStrength,
      duration: 1,
      ease: Power4.easeOut
    })
  })
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 1,
      ease: Elastic.easeOut
    })
    gsap.to(magneticButtonText[i], {
      x: 0,
      y: 0,
      duration: 1,
      ease: Elastic.easeOut
    })

  })

})



const footerMagneticButton = document.querySelector('footer section:first-child .magnetic-button')
const footer = document.querySelector('footer')
const footerMagneticButtonContainer = document.querySelector('footer .magnetic-button-container')

gsap.fromTo(footerMagneticButtonContainer, 
  {x: "-30vw"}, 
{
  x: 0,
  duration: 3,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: footer,
    start: "top center",
    end: "bottom center",
    toggleAction: "play reverse play reverse"
  }
})





const aboutLink = document.querySelector('.about-link')
const skillLink = document.querySelector('.skill-link')
const workLink = document.querySelector('.works-link')
const skillsContainer = document.querySelector('.skill-section')
const worksContainer = document.querySelector('.works-section')

aboutLink.addEventListener('click', () => {
  about.scrollIntoView({behavior: "smooth"})
})
workLink.addEventListener('click', () => {
  worksContainer.scrollIntoView({behavior: "smooth"})
})
skillLink.addEventListener('click', () => {
  skillsContainer.scrollIntoView({behavior: "smooth"})
})
