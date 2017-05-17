<template>
    <section>
    <section class="row header">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 header__left">
            <router-link to="/"><img src="../assets/logo.png"/></router-link>
            <h1>Js</h1>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 header__right">
           
            <h1>Developed in </h1>
            <img src="../assets/hashworks.png"/>
            <h2><router-link to="/about">About</router-link></h2>
        </div>
        </section>
    </section>
</template>


<style lang="scss">
$primary-color : #41b883;
$secondary-color : #35495e;
.header {
    height:75px;
    border-bottom:1px solid $primary-color;  
    padding:0rem 2rem;
    color:$secondary-color;
    &__left {
        line-height:75px;
        img {
        width:30px;
        display:inline-block;
        }
        h1 {
        // line-height:75px;
        display:inline-block;
        vertical-align:middle;
        font-size:20px;
        }
    }
    &__right {
        text-align:right;
        line-height:75px;
        h1 {
             display:inline-block;
        vertical-align:middle;
        margin:0;
        font-size:14px;
        }
        h2 {
             display:inline-block;
        line-height:75px;
        margin:0;
        font-size:14px;
       margin-left:1rem;    
        }
        img {
            width:150px;
            display:inline-block;
            border-right: 1px solid #999;
            padding-right:1rem;
        }
    }
}
</style>

