<script>
export default {
    data() {
        return {
            mouseOverProject: false,
            mouseMovedOverProject: false,
        }
    },
    mounted() {
      window.onload = () => {
        let userAgent = navigator.userAgent;
        if(userAgent.match(userAgent.match(/safari/i))){
             console.log('safari')
           }
      }
    },
methods: {
  mouseMoveProject(e) {
    // this.mouseMovedOverProject = true
    let positionX = e.clientX - 40
    let positionY = e.clientY - 40

    let cursor = document.querySelector(".cursor-project")
    this.mouseMovedOverProject = true
    cursor.style.left = `${positionX}px`
    cursor.style.top = `${positionY}px`
    

    // cursor.setAttribute("style","top:"+positionY+"px;left:"+positionX+"px;");

  },
  mouseLeaveProject() {
    this.mouseOverProject = false
    this.mouseMovedOverProject = false
  },
  mouseMoveHero(e) {
    let positionX = e.clientX - 200
    let positionY = e.clientY - 200

    let documentRoot = document.querySelector(':root')
    documentRoot.style.setProperty('--hero-x', positionX + "px")
    documentRoot.style.setProperty('--hero-y', positionY + "px")
  
  }
}
}
</script>

<template>
  <transition name="scale">
  <div class="cursor-project" v-show="mouseOverProject && mouseMovedOverProject">View<br>Project</div>
</transition>
  <section class="hero" @mousemove="mouseMoveHero">
    <div class="hero-inner">
      <p class="hero-hi">Hi,</p>
    <h1 class="hero-text">I’m Tuva, front-end developer & UI–UX designer based in Sweden.</h1>
  </div>
  </section>
  <main>
    <section class="projects-grid">
        <div class="one-project-container" @mouseover="mouseOverProject = true" @mousemove="mouseMoveProject" @mouseleave="mouseLeaveProject" v-motion-fade>
          <RouterLink to="/vila-application">
            <div class="project-div" v-motion
        :initial="{opacity: 0, y: 20}"
        :enter="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="300">
        <img src="/src/assets/img/vila-images/vila-overview.jpg" alt="Vila Application" class="project-img">
        <h2>VILA APPLICATION</h2>
        <p class="project-subtitle">UX Case Study / November 2021</p>
      </div>
      </RouterLink>
      </div>
      <div class="two-projects-container">
        <RouterLink to="/amazon-application">
        <div class="project-div" @mouseover="mouseOverProject = true" @mousemove="mouseMoveProject" @mouseleave="mouseLeaveProject"
        v-motion
        :initial="{opacity: 0, y: 20}"
        :visibleOnce="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="200"
        >
          <img src="/src/assets/img/home-page-images/amazon-shopping-cover.jpg" alt="Amazon Application" class="project-img">
          <h2>AMAZON SHOPPING</h2>
          <p class="project-subtitle">UX Case Study / October 2021</p>
        </div>
      </RouterLink>
      <RouterLink to="/sticky-projects">
        <div class="project-div" @mouseover="mouseOverProject = true" @mousemove="mouseMoveProject" @mouseleave="mouseLeaveProject"
        v-motion
        :initial="{opacity: 0, y: 20}"
        :visibleOnce="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="300"
        >
          <img src="/src/assets/img/home-page-images/sticky-projects-mockup.jpg" alt="Sticky Projects" class="project-img">
          <h2>STICKY PROJECTS</h2>
          <p class="project-subtitle">Vue.js Project / December 2022</p>
        </div>
      </RouterLink>
      </div>
      <div class="one-project-container" @mouseover="mouseOverProject = true" @mousemove="mouseMoveProject" @mouseleave="mouseLeaveProject" v-motion-fade>
          <RouterLink to="/change-magazine">
            <div class="project-div" 
            v-motion
        :initial="{opacity: 0, y: 20}"
        :visibleOnce="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="300"
        >
        <img src="/src/assets/img/home-page-images/magazine-cover.jpg" alt="Change Magazine" class="project-img">
        <h2>CHANGE MAGAZINE</h2>
        <p class="project-subtitle">Editorial Design / May 2021</p>
      </div>
      </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* cursor transition */

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.scale-enter-active {
  animation: scale 0.15s;
}
.scale-leave-active {
  animation: scale 0.15s reverse;
}

main {
  max-width: 940px;
  margin: 0 auto;
}
a {
  color: inherit;
  text-decoration: none;
}
.hero-inner {
  max-width: 940px;
  margin: 0 auto;
}
.hero-text {
  font-family: articulat-heavy-cf, sans-serif;
  font-weight: 900;
  opacity: 25%;
  line-height: 40px;
  font-size: 28px;
  margin-top: 0px;
  padding: 30px;
  padding-top: 0px;
  margin-bottom: 10px;
  text-align: center;
} 
.hero-hi {
  font-family: articulat-heavy-cf, sans-serif;
  font-size: 100px;
  margin: 0;
  text-align: center;
  padding-top: 70px;
}
h2 {
  font-family: articulat-heavy-cf, sans-serif;
  font-weight: 900;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 0;
}
.project-subtitle {
  font-size: 14px;
  font-family: articulat-cf, sans-serif;
  font-weight: 300;
  margin-top: 0px;
}
.one-project-container {
  padding: 30px;
  transition: 0.3s;
}
.one-project-container img {
  transition: 0.3s;
}
.two-projects-container {
  padding: 30px;
}
.two-projects-container img {
  transition: 0.3s;
}
.two-projects-container > a:nth-child(2) > div > img {
  padding-top: 60px;
}
.project-img {
  width: 100%;
}
.one-project-container img:hover  {
  opacity: 0.6;
}
.two-projects-container img:nth-child(2):hover {
  opacity: 0.6;
}
.two-projects-container img:nth-child(1):hover {
  opacity: 0.6;
  transition: 0.3s;
}

/* MEDIA QUERIES */
@media screen and (min-width: 500px) {
  .hero-text {
  line-height: 50px;
  font-size: 38px;
} 
.hero-hi {
  font-size: 150px;
  margin: 0;
}
h2 {
  font-size: 32px;
}
.project-subtitle {
  font-size: 16px;
}
.two-projects-container {
  display: block;
}
}
@media screen and (min-width: 600px) { 
  .hero-text {
    font-size: 40px;
    line-height: 50px;
    text-align: right;
    margin-left: 30%;
  }
  
  .hero-hi {
    text-align: left;
    padding-left: 30px;
  }
}
@media screen and (min-width: 700px) { 
  .hero-text {
    font-size: 50px;
    line-height: 70px;
  }
}
@media screen and (min-width: 900px) {
  .hero-text {
  opacity: 1;
  line-height: 75px;
  font-size: 58px;
  margin-top: 0px;
  margin-left: 0;
  margin-bottom: 0;
  padding-top: 0px;
  padding-bottom: 150px;
  padding-left: 30%;
  background-image: radial-gradient(closest-side, var(--light-color) 78%, transparent 0);
  background-size: 400px 400px;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(var(--light-color-opacity), 0.15);
  background-position: var(--hero-x) var(--hero-y);
  background-attachment: fixed;
  transition: 0.1s;
  transition-timing-function: ease-out;
} 
.hero-hi {
    font-size: 150px;
  }
h2 {
  margin-top: 20px;
  font-size: 38px;
}
.project-div:hover {
  cursor: pointer;
}
.one-project-container {
  padding: 30px;
}
.two-projects-container {
  display: flex;
  padding: 30px;
}
.two-projects-container > a:nth-child(2) > div > img {
  padding-top: 10px;
}
.two-projects-container > a:nth-child(1) {
  margin-right: 20px;
}
.two-projects-container > a:nth-child(2) {
  margin-left: 20px;
  margin-top: 0;
}
.cursor-project {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: fixed;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--dark-color);
  background-color: var(--light-color);
  line-height: 14px;

  transform-origin: 50% 50%;
  pointer-events: none;
  z-index: 1;
  /* transition-duration: 0.1s;
  -webkit-transition-duration: 0.1;
  transition-delay: 0;
  transition-property: left, top;
  transition-timing-function: ease-out;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d; 
  transform: translateZ(0);
  will-change: left, top; */
}
}
/* max width of content */
@media screen and (min-width: 1100px) {
  .hero-text {
  padding-right: 0;
} 
}
</style>
