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
                            <li class="nav-item active">
                                <router-link class="nav-link" :to="{name:'About'}">关于</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'Home'}">服务</router-link>
                            </li>
                            <li class="dropdown nav-item">
                                <router-link :to="{name:'About'}" class="dropdown-toggle nav-link" data-toggle="dropdown">分类
                                    <b class="caret"></b>
                                </router-link>
                                <ul class="dropdown-menu agile_short_dropdown">
                                    <li>
                                        <router-link :to="{name:'Home'}">定价计划</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'Home'}">路线选择</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'Home'}">推介</router-link>
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
        <section class="welcome py-5">
			<div class="container py-3">
				<h3 class="heading text-center mb-md-5 mb-4"> 关于我们 </h3>
				<div class="row welcome-grids">
					<div class="col-lg-6">
						<h4 class="mb-3">欢迎来到旅游世界</h4>
						<h3>记住，幸福是一种旅行方式，而不是目的地。</h3>
						<p class="my-4">在旅心，您可以尽情选择最佳、最省、最豪、最近路线.我们为您提供方案，您选择！</p>
						<a href="javascript:;">了解更多</a>
					</div>
					<div class="col-lg-6 mt-lg-0 mt-5 welcome-grid3">
						<div class="position">
							<img src="../assets/banner1.jpg" alt="" class="img-fluid">
						</div>
					</div>
				</div>
			</div>
		</section>
        <section class="welcome-bottom">
			<div class="welcome-bottom-layer py-5">
				<div class="container py-lg-5 py-sm-3">
					<h4 class="mb-2">只有把自己去旅行，才会成为一场冒险。</h4>
					<p class="mb-4">发现适合你的旅行</p>
					<a href="javascript:;">了解更多</a>
				</div>
			</div>
		</section>
        <section class="best-offers py-5">
			<div class="container py-3">
				<h3 class="heading text-center mb-sm-5 mb-3"> 优惠 </h3>
				<div class="row offer-grids pt-5">
					<div class="col-lg-3 col-sm-6 offer-grid">
						<img src="../assets/b1.jpg" alt="" class="img-fluid">
						<h4 class="mt-3">土耳其</h4>
						<p class="mt-2">伊斯坦布尔，帕穆克卡尔，博斯普鲁斯，伊兹密尔- 5天</p>
						<div class="offer" @click="offerActive($event)">
							<h3>7折 </h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6 mt-sm-0 mt-5 offer-grid">
						<img src="../assets/b2.jpg" alt="" class="img-fluid">
						<h4 class="mt-3">西班牙</h4>
						<p class="mt-2">巴塞罗那，格拉纳达，塞维利亚，马德里- 7天</p>
						<div class="offer" @click="offerActive($event)">
							<h3>7折</h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6 mt-lg-0 mt-5 offer-grid">
						<img src="../assets/b5.jpg" alt="" class="img-fluid">
						<h4 class="mt-3">意大利</h4>
						<p class="mt-2">罗马，佛罗伦萨，威尼斯，比萨 - 7天</p>
						<div class="offer" @click="offerActive($event)">
							<h3>7折</h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6 mt-lg-0 mt-5 offer-grid">
						<img src="../assets/b4.jpg" alt="" class="img-fluid">
						<h4 class="mt-3">伦敦</h4>
						<p class="mt-2">伦敦塔，大本钟，伦敦眼- 9天</p>
						<div class="offer" @click="offerActive($event)">
							<h3>7折</h3>
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
$.fn.isChildOf=function(b){
    return (this.parents(b).length>0);
}
$.fn.isChildAndSelfOf=function(b){
    return (this.closest(b).length>0);
};
export default {
    methods:{
        offerActive(e){
            $(".offer h3.active").removeClass("active");
            $(e.currentTarget).children("h3").addClass("active");
        },
        dealClick(e){
            if(!$(e.target).isChildAndSelfOf($(".offer"))){
                $(".offer h3.active").removeClass("active");
            }
        }
    },
    mounted(){
        document.body.addEventListener("click",this.dealClick);
    },
    beforeDestroy(){
        document.body.removeEventListener("click",this.dealClick);
    }
}
</script>

<style scoped>
a:active,a:visited,a:link{
    text-decoration: none !important;
}
/***************************************/
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
/***************************************/
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
/***************************************/
h2.heading, h3.heading{
  font-size: 50px;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 5px;
  color: #3a3a3a;
}
.welcome-grids h4{
  color: #999;
  text-transform: capitalize;
  font-size: 20px;
}
.welcome-grids h3{
  font-size: 24px;
  color: #333;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.welcome-grids p{
  color: #555;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 28px;
}
.welcome-grids a{
  font-size: 15px;
  display: inline-block;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  background: #f2994a;
  padding: 13px 30px;
  border-radius: 35px;
}
.position{
  padding: 12px;
  border: 4px solid #666;
}
.welcome-grid3 img{
  padding: 12px;
  border: 4px solid #f2994a;
}
.img-fluid{
  max-width: 100%;
  height: auto;
}
/***************************************/
.welcome-bottom{
    background: url("../assets/banner5.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
}
.welcome-bottom-layer{
    background: rgba(37, 37, 37, 0.4);
}
.welcome-bottom h4{
    font-size: 40px;
    color: #fff;
    letter-spacing: 3px;
    font-weight: 300;
    line-height: 60px;
    text-transform: capitalize;
}
.welcome-bottom p{
    font-size: 17px;
    color: #fff;
    letter-spacing: 3px;
    text-transform: capitalize;
    font-style: italic;
    border-left: 3px solid #fff;
    padding-left: 15px;
    margin-left: 10px;
}
.welcome-bottom a{
    font-size: 15px;
    display: inline-block;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    background: #f2994a;
    padding: 13px 30px;
    border-radius: 35px;
}
@media screen and (max-width: 991px){
    .welcome-bottom h4{
        font-size: 32px;
        letter-spacing: 2px;
        line-height: 50px;
    }
}
@media screen and (max-width: 736px){
    .welcome-bottom h4{
        font-size: 28px;
        letter-spacing: 1px;
    }
}
/***************************************/
h2.heading, h3.heading{
    font-size: 50px;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 5px;
    color: #3a3a3a;
}
.img-fluid{
    max-width: 100%;
    height: auto;
}
img{
    width: 100%;
}
.offer-grid h4{
    font-size: 18px;
    color: #333;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.offer-grid p{
    color: #555;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 24px;
}
.offer{
    position: absolute;
    top: -16%;
    right: 5%;
    border: 2px solid #fff;
    border-radius: 50%;
}
.offer h3{
    background: #333;
    color: #fff;
    font-size: 22px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 50%;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    -o-transition: 0.5s all;
}
.offer h3.active{
    background: #f2994a;
}
@media screen and (max-width: 768px){
    h2.heading, h3.heading{
        font-size: 45px;
        letter-spacing: 3px;
    }
}
@media screen and (max-width: 568px){
    h2.heading, h3.heading{
        font-size: 40px;
        letter-spacing: 2px;
    }
    .offer-grids{
        padding: 0 4em;
    }
    .offer{
        top: -10%;
    }
}
@media screen and (max-width: 414px){
    .offer-grids{
        padding: 0 2em;
    }
}
</style>