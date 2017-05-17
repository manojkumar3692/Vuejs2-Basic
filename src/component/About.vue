<template>
    <section class="about">
    <div class="about__why">
            <h1>What is this app ?</h1>
            <p>This is a simple vue js application , where we enter the github username , once entered it searches the username in github using github API and fectchs all the repository available under the username. For API & HTTP i have used AXIOS which is a Promise based HTTP client for the browser and node.js </p>
            <h2>Setup Vuejs App</h2>
            <p>First download the folder from github , after download go inside the folder and run the following command</p>
            <ul>
            <li>$npm install </li>
            <li>$npm run dev</li>
            </ul>
            <p>The app will run in you localhost , you will redirect to the home page where now you will be able to search for the repository , Try it out </p>

            <h2>Concepts involed </h2>
            <ul>
            <li>Basic Routing <li>
            <li>API Calls </li>
            <li> Basic Dom Manupulation </li>
            <li>Basic Setup of file </li>
            </ul>
            <h2>Why Vue js is a better framework ? </h2>
            <p>This is just my observation and i would like to make a small artical why i feel Vue is better framework compared to Reactjs or Angular. Again the performace we need to consider lot of factors , im just giving a basic idea.</p>
            <p>Honestly im not a big fan of react , no doubt its great framework , if you like you can use it without any doubt. I have created few basic project in it and its not in my style, I dont like mixing HTML & Javascript , First problem i found is using JSX , i feel i have lost the power of using native HTML and CSS , why should everything be in Javascript and miss all the features of HTML and CSS , Its my choice but if you like then its upto you . Everything is in javascript , its difficult for new dev to pick it up and perform loop etc but still its not a bad idea, and again its upto you, still its a great library .And you need to add extra library for route and state ( like redux) but still you have very active community , so chance are you get good support for packages. </p>
            <p>I really liked Vue js while building this app , Its like the team has mixed all the good of Angular and react js,Im not saying this doesnt have any issue , Vue has its own dis-advantage , but what i really like is separation of HTML CSS & javascript , its very lean just like react , but unlike react , Vue has its own route and state , so this ensure we have timely update and performace . Now Vue does not have form package and hence again it has the same disadvantage like react for some packages, more over since its very new it does not have a focused modular concept like angularjs .But again why i really like vue over is as mention separation of HTML , CSS , JS and it has the best documentation over angualar and React . </p>
            <p>Again one small disadvantage of Vue is , its not backed by big Company , like angular is by Google & react is by Facebook , but again its growing it will strength in time </p>
            <p>This is just my thoughts , may be you have better reason "Peace"</p>

            </div>
    </section>

</template>

<style lang="scss">
    .about {
        width:70%;
        margin:0 auto;
        &__why {
            margin:50px 0;
            ul {
                li {
                    display:block;
                }
            }
            p {
                margin:15px 0;
            }
        }
    }
</style>