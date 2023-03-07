<script>
export default {
    data() {
        return {
            switchOn: false,
            hamburgerOn: false,
            active: false,
        }
    },
    methods: {
        toggleSwitch() {
            const element = document.querySelector('.toggle-off')
            const logo = document.querySelector('.logo')
            this.switchOn = !this.switchOn
            if (this.switchOn) {
                element.classList.add("toggle-on")
                document.documentElement.style.setProperty('--dark-color', '#fcfcfc')
                document.documentElement.style.setProperty('--light-color', '#1f1f1f')
                document.documentElement.style.setProperty('--dark-color-opacity', '252, 252, 252')
                document.documentElement.style.setProperty('--light-color-opacity', '31, 31, 31')
                logo.src = '/assets/tuva_logo_black-25758be5.svg'
            }
            // else if (this.hamburgerOn && this.switchOn) {
            //     element.classList.add("toggle-on")
            //     logo.src = '/assets/tuva_logo_white-8cdeee1b.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#1f1f1f')
            //     document.documentElement.style.setProperty('--light-color', '#fcfcfc')
            // }
            // else if (this.hamburgerOn && this.switchOn == false) {
            //     element.classList.remove("toggle-on")
            //     logo.src = '/assets/tuva_logo_black-25758be5.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#fcfcfc')
            //     document.documentElement.style.setProperty('--light-color', '#1f1f1f')
            // }
            else {
                element.classList.remove("toggle-on")
                document.documentElement.style.setProperty('--dark-color', '#1f1f1f')
                document.documentElement.style.setProperty('--light-color', '#fcfcfc')
                document.documentElement.style.setProperty('--dark-color-opacity', '31, 31, 31')
                document.documentElement.style.setProperty('--light-color-opacity', '252, 252, 252')
                logo.src = '/assets/tuva_logo_white-8cdeee1b.svg'
            }
        },
        hamburgerMenuOnOff() {
            const logo = document.querySelector('.logo')
            this.hamburgerOn = !this.hamburgerOn
            this.active = !this.active
            // if (this.hamburgerOn && this.switchOn == false) {
            //     logo.src = 'src/assets/img/tuva_logo_black.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#fcfcfc')
            //     document.documentElement.style.setProperty('--light-color', '#1f1f1f')
            // }
            // else if (this.hamburgerOn && this.switchOn) {
            //     logo.src = 'src/assets/img/tuva_logo_white.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#1f1f1f')
            //     document.documentElement.style.setProperty('--light-color', '#fcfcfc')
            // }
            // else if (this.hamburgerOn == false && this.switchOn) {
            //     logo.src = 'src/assets/img/tuva_logo_white.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#fcfcfc')
            //     document.documentElement.style.setProperty('--light-color', '#1f1f1f')
            //     document.documentElement.style.setProperty('--dark-color-opacity', '252, 252, 252')
            //     document.documentElement.style.setProperty('--light-color-opacity', '31, 31, 31')
            //     logo.src = 'src/assets/img/tuva_logo_black.svg'
            // }
            // else {
            //     logo.src = 'src/assets/img/tuva_logo_white.svg'
            //     document.documentElement.style.setProperty('--dark-color', '#1f1f1f')
            //     document.documentElement.style.setProperty('--light-color', '#fcfcfc')
            //     document.documentElement.style.setProperty('--dark-color-opacity', '31, 31, 31')
            //     document.documentElement.style.setProperty('--light-color-opacity', '252, 252, 252')
            //     logo.src = 'src/assets/img/tuva_logo_white.svg'
            // }
        }
    }
}
</script>

<template>
    <header>
        <RouterLink to="/">
            <img src="/src/assets/img/tuva_logo_white.svg" alt="Tuva Logo" class="logo">
            <img src="/src/assets/img/tuva_logo_black.svg" alt="Tuva Logo" class="logo-black">
        </RouterLink>
        <div class="header-elements">
            <div class="switch-container" @click="toggleSwitch()">
                <div class="toggle-off"></div>
            </div>
            <div class="hamburger-menu" @click="hamburgerMenuOnOff()">
                <span class="hamburger-span" :class="{ cross: active }"></span>
                <span class="hamburger-span" :class="{ cross: active }"></span>
                <span class="hamburger-span" :class="{ cross: active }"></span>
            </div>
        </div>
    </header>
    <transition name="fade" mode="out-in">
    <div class="menu-container" v-if="hamburgerOn">
    <nav>
        <ul>
            <RouterLink to="/" @click="hamburgerMenuOnOff()" ><li class="nav-element" v-motion
        :initial="{opacity: 0, y: -50}"
        :enter="{opacity: 1, y: 0, transition: {duration: 300, type: easeOut}}"
        :delay="100"
        :hovered="{opacity: 0.4}">Home</li></RouterLink>
            <RouterLink to="/about" @click="hamburgerMenuOnOff()"><li class="nav-element" v-motion
        :initial="{opacity: 0, y: -50}"
        :enter="{opacity: 1, y: 0, transition: {duration: 300, type: easeOut}}"
        :delay="250"
        :hovered="{opacity: 0.4}">About</li></RouterLink>
        </ul>
    </nav>
</div>
</transition>
</template>


<style scoped>
/* MENU */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
ul {
    padding: 0;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
nav {
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -50%);
}
ul > a {
    text-decoration: none;
    color: var(--light-color);
}
a > li {
    list-style: none;
    font-size: 40px;
    font-family: articulat-heavy-cf, sans-serif;
    text-align: center;
}
.menu-container {
    z-index: 98;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--dark-color);
}
.nav-element {
    transition: 0.3;
}
.nav-element:hover {
    opacity: 0.6;
    transition: 0.3;
}

/* GENERAL */

header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  margin: 0 auto;
  top: 0;
  left: 0;
  z-index: 99;
}

/* logo */
.logo-black {
    display: none;
}
.logo {
    width: 100px;
    padding: 1em;
}

.header-elements {
    display: flex;
    align-items: center;
    padding: 1em;
}

.hamburger-span {
  display: block;
  width: 30px;
  height: 4px;
  border-radius: 3px;
  background-color: var(--light-color);
  margin: 5px;
  transition: 0.2s;
}
.cross:nth-child(2) {
  opacity: 0;
}
.cross:nth-child(1) {
  transform: rotate(45deg);
  transform-origin: top-left;
  position: relative;
    top: 10px;
}
.cross:nth-child(3) {
    position: relative;
    top: -8px;
    transform: rotate(-45deg);
}
/* .hamburger-span {
  display: block;
  width: 30px;
  height: 4px;
  border-radius: 3px;
  background-color: var(--light-color);
  margin: 5px;
} */

.hamburger-menu {
    margin-right: 1em;
}
.hamburger-menu:hover {
    cursor: pointer;
}

/* light switch */
 .switch-container {
  background-color: var(--light-color);
  width: 42px;
  height: 24px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-right: 30px;
}
 .switch-container:hover {
  cursor: pointer;
}
.toggle-off {
  background-color: var(--dark-color);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 3px;
  margin-right: 7px;
  position: relative;
  animation: turnOffLights;
  animation-duration: 0.3s;
}
.toggle-on {
  background-color: var(--dark-color);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 7px;
  margin-right: 3px;
  position: relative;
  left: 13px;
  animation: turnOnLights;
  animation-duration: 0.3s;
}
@keyframes turnOnLights {
  from {left: 0px;}
  to {left: 13px;}
}
@keyframes turnOffLights {
  from {left: 13px;}
  to {left: 0px;}
} 

@media screen and (min-width: 500px) {
    a > li {
    font-size: 70px;
}
}
@media screen and (min-width: 800px) {
    a > li {
    font-size: 90px;
}
}
@media screen and (min-width: 940px) {
    a > li {
    font-size: 100px;
}
}

</style>
