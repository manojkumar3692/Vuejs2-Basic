

<template>

<section class="search">
        <div class="search__heading">
        <h1>Search Github repo</h1>
        <h2></h2>
        </div>
        <div class="search__input">
                  <input placeholder="type the username" v-model="reponame">
        </div>
        <div class="search__container row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 search__container--box" v-for="details of reporesults">
                        <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                                <img :src="details.owner.avatar_url" />
                                </div>
                                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <ul>
                                                <li>Username : {{details.owner.login}}</li>
                                                 <li>Repo Name : {{details.name}}</li>
                                                 <li>Repo Url : <a :href="details.html_url">{{details.html_url}}</a></li>
                                                  <li><b-button variant="success" size="sm">Download</b-button></li>
                                                </ul>
                                </div>
                        </div>
                </div>
        </div>
 <div>
                
               
                <h1>{{info}}</h1>
                
                
                
                 </div>
        </div>
</section>
        
       
</template>

<script>
import _ from 'lodash';
import axios from 'axios';
export default {
     data() {
             return {
                     reponame:'',
                     reporesults:'',
                     info:''
             }
     },
     watch: {
             reponame:function() {
                    this.reporesults='';
                    this.lookup();
                //     this.info:''
             }
     },
     methods: {
        lookup:_.debounce(function(){
                var app = this;
               app.info = '';
                axios.get('https://api.github.com/users/' + app.reponame + '/repos')
                .then(function(res){
                        // debugger;
                        app.reporesults = res.data; 
                        
                })
                .catch(function(err){
                        app.info='No Such Details Found'
                })
        },1000)
     }
}

</script>

<style lang="scss">
$primary-color : #41b883;
$secondary-color : #35495e;
        .search {
                width:70%;
                margin:0 auto;
                &__heading {
                        margin:40px 0;
                        h1 {
                                font-size:20px;
                                font-weight:300;
                        }
                        h2 {
                          width:100px;
                          border:1px solid #999;
                          margin:0;
                        }
                }       
                &__container {
                        margin:20px 0;
                        ul {
                                li {
                                        width:100%;
                                        font-size:14px;
                                        font-weight:300;
                                        color:$secondary-color;
                                        margin-bottom:10px;
                                        b-button {
                                                font-size:10px;
                                        }
                                }
                        }
                        img {
                                width:100px;
                        }
                        &--box {
                                padding:20px 0;
                                border:1px solid $primary-color;
                                margin-bottom:20px;
                        }
                }
                &__input {
                        input {
                                width:100%;
                                border:1px solid $primary-color;
                                border-radius:5px;
                                height:45px;
                                font-size:14px;
                                padding-left:10px;
                                color:$secondary-color;
                        }
                        input:placeholder-shown {
                                         font-family: 'Raleway', sans-serif;
                                         font-size:12px;
                                         text-transform:uppercase;
                                         padding-left:10px;
                                         
                                }
                }
        }
</style>

