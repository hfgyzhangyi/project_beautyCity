<template>
    <div class="template">
        <footer class="py-5">
			<div class="container py-md-3">
				<div class="row footer-grids pb-md-5 pb-3">
					<div class="col-md-3 col-sm-6 col-6">
						<a href="javascript:;"><img src="../assets/phone_icon.png"/>电话</a>
					</div>
					<div class="col-md-3 col-sm-6 col-6">
						<a href="javascript:;"><img src="../assets/email_icon.png"/>邮件</a>
					</div>
					<div class="col-md-3 col-sm-6 col-6 mt-md-0 mt-2">
						<a href="javascript:;"><img src="../assets/qq_icon.png"/>QQ</a>
					</div>
					<div class="col-md-3 col-sm-6 col-6 mt-md-0 mt-2">
						<a href="javascript:;"><img src="../assets/message_icon.png"/>在线咨询</a>
					</div>
				</div>
				<div class="subscribe-grid text-center">
					<p class="para three mt-4">旅心团队</p>
					<h5>订阅我们的最新消息</h5>
					<p>
                        预定
						<span>九折</span>
                        优惠
                    </p>
					<form action="#" method="post">
						<input class="form-control" type="email" placeholder="预定" name="预定" required="">
					</form>
				</div>
			</div>
		</footer>
        <section class="copyright py-4 text-center">
			<div class="container">
				<p>
                    Copyright © 2018.旅心 All rights reserved.
				</p>
			</div>
		</section>
    </div>
</template>

<script>
export default {
    name:"my-bottom"
}
</script>

<style scoped>
footer{
    background: #212121;
}
article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section{
    display: block;
}
.footer-grids{
    border-bottom: 1px solid #464646;
}
.footer-grids a{
    color: #fff;
    font-size: 18px;
    letter-spacing: 3px;
    font-weight: 600;
    text-transform: uppercase;
}
.footer-grids img{
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;
}
.subscribe-grid{
    margin: 0 auto;
    width: 70%;
}
p.para{
    margin: 0;
    font-size: 0.95em;
    color: #a5a3a3;
    line-height: 2em;
    letter-spacing: 1px;
}
.subscribe-grid p{
    color: #f2994a;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 1em 0 2em;
    text-transform: capitalize;
}
.subscribe-grid p.para{
    color: #aaa;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 1em 0 2em;
    text-transform: lowercase;
}
.subscribe-grid h5{
    color: #fff;
    text-transform: capitalize;
    font-size: 19px;
    letter-spacing: 2px;
    font-weight: 600;
}
.subscribe-grid p span{
    color: #fff;
    font-weight: 600;
    margin: 0 5px;
    text-decoration: underline;
}
.subscribe-grid form{
    position: relative;
    width: 70%;
    margin: auto;
}
.subscribe-grid input[type="email"]{
    display: inline-block;
    background: transparent;
    border: solid 2px #32343a;
    width: 100%;
    outline: none;
    padding: 1em 4em 1em 1em;
    font-size: 1em;
    color: #fff;
    border-radius: 0px;
    letter-spacing: 1px;
}
.copyright{
    background: #1d1d1d;
}
.copyright p{
    color: #fff;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: capitalize;
}
@media screen and (max-width: 991px){
    .footer-grids .col-md-3{
        padding: 0;
    }
    .footer-grids a{
        font-size: 16px;
        letter-spacing: 2px;
    }
    .subscribe-grid{
        width: 100%;
    }
}
@media screen and (max-width: 736px){
    .subscribe-grid p.para{
        font-size: 15px;
    }
    .copyright p{
        letter-spacing: 1px;
    }
}
@media screen and (max-width: 568px){
    .footer-grids .col-md-3{
        padding: 0 15px;
    }
}
@media screen and (max-width: 480px){
    .footer-grids a{
        font-size: 15px;
        letter-spacing: 1px;
    }
    .subscribe-grid p.para{
        font-size: 14px;
    }
    .subscribe-grid h5{
        font-size: 17px;
        letter-spacing: 1px;
    }
    .subscribe-grid form{
        width: 80%;
    }
}
</style>