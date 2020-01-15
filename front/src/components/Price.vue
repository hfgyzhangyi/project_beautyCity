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
                            <li class="dropdown nav-item active">
                                <router-link :to="{name:'Price'}" class="dropdown-toggle nav-link" data-toggle="dropdown">分类
                                    <b class="caret"></b>
                                </router-link>
                                <ul class="dropdown-menu agile_short_dropdown">
                                    <li>
                                        <router-link :to="{name:'Price'}">定价计划</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'Route'}">路线选择</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'Recommend'}">推介</router-link>
                            </li>
                            <li class="nav-item pr-lg-0">
                                <router-link class="nav-link pr-lg-0" :to="{name:'Connect'}">联系</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div class="innerpage-banner">
          <div class="layer1"></div>
        </div>
        <div class="container price">
          <h1>价格</h1>
          <div class="row content">
            <div class="col-lg-3 col-sm-6 card">
              <div class="pic-wrap">
                <img src="../assets/price.jpg"/>
                <div class="text-wrap">
                  <p class="city">伦敦</p>
                  <p>目的地</p>
                </div>
              </div>
              <div class="content-wrap card-body">
                <div class="card-title">
                  <h5>
                    <span class="align-top">RMB</span>
                    1100
                    <small class="text-muted">/ 4 days</small>
                  </h5>
                </div>
                <ul class="list-unstyled">
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                </ul>
                <a href="javascript:;" class="btn">CONTACT</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 card">
              <div class="pic-wrap">
                <img src="../assets/price.jpg"/>
                <div class="text-wrap">
                  <p class="city">土耳其</p>
                  <p>目的地</p>
                </div>
              </div>
              <div class="content-wrap card-body">
                <div class="card-title">
                  <h5>
                    <span class="align-top">RMB</span>
                    2300
                    <small class="text-muted">/ 7 days</small>
                  </h5>
                </div>
                <ul class="list-unstyled">
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                </ul>
                <a href="javascript:;" class="btn">CONTACT</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 card">
              <div class="pic-wrap">
                <img src="../assets/price.jpg"/>
                <div class="text-wrap">
                  <p class="city">巴黎</p>
                  <p>目的地</p>
                </div>
              </div>
              <div class="content-wrap card-body">
                <div class="card-title">
                  <h5>
                    <span class="align-top">RMB</span>
                    6590
                    <small class="text-muted">/ 8 days</small>
                  </h5>
                </div>
                <ul class="list-unstyled">
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                </ul>
                <a href="javascript:;" class="btn">CONTACT</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 card">
              <div class="pic-wrap">
                <img src="../assets/price.jpg"/>
                <div class="text-wrap">
                  <p class="city">意大利</p>
                  <p>目的地</p>
                </div>
              </div>
              <div class="content-wrap card-body">
                <div class="card-title">
                  <h5>
                    <span class="align-top">RMB</span>
                    8000
                    <small class="text-muted">/ 12 days</small>
                  </h5>
                </div>
                <ul class="list-unstyled">
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                  <li>Lorem Ipsum is simply</li>
                </ul>
                <a href="javascript:;" class="btn">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
        <my-bottom></my-bottom>
    </div>
</template>

<script>
export default {
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
.price h1{
  font-weight: bold;
  text-align: center;
  margin: 3rem 0;
}
.pic-wrap{
  width: 100%;
  position: relative;
}
.pic-wrap img{
  width: 100%;
}
.text-wrap{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.text-wrap p{
  color: #fff;
  text-align: center;
}
.text-wrap p:nth-child(1){
  margin-bottom: 0;
  font-weight: bold;
  font-size: 2em;
}
.text-wrap p:nth-child(2){
  margin-bottom: 0;
  font-size: 2em;
  line-height: 1.5rem;
}
.content{
  margin-bottom: 3rem;
}
.card{
  border: none;
}
.card-body{
  background: #e9e9e9;
  padding: 2em;
  text-align: center;
}
.align-top{
  vertical-align: top;
  font-size: 0.5em;
  display: inline-block;
  color: #000;
}
.card-title h5{
  font-size: 1.5em;
  color: #1c1c1d;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-align: center;
}
.card-title small.text-muted{
  font-size: 0.7em;
  color: #6c757d !important;
}
ul.list-unstyled li{
  font-size: 14px;
  color: #7d7d7d;
  letter-spacing: 1px;
  line-height: 2.2em;
  text-align: center;
  border-bottom: 1px solid #dee2e6 !important;
  padding: 0.5rem;
}
.card{
  margin-bottom: 1.1em;
}
.btn{
  padding: 0.5em 1.5em;
  background: #f2994a;
  color: #fff;
  font-weight: bold;
  border-radius: 1.5em;
}
.btn:hover{
  background-color: #333333;
}
</style>