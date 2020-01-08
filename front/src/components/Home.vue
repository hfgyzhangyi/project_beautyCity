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
							<li class="nav-item active">
								<router-link class="nav-link" :to="{name:'Home'}">主页 <span class="sr-only">(current)</span></router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" :to="{name:'Home'}">关于</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" :to="{name:'Home'}">服务</router-link>
							</li>
							<li class="dropdown nav-item">
								<router-link :to="{name:'Home'}" class="dropdown-toggle nav-link" data-toggle="dropdown">分类
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
    <div class="slider">
			<div class="callbacks_container">
				<ul class="rslides callbacks callbacks1" id="slider4">
					<li id="callbacks1_s0" class="" style="display: block; float: none; position: absolute; opacity: 0; z-index: 1; transition: opacity 1000ms ease-in-out;">
						<div class="banner-top">
							<div class="layer">
								<div class="container">
									<div class="banner-info_agile_w3ls">
										<h2>旅行需要一次好的 <span> 计划</span>. </h2>
										<p>假日套餐和特别优惠.</p>
										<router-link :to="{name:'Home'}" class="mr-2">了解更多</router-link>
										<router-link :to="{name:'Home'}">联系我们</router-link>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li id="callbacks1_s1" class="callbacks1_on" style="display: block; float: left; position: relative; opacity: 1; z-index: 2; transition: opacity 1000ms ease-in-out;">
						<div class="banner-top1">
							<div class="layer">
								<div class="container">
									<div class="banner-info_agile_w3ls">
										<h3>最佳的旅游 <span> 网站</span> </h3>
										<p>假日套餐和特别优惠.</p>
										<router-link :to="{name:'Home'}" class="mr-2">了解更多</router-link>
										<router-link :to="{name:'Home'}">联系我们</router-link>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li id="callbacks1_s2" style="display: block; float: none; position: absolute; opacity: 0; z-index: 1; transition: opacity 1000ms ease-in-out;" class="">
						<div class="banner-top2">
							<div class="layer">
								<div class="container">
									<div class="banner-info_agile_w3ls">
										<h3>来发现 <span>最美</span> 圣地.</h3>
										<p>假日套餐和特别优惠.</p>
										<router-link :to="{name:'Home'}" class="mr-2">了解更多</router-link>
										<router-link :to="{name:'Home'}">联系我们</router-link>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li id="callbacks1_s3" style="display: block; float: none; position: absolute; opacity: 0; z-index: 1; transition: opacity 1000ms ease-in-out;" class="">
						<div class="banner-top3">
							<div class="layer">
								<div class="container">
									<div class="banner-info_agile_w3ls">
										<h3>旅行就像 <span>呼吸</span>.</h3>
										<p>假日套餐和特别优惠.</p>
										<router-link :to="{name:'Home'}" class="mr-2">了解更多</router-link>
										<router-link :to="{name:'Home'}">联系我们</router-link>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
        <a href="javascript:;" class="callbacks_nav callbacks1_nav prev" @click="changeLayer($event)">Previous</a>
        <a href="javascript:;" class="callbacks_nav callbacks1_nav next" @click="changeLayer($event)">Next</a>
        <ul class="callbacks_tabs callbacks1_tabs">
          <li class="callbacks1_s1"><a href="javascript:;" class="callbacks1_s1" @click="changeLayer($event)">1</a></li>
          <li class="callbacks1_s2 callbacks_here"><a href="javascript:;" class="callbacks1_s2" @click="changeLayer($event)">2</a></li>
          <li class="callbacks1_s3"><a href="javascript:;" class="callbacks1_s3" @click="changeLayer($event)">3</a></li>
          <li class="callbacks1_s4"><a href="javascript:;" class="callbacks1_s4" @click="changeLayer($event)">4</a></li>
        </ul>
			</div>
			<div class="clearfix"> </div>
		</div>
  </div>
</template>

<script>
//http://www.sucai8.cn/demo/2019/10/%E5%A4%A7%E6%B0%94%E6%97%85%E6%B8%B8%E7%BD%91%E7%AB%99%E6%95%B4%E7%AB%99%E6%A8%A1%E6%9D%BF/images/right.png
import $ from 'jquery'
export default {
  mounted(){
    setInterval(() => {
      var index = $(".callbacks1_on").index();
      $(".callbacks1_on").css("zIndex",1);
      $(".callbacks1_on").css("opacity",0);
      $(".callbacks1_on").removeClass("callbacks1_on");
      $(".callbacks_here").removeClass("callbacks_here");
      if(index===3){
        $("#callbacks1_s0").addClass("callbacks1_on");
        $(".callbacks1_s1").addClass("callbacks_here");
      }else{
        $("#callbacks1_s"+(index+1)).addClass("callbacks1_on");
        $(".callbacks1_s"+(index+2)).addClass("callbacks_here");
      }
      $(".callbacks1_on").css("zIndex",2);
      $(".callbacks1_on").css("opacity",1);
    }, 4000);
  },
  methods:{
    changeLayer(e){
      var text = $(e.currentTarget).text();
      var index = $(".callbacks1_on").index();
      $(".callbacks1_on").css("zIndex",1);
      $(".callbacks1_on").css("opacity",0);
      $(".callbacks1_on").removeClass("callbacks1_on");
      $(".callbacks_here").removeClass("callbacks_here");
      if(text==="Previous"){
        if(index===0){
          $("#callbacks1_s3").addClass("callbacks1_on");
          $(".callbacks1_s4").addClass("callbacks_here");
        }else{
          $("#callbacks1_s"+(index-1)).addClass("callbacks1_on");
          $(".callbacks1_s"+index).addClass("callbacks_here");
        }
      }else if(text==="Next"){
        if(index===3){
          $("#callbacks1_s0").addClass("callbacks1_on");
          $(".callbacks1_s1").addClass("callbacks_here");
        }else{
          $("#callbacks1_s"+(index+1)).addClass("callbacks1_on");
          $(".callbacks1_s"+(index+2)).addClass("callbacks_here");
        }
      }else if(text==="1"){
        $("#callbacks1_s0").addClass("callbacks1_on");
        $(e.currentTarget).parent().addClass("callbacks_here");
      }else if(text==="2"){
        $("#callbacks1_s1").addClass("callbacks1_on");
        $(e.currentTarget).parent().addClass("callbacks_here");
      }else if(text==="3"){
        $("#callbacks1_s2").addClass("callbacks1_on");
        $(e.currentTarget).parent().addClass("callbacks_here");
      }else{
        $("#callbacks1_s3").addClass("callbacks1_on");
        $(e.currentTarget).parent().addClass("callbacks_here");
      }
      $(".callbacks1_on").css("zIndex",2);
      $(".callbacks1_on").css("opacity",1);
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
.slider{
  position: relative;
}
.callbacks_container{
  position: relative;
  float: left;
  width: 100%;
}
.callbacks{
  position: relative;
  list-style: none;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
}
.rslides{
  position: relative;
  list-style: none;
  overflow: hidden;
  width: 100%;
  padding: 0;
}
.callbacks li{
  position: absolute;
  width: 100%;
}
.rslides li{
  -webkit-backface-visibility: hidden;
  position: absolute;
  display: none;
  width: 100%;
  left: 0;
  top: 0;
}
.rslides li{
  position: relative;
  display: block;
  float: left;
}
.banner-top{
  background: url("../assets/banner1.jpg") no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 780px;
}
.banner-top1{
  background: url("../assets/banner2.jpg") no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 780px;
}
.banner-top2{
  background: url("../assets/banner5.jpg") no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 780px;
}
.banner-top3{
  background: url("../assets/banner4.jpg") no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 780px;
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
.router-link-active{
  transition: all 0.3s;
}
.banner-info_agile_w3ls{
  text-align: center;
  padding-top: 23em;
}
.banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
  font-size: 3em;
  color: #fff;
  font-weight: 100;
  letter-spacing: 1px;
  text-transform: capitalize;
}
.banner-info_agile_w3ls h3 span, .banner-info_agile_w3ls h2 span{
  padding: 0 15px;
  font-weight: 600;
  color: #eee;
  text-decoration: underline;
}
.banner-info_agile_w3ls p{
  font-size: 1em;
  color: #fff;
  margin: 1.5em 0;
  letter-spacing: 6px;
}
.banner-info_agile_w3ls a{
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  letter-spacing: 3px;
  font-size: 14px;
  margin: 1em 0 0em;
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
}
.callbacks_nav{
  position: absolute;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  top: 80%;
  left: 40px;
  opacity: 0.7;
  z-index: 3;
  text-indent: -9999px;
  overflow: hidden;
  text-decoration: none;
  height: 34px;
  width: 34px;
  background: url("../assets/left.png") no-repeat 0px 0px;
}
.callbacks_nav.prev{
  left: auto;
  background: url("../assets/left.png") no-repeat 0px 0px;
  left: 47%;
}
.callbacks_nav.next{
  left: auto;
  background: url("../assets/right.png") no-repeat 0px 0px;
  right: 47%;
}
.layer{
  background: rgba(37, 37, 37, 0.4);
  min-height: 780px;
}
.callbacks_tabs{
  list-style: none;
  position: absolute;
  top: 44%;
  right: 4%;
  padding: 0;
  margin: 0;
  display: block;
  z-index: 99;
}
.callbacks_tabs li{
  display: block;
  margin: 5px 0px;
}
.callbacks_tabs a{
  border: 2px solid #fff;
  width: 35px;
  height: 35px;
  line-height: 30px;
  border-radius: 50%;
  color: #fff;
  display: block;
  text-align: center;
}
.callbacks_tabs a:hover{
  text-decoration: none;
}
.callbacks_here a{
  background: #f2994a;
  border: 2px solid #f2994a;
}
@media screen and (min-width: 992px){
  .navbar-expand-lg .navbar-nav .dropdown-menu{
    position: absolute;
  }
}
@media screen and (min-width: 768px){
  .col-md-7{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-5{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
}
@media screen and (max-width: 1440px){
  .banner-top, .banner-top1, .banner-top2, .banner-top3, .layer{
    min-height: 700px;
  }
  .banner-info_agile_w3ls{
    padding-top: 19em;
  }
  .callbacks_nav.prev{
    left: 46%;
  }
  .callbacks_nav.next{
    right: 46%;
  }
}
@media screen and (max-width: 1366px){
  .banner-top, .banner-top1, .banner-top2, .banner-top3, .layer{
    min-height: 660px;
  }
}
@media screen and (max-width: 1280px){
  .callbacks_nav{
    top: 80%;
  }
  .callbacks_nav.prev{
    left: 45%;
  }
  .callbacks_nav.next{
    right: 45%;
  }
}
@media screen and (max-width: 1024px){
  .banner-top, .banner-top1, .banner-top2, .banner-top3, .layer{
    min-height: 600px;
  }
  .banner-info_agile_w3ls{
    padding-top: 17em;
  }
  .banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
    font-size: 2.8em;
    letter-spacing: 0px;
  }
  .callbacks_nav{
    top: 80%;
  }
}
@media screen and (max-width: 991px){
  .header-top p{
    letter-spacing: 1px;
    font-size: 14px;
  }
  .navbar-light .navbar-brand{
    font-size: 1.1em;
  }
  .navbar-nav{
    background: rgba(0, 0, 0, 0.7);
    padding: 1em 2em;
    text-align: center;
  }
  li.nav-item{
    padding: 0 15px 10px;
  }
  .navbar-light .navbar-nav .nav-link{
    display: inline-block;
  }
}
@media screen and (max-width: 800px){
  .banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
    font-size: 2.5em;
    letter-spacing: 0px;
  }
  .banner-info_agile_w3ls h3 span, .banner-info_agile_w3ls h2 span{
    padding: 0 0px;
  }
  .callbacks_nav{
    top: 80%;
  }
  .callbacks_nav.prev{
    left: 42%;
  }
  .callbacks_nav.next{
    right: 42%;
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
  .navbar-light .navbar-brand{
    font-size: .9em;
  }
  .banner-top, .banner-top1, .banner-top2, .banner-top3, .layer{
    min-height: 550px;
  }
  .banner-info_agile_w3ls{
    padding-top: 15em;
  }
  .banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
    font-size: 2.2em;
    letter-spacing: 0px;
  }
  .banner-info_agile_w3ls p{
    font-size: .9em;
    margin: 1em 0;
    letter-spacing: 4px;
  }
  .callbacks_tabs{
    top: 39%;
  }
  .callbacks_tabs a{
    width: 30px;
    height: 30px;
    font-size: 13px;
    line-height: 25px;
  }
}
@media screen and (max-width: 600px){
  .banner-top, .banner-top1, .banner-top2, .banner-top3, .layer{
    min-height: 520px;
  }
  .banner-info_agile_w3ls{
    padding: 0 3em;
    padding-top: 14em;
  }
  .banner-info_agile_w3ls a{
    letter-spacing: 2px;
    font-size: 13px;
  }
  .callbacks_nav.prev{
    left: 41%;
  }
  .callbacks_nav{
    top: 80%;
  }
  .callbacks_nav.next{
    right: 41%;
  }
}
@media screen and (max-width: 568px){
  header{
    padding: 0em 0;
  }
  .banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
    font-size: 2em;
  }
}
@media screen and (max-width: 480px){
  .banner-info_agile_w3ls{
    padding: 0 3em;
    padding-top: 13em;
  }
  .callbacks_nav.prev{
    left: 38%;
  }
  .callbacks_nav.next{
    right: 38%;
  }
}
@media screen and (max-width: 414px){
  .banner-info_agile_w3ls{
    padding: 0 2em;
    padding-top: 13em;
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
</style>
