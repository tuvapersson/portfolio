<script>
export default {
    data() {

    }
}
</script>

<template>
    <main class="project-main">
    <h1 class="project-title">STICKY PROJECTS</h1>
    <section class="project-content">
            <p class="project-description">Created in December 2022</p>
            <p class="text-small"><span class="in-text-bold">Project duration:</span> 5 weeks</p>
            <p class="text-small"><span class="in-text-bold">Softwares used:</span> VS Code, Postman, DB Browser for SQLite, Figma, Google Docs</p>
            <p class="text-small"><span class="in-text-bold">Team:</span> Pauline Wahle, Tuva Persson</p><br>
            <p class="text-small"><span class="in-text-bold">Front-end application:</span> Vue.js</p>
            <p class="text-small"><span class="in-text-bold">Back-end application:</span> Express.js</p>
            <h2 class="project-h2">Overview</h2>
            <p class="body-text">Post-its have, for a long time, proven to be an excellent way to get a good grasp of any general concept. The platform Sticky Projects follows this concept through into a digital environment. In order to get a simplified and flexible view of future projects, a creator of deliverables can make a new note of an expected project, update it or scrap it and even move them around on the screen to create an order completely up to their own personal logic – just like Post-its on a wall.</p>
            <h2 class="project-h2">Functionalities</h2>
            <p class="body-text">The platform will be used to organize projects. After creating an account, the user can create new projects and enter information about them, including title, description, client name, and when the project is expected to be finished. Projects made by the user will appear on the dashboard. On the dashboard, the user can select a project to view information about that specific project, update project details, or delete the project entirely. The user can also view information about their own account, which also allows them to make changes or delete it.</p>
            <p class="body-text">Below is a UML use-case diagram, illustrating the functionalities of the platform.</p>
            <img src="/src/assets/img/sticky-images/uml-sticky.jpg" alt="UML Use-case diagram" class="project-img">
            <h3 class="project-h3">Authorization</h3>
            <p class="body-text">In some situations, the user must be authorized to perform certain actions. Authorization was implemented using JSON Web Tokens (JWT), and is used when performing the following actions:</p>
            <ul>
                <li class="text-small"><span class="in-text-bold">View all own projects</span> – Using the account id in the access token, all projects belonging to the account with that certain id are displayed. As the user is only allowed to see their own projects, they are automatically authorized to see one specific project, update projects and delete projects, which is why we don't check authorization again when the user wants to perform these actions.</li>
                <li class="text-small"><span class="in-text-bold">Create a new project</span> – The user has to be signed in to perform this action, which is why authorization is needed.</li>
                <li class="text-small"><span class="in-text-bold">Get account user is signed in to</span> – When clicking on the ‘profile’ button in the GUI, information about the account of the user that is signed in will be displayed, which also comes from information in the access token. Once the user sees this information, it is certain that they are signed in to the correct account and are therefore also allowed to perform actions such as update and/or delete account.</li>
            </ul>
            <h2 class="project-h2">Architecture</h2>
            <p class="body-text">The application consists of a single-page application (SPA), that the user interacts with, which communicates with a web application on a server using HTTP. The web application in turn, makes use of a database where resources are stored, which is communicated with using SQL.</p>
            <h3 class="project-h3">Database</h3>
            <div class="text-img-flex">
                <p class="body-text">The database used to store the resources is an SQLite database, which contains two different types of resources stored in separate tables – accounts and projects. These two tables are connected using foreign key, where the id in the accounts table is connected to the accountId in the projects table. As one account can have many projects, but not the opposite, the relationship between the tables is a One-to-Many relationship.</p>
                <img src="/src/assets/img/sticky-images/database-sticky.jpg" alt="Database structure" class="project-img flex-img">
            </div>
            <h2 class="project-h2">Navigation Structure</h2>
            <p class="body-text">The following diagram illustrates how the user can navigate through the platform:</p>
            <img src="/src/assets/img/sticky-images/navigation-sticky.jpg" alt="UML Use-case diagram" class="project-img">
            <h2 class="project-h2">Final Graphical User Interface</h2>
            <p class="body-text">Below are screenshots of the final platform.</p>
            <img src="/src/assets/img/home-page-images/sticky-projects-mockup.jpg" alt="Entry point" class="project-img">
            <div class="img-img-flex">
                <img src="/src/assets/img/sticky-images/sign-in.jpg" alt="Sign in" class="project-img final-img-flex">
                <img src="/src/assets/img/sticky-images/sign-up.jpg" alt="Sign up" class="project-img final-img-flex">
            </div>
            <img src="/src/assets/img/sticky-images/dashboard.jpg" alt="Dashboard" class="project-img">
            <div class="img-img-flex">
                <img src="/src/assets/img/sticky-images/new-project.jpg" alt="New project" class="project-img final-img-flex">
                <img src="/src/assets/img/sticky-images/project-success.jpg" alt="Successful creation" class="project-img final-img-flex">
            </div>
            <div class="img-img-flex">
                <img src="/src/assets/img/sticky-images/update-project.jpg" alt="Update project" class="project-img final-img-flex">
                <img src="/src/assets/img/sticky-images/update-success.jpg" alt="Update successful" class="project-img final-img-flex">
            </div>
            <img src="/src/assets/img/sticky-images/edit-account.jpg" alt="Edit account" class="project-img">
            <h2 class="project-h2">Code</h2>
            <p class="text-small">View the project code in our <a href="https://github.com/tuvapersson/sticky-projects" target="_blank">github repository</a>.</p>

            <p class="thank-you">Thank You!</p>
            

            
    </section>
</main>
</template>

<style scoped>
a {
    color: inherit;
}
@media screen and (min-width: 900px){
    .text-img-flex {
    display: flex;
 }
 .flex-img {
    align-self: center;
    width: 50%;
    margin-left: 30px;
 }
 .img-img-flex {
    display: flex;
    width: 100%;
 }
 .final-img-flex {
    width: 50%;
    overflow: hidden;
 }
 .final-img-flex:nth-child(1) {
    margin-right: 10px;
 }
 .final-img-flex:nth-child(2) {
    margin-left: 10px;
 }
}
</style>