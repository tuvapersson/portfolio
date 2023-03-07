<script>
export default {
    data() {

    }
}
</script>

<template>
    <main>
    <h1>
        <span class="h1-top"  
        v-motion
        :initial="{opacity: 0, y: 10}"
        :enter="{opacity: 1, y: 0}"
        :delay="400"
        >LET ME</span >
        <span class="h1-middle" 
        v-motion
        :initial="{opacity: 0, y: 10}"
        :enter="{opacity: 1, y: 0}"
        :delay="500"
        >INTRODUCE</span>
        <span class="h1-bottom" 
        v-motion
        :initial="{opacity: 0, y: 10}"
        :enter="{opacity: 1, y: 0}"
        :delay="600"
        >MYSELF</span>
    </h1>
    <div class="flex-container" v-motion
        :initial="{opacity: 0, y: 20}"
        :enter="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="200"
        >
        <h2>WHO AM I?</h2>
        <div class="flex-text">
        <p>My name is Tuva Persson, and I'm a front-end developer and UX/UI designer, currently finishing my studies at the Graphic Design & Web Development programme at Jönköping University. I would describe myself as a structured and creative person who always put alot of attention to the details. I always want to become better at what I'm doing, and I'm always looking to learn the next thing.</p>
        <p>I tend to lean more towards the minimalistic type of design – something you probably already know about me from looking at this portfolio.</p>
        <p>My greatest interest is human-centered designs and coding, and I belive a combination of the two is the recipe for success. When it comes to development, I feel the most at home in the front end. I recently discovered my love for Vue.js, which I decided to use to build this portfolio. Although my main focuses are UX/UI design and web development, I also enjoy putting my creativity to the test in digital design, which I have worked with a lot, both in my studies and during my internship.</p>
    </div>
    </div>
    <div class="flex-container" v-motion
        :initial="{opacity: 0, y: 20}"
        :enter="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="600"
        >
        <h2>SKILLS & TOOLS</h2>
        <table class="flex-text">
            <tbody>
                <tr>
                    <td>HTML5</td>
                    <td>VS Code</td>
                    <td>Photoshop</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>Figma</td>
                    <td>Illustrator</td>
                </tr>
                <tr>
                    <td>Javascript</td>
                    <td>Adobe XD</td>
                    <td>InDesign</td>
                </tr>
                <tr>
                    <td>Vue.js</td>
                    <td>UX Research</td>
                    <td>Usability Testing</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex-container" v-motion
        :initial="{opacity: 0, y: 20}"
        :enter="{opacity: 1, y: 0, transition: {duration: 1000}}"
        :delay="1000"
        >
        <h2>WANNA SEE MY CV?</h2>
        <p class="flex-text">If you're interested in looking at my CV, I'll be more than happy to send it to you – I'm just an e-mail away.</p>
    </div>

</main>
</template>

<style scoped>
main {
  max-width: 940px;
  margin: 0 auto;
  padding: 30px;
}
.h1-top, .h1-middle, .h1-bottom {
    font-family: articulat-heavy-cf, sans-serif;
    font-weight: 900;
    display: block;
    font-size: 40px;
    line-height: 40px;
}
.h1-middle {
    text-align: center;
 }
 .h1-bottom {
    text-align: right;
 }
 .flex-text {
    flex-basis: 50%;
    margin-top: 20px;
}
.flex-container {
    margin-top: 50px;
}
h1 {
    display: flex;
    flex-direction: column;
    margin: 200px 0 150px 0;
}
h2 {
    font-family: articulat-heavy-cf, sans-serif;
    font-weight: 900;
}
p {
    font-weight: 300;
}
table {
    font-weight: 300;
    width: 100%;
}

@media screen and (min-width: 450px) {
.h1-top, .h1-middle, .h1-bottom {
    font-size: 60px;
    line-height: 60px;
 }

}
@media screen and (min-width: 650px) {
.h1-top, .h1-middle, .h1-bottom {
    font-size: 90px;
    line-height: 90px;
 }

}
@media screen and (min-width: 900px) {
.h1-top, .h1-middle, .h1-bottom {
    font-size: 100px;
    line-height: 100px;
 }
 h2 {
    flex-basis: 50%;
}
.flex-text {
    flex-basis: 50%;
}
.flex-container {
    display:flex;
}

}
</style>