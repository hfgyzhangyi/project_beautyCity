<template>
    <div class="template">
        <header>
            <div class="container agile-banner_nav">
                <div class="row header-top">
                    <div class="col-md-5 top-left p-0">
                        <p>Call us : 021-40012345</p>
                    </div>
                    <div class="col-md-7 top-right p-0">
                        <p class="p-map">上海，闵行区</p>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <h1><router-link class="navbar-brand" :to="{name:'Home'}">旅心</router-link></h1>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'Home'}">主页 <span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'About'}">关于</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'Service'}">服务</router-link>
                            </li>
                            <li class="dropdown nav-item">
                                <router-link :to="{name:'Recommend'}" class="dropdown-toggle nav-link" data-toggle="dropdown">分类
                                    <b class="caret"></b>
                                </router-link>
                                <ul class="dropdown-menu agile_short_dropdown">
                                    <li>
                                        <router-link :to="{name:'Price'}">定价计划</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'Home'}">路线选择</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item active">
                                <router-link class="nav-link" :to="{name:'Recommend'}">推介</router-link>
                            </li>
                            <li class="nav-item pr-lg-0">
                                <router-link class="nav-link pr-lg-0" :to="{name:'Home'}">联系</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div class="innerpage-banner">
			    <div class="layer1"></div>
		    </div>
        <section class="container show mg-b-3rem">
            <h1>展示墙</h1>
            <div class="pic-wrap row">
              <div class="col-md-4 gallery-left">
                <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                  <img src="../assets/g7.jpg"/>
                  <div class="w3agile-text">
                    <h5>In Travel</h5>
                  </div>
                </div>
                <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                  <img src="../assets/img1.jpg"/>
                  <div class="w3agile-text">
                    <h5>In Travel</h5>
                  </div>
                </div>
                <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                  <img src="../assets/g6.jpg"/>
                  <div class="w3agile-text">
                    <h5>In Travel</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-8 gallery">
                <div class="col-lg-12 galry-text">
                  <p>景点展示</p>
                </div>
                <div class="col-lg-12 row pic-line1">
                  <div class="col-lg-8 pic-line1-left">
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g1.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 pic-line1-right">
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g3.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g4.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 row pic-line2">
                  <div class="col-lg-4 pic-line2-left">
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g4.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g3.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8 pic-line2-right">
                    <div class="mg-b" style="position:relative;overflow:hidden" @mouseenter="dealMouseenter($event)" @mouseleave="dealMouseleave($event)">
                      <img src="../assets/g5.jpg"/>
                      <div class="w3agile-text">
                        <h5>In Travel</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <my-bottom></my-bottom>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods:{
    dealMouseenter(e){
      $(e.currentTarget).children(".w3agile-text").animate({"bottom":"0%"});
    },
    dealMouseleave(e){
      $(e.currentTarget).children(".w3agile-text").animate({"bottom":"-100%"});
    }
  }
}
</script>

<style scoped>
article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section{
  display: block;
}
header{
  position: absolute;
  z-index: 9;
  width: 100%;
  padding: 2em 0;
}
.header-top{
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
}
.header-top p{
  margin: 0;
  color: #eee;
  letter-spacing: 2px;
  font-size: 15px;
}
.p-map{
  text-align: right;
}
.bg-light{
  background-color: transparent !important;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
  font-family: 'Raleway', sans-serif;
}
h1, .h1{
  font-size: 2.5rem;
}
.navbar-brand{
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-light .navbar-brand{
  font-size: 1.2em;
  color: #f2994a;
  text-shadow: 2px 2px #ffffff;
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  padding: 0;
  letter-spacing: 3px;
}
.navbar-light .navbar-toggler{
  border-color: #fff;
  background: #f2994a;
  outline: none;
}
.navbar-light .navbar-toggler:active{
  border-color: #F2CB7F;
}
.navbar{
  position: relative;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: .5rem 1rem;
}
.navbar{
  padding: 0;
}
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{
  color: #f2994a;
  border-bottom: 1px solid #f2994a;
}
.navbar-light .navbar-nav .nav-link{
  color: #fff;
  font-size: 16px;
  letter-spacing: 2px;
  border-bottom: 1px solid #fff;
}
.navbar-expand-lg .navbar-nav .nav-link{
  padding-right: 0;
  padding-left: 0;
  padding-bottom: .2rem;
}
.dropdown-menu{
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu{
  padding: 1rem;
}
.dropdown-menu.show{
  display: block;
}
.navbar-nav .dropdown-menu{
  position: static;
  float: none;
}
ul.dropdown-menu li{
  padding: 10px 0;
}
ul.dropdown-menu li a{
  font-size: 16px;
  color: #333;
  letter-spacing: 1px;
  border-bottom: 1px solid;
  padding-bottom: .2rem;
}
li.nav-item{
  padding: 0 15px;
}
.nav-item a:hover{
  text-decoration: none;
  color: #f2994a;
}
.navbar-light .navbar-nav .nav-link{
  transition: .3s all;
}
.navbar-light .navbar-nav .nav-link:hover{
  text-decoration: none;
  color: #f2994a;
  border-bottom-color: #f2994a;
}
.top-right{
    text-align: right;
}
@media screen and (max-width: 991px){
    .navbar-light .navbar-nav .nav-link{
        display: inline-block;
    }
    .navbar-nav{
        background: rgba(0, 0, 0, 0.7);
        padding: 1em 2em;
        text-align: center;
    }
    .header-top p{
        letter-spacing: 1px;
        font-size: 14px;
    }
}
@media screen and (min-width: 992px){
    .navbar-expand-lg .navbar-nav .dropdown-menu{
        position: absolute;
    }
}
@media screen and (max-width: 736px){
    header{
        padding: 1em 0;
    }
    .header-top p{
        text-align: center;
        margin: .2em;
    }
}
@media screen and (min-width: 736px) and (max-width: 768px){
    header{
        padding: 1em 0;
    }
    .header-top p{
        text-align: center;
        margin: .2em;
    }
}
@media screen and (max-width: 568px){
    header{
        padding: 0em 0;
    }
}
/*****************************************/
@media screen and (max-width: 568px){
    .innerpage-banner, .layer1{
        min-height: 200px;
    }
}
@media screen and (max-width: 991px){
    .innerpage-banner, .layer1{
        min-height: 250px;
    }
}
.innerpage-banner{
    background: url("../assets/banner1.jpg") no-repeat center;
    background-size: cover;
    min-height: 300px;
}
.layer1{
    background: rgba(37, 37, 37, 0.4);
    min-height: 300px;
}
/*****************************************/
.show h1{
    margin: 3rem 0;
    text-align: center;
    font-weight: bold;
}
.pic-wrap img{
  width: 100%;
}
.mg-b{
  margin-bottom: 1.1em;
}
.galry-text{
  padding: 3em 4.5em;
  background: #f2994a;
  margin-bottom: 1em;
  text-align: center;
}
.gallery p{
  font-size: 1.5em;
  color: #fff;
  letter-spacing: 1px;
}
.pic-line1{
  display: flex;
  justify-content: space-between;
  padding-right: 0;
  padding-left: 0;
  margin-left: 0;
  width: 100%;
}
.pic-line2{
  display: flex;
  justify-content: space-between;
  padding-right: 0;
  padding-left: 0;
  margin-left: 0;
  width: 100%;
}
.pic-line1 .col-lg-8,.pic-line1 .col-lg-4{
  padding: 0;
}
.pic-line2 .col-lg-8,.pic-line2 .col-lg-4{
  padding: 0;
}
.pic-line1 img{
  width: 100%;
}
.pic-line1 .pic-line1-left{
  flex: 0 0 65%;
}
.pic-line2 .pic-line2-left{
  flex: 0 0 33%;
}
.pic-line1 .pic-line1-right{
  flex: 0 0 33%;
}
.pic-line2 .pic-line2-right{
  flex: 0 0 65%;
}
.w3agile-text{
  background: rgba(0, 0, 0, 0.58);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -100%;
  left: 0;
  transition: .1s all;
}
.w3agile-text h5{
  font-size: 2.5em;
  color: #fff;
  text-align: center;
  margin-top: 2em;
}
.mg-b-3rem{
  margin-bottom: 3rem;
}
@media screen and (max-width: 991px){
  .galry-text{
    padding: 2em 1.5em;
  }
  .gallery p{
    font-size: 1.3em;
  }
}
@media screen and (max-width: 414px){
  .gallery .pic-line1{
    display: block;
  }
  .gallery .pic-line2{
    display: block;
  }
}
@media screen and (min-width: 992px){
  .gallery-left{
    padding-left: 0;
    padding-right: 0;
  }
}
</style>