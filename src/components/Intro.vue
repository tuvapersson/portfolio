<script>
export default {
    
}
</script>
<template>
    <div class="intro-container">
        <img src="/src/assets/img/tuva_logo_white.svg" alt="Intro logo">
    </div>
</template>

<style scoped>
img {
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -50%);
    width: 200px;
}
.intro-container {
    z-index: 100;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--dark-color);
}
</style>