<script>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Intro from './components/Intro.vue'
export default {
  components: {
  Header,
  Footer,
  Intro,
},
data() {
  return {
    isLoading: true
  }
},
mounted() {
  window.onscroll = () => {
        window.scrollTo(0, 0)
      }
  setTimeout(() => {
      this.isLoading = false;
      window.onscroll = () => {}
    }, 2500);
}
}
</script>

<template>
  <div>
  <link rel="stylesheet" href="https://use.typekit.net/dhs3mav.css">
  <title>Tuva Persson</title>
  <transition name="intro" mode="out-in">
  <Intro v-if="isLoading"/>
</transition>
  <Header />
    <transition name="fade" mode="out-in">
    <RouterView/>
  </transition>
  <Footer />
</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .intro-leave-from {
  opacity: 1;
}
.intro-enter-active,
.intro-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.intro-enter-active {
  transition-delay: 0.3s;
}

.intro-enter-from,
.intro-leave-to {
  opacity: 0;
}
.intro-enter-to, .intro-leave-from {
  opacity: 1;
}

</style>
