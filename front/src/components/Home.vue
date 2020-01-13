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
								<router-link class="nav-link" :to="{name:'About'}">关于</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" :to="{name:'Service'}">服务</router-link>
							</li>
							<li class="dropdown nav-item">
								<router-link :to="{name:'Home'}" class="dropdown-toggle nav-link" data-toggle="dropdown">分类
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
							<li class="nav-item">
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
    <section class="booking py-5" id="booking">
			<h3 class="text-center mb-4">Search Your Tour</h3>
			<div class="container">
				<div class="book-form">
					<form action="#" method="post">
						<div class="row">
							<div class="col-md-3 col-sm-6 col-6 px-2 form-time-w3layouts editContent">
								<label class="editContent"><span class="fa fa-user" aria-hidden="true"></span> 姓名</label>
								<input type="text" placeholder="姓名" required="">
							</div>
							<div class="col-md-3 col-sm-6 col-6 px-2 form-date-w3-agileits editContent">
								<label class="editContent"><span class="fa fa-map-marker" aria-hidden="true"></span> 旅游地点</label>
								<select class="form-control">
									<option>目的地</option>
									<option>伦敦</option>
									<option>巴黎</option>
									<option>意大利</option>
									<option>日本</option>
									<option>美国</option>
								</select>
							</div>
							<div class="col-md-2 col-sm-4 col-6 px-2 form-left-agileits-w3layouts editContent">
								<label class="editContent"><span class="fa fa-bus" aria-hidden="true"></span> 出发</label>
								<div class="agileits_w3layouts_main_gridl">
									<input class="date has Datepicker hasDatepicker" id="datepicker" name="Text" type="text" value="时间" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '设置时间';}" required="">
								</div>
							</div>
							<div class="col-md-2 col-sm-4 col-6 px-2 form-left-agileits-w3layouts editContent">
								<label class="editContent"><span class="fa fa-bus" aria-hidden="true"></span> 回归</label>
								<div class="agileits_w3layouts_main_gridl">
									<input class="date has Datepicker hasDatepicker" id="datepicker1" name="Text" type="text" value="返回时间" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '设置时间';}" required="">
								</div>
							</div>
							<div class="col-md-2 px-2 col-sm-4 col-6 form-left-agileits-submit editContent">
								<input type="submit" value="搜索">
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
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
    <my-bottom></my-bottom>
  </div>
</template>

<script>
//http://www.sucai8.cn/demo/2019/10/%E5%A4%A7%E6%B0%94%E6%97%85%E6%B8%B8%E7%BD%91%E7%AB%99%E6%95%B4%E7%AB%99%E6%A8%A1%E6%9D%BF/images/price.jpg
import $ from 'jquery'
export default {
  data(){
    return {
      timer:""
    }
  },
  mounted(){
    this.timer = setInterval(() => {
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
  beforeDestroy(){
    clearInterval(this.timer);
    this.timer = null;
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
/*********************************/
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
/****************Search Your Tour**********************/
.booking h3{
  font-size: 22px;
  color: #333;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
}
.book-form label{
  font-size: 15px;
  color: #333;
  text-align: left;
  display: inline-block;
  float: left;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.book-form input[type="text"], .book-form input[type="date"], .book-form input[type="text"], .book-form input[type="email"]{
  width: 100%;
  color: #9a9797;
  outline: none;
  font-size: 15px;
  padding: 10px 15px;
  letter-spacing: 1px;
  border: 2px solid #fff;
  -webkit-appearance: none;
  margin-bottom: 1em;
  background: #333;
}
.book-form form input[type="submit"]{
  background: #f2994a;
  color: #FFFFFF;
  border: 2px solid #f2994a;
  padding: 8px 15px;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  letter-spacing: 1px;
  margin-top: 2.3em;
  -webkit-appearance: none;
}
.book-form select.form-control{
  outline: none;
  font-size: 15px;
  padding: 7px 10px;
  letter-spacing: 1px;
  width: 100%;
  line-height: 25px;
  background: #333;
  color: #9a9797;
  border: 2px solid #fff;
  box-shadow: none!important;
}
select.form-control:not([size]):not([multiple]){
  height: calc(2.25rem + 10px);
}
/****************关于我们**********************/
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
@media screen and (max-width: 1080px){
  .welcome-grids h3{
    font-size: 22px;
    letter-spacing: 1px;
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
@media screen and (max-width: 768px){
  h2.heading, h3.heading{
    font-size: 45px;
    letter-spacing: 3px;
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
  .welcome-grids h3{
    font-size: 20px;
    letter-spacing: 0px;
  }
  .welcome-grids a{
    font-size: 14px;
    letter-spacing: 1px;
    padding: 11px 30px;
  }
}
@media screen and (max-width: 568px){
  header{
    padding: 0em 0;
  }
  .banner-info_agile_w3ls h3, .banner-info_agile_w3ls h2{
    font-size: 2em;
  }
  .book-form form input[type="submit"]{
    margin-top: .3em;
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
