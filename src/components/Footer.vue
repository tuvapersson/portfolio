<script>
export default {
    //something
}
</script>

<template>
    <footer>
    <p class="small-text-footer">Want to work together?</p>
    <p class="small-text-footer light">Connect with me!</p>
    <div class="flex-container-buttons">
        <a href="https://se.linkedin.com/in/tuva-persson-965aa1226?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><button>LinkedIn</button></a>
        <a href = "mailto: grafiskt.tuvapersson@gmail.com"><button>E-mail</button></a>
    </div>
    <p class="light copyright">Copyright Tuva Persson 2023</p>
</footer>
</template>
<style scoped>
* {
    text-align: center;
    margin: 0 auto;
}
footer {
    margin-top: 70px;
}
.flex-container-buttons {
    display: flex;
    width: 250px;
    padding: 30px 0px 70px 0;
}
.small-text-footer {
  font-size: 16px;
}
.copyright {
    font-size: 12px;
}
.light {
    font-weight: 300;
    margin-top: 10px;
}
/* MEDIA QUERIES */
@media screen and (min-width: 500px) {
.small-text-footer {
  font-size: 16px;
}
}
button {
    border-radius: 50px;
    padding: 10px;
    width: 100px;
    color: var(--light-color);
    background-color: transparent;
    border: 1px solid var(--light-color);
    font-weight: 700;
    transition: 0.2s;
}
button:hover {
    background-color: var(--light-color);
    color: var(--dark-color);
    cursor: pointer;
}
.copyright {
    opacity: 50%;
    padding-bottom: 20px;
}
</style>