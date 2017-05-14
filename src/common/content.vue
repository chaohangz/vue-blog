<template>
	<div id="content">
		<div id="content_wrap">
			<nav>
				<router-link to="/home" id="home">博客</router-link>
				<div id="life" v-on:mouseover="show = true" v-on:click="show = true" v-on:mouseout="show = false">
					生活<div id="life_arrow"></div>
					<transition name="fade">
						<div id="life_box" v-show="show">
							<router-link to="/book">读书</router-link>
							<router-link to="/movie">电影</router-link>
							<router-link to="music">音乐</router-link>
							<router-link to="/photo">摄影</router-link>
						</div>
					</transition>
				</div>
				<router-link to="/about" id="about">关于我</router-link>
			</nav>
			<router-view keep-alive></router-view>
		</div>
		<div id="goTop"></div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'content',
		data() {
			return {
				show: false
			}
		},
		mounted() {
			let goTop = $('#goTop')
			let body = $('body')
			goTop.click(function() {
				body.animate({scrollTop: 0}, 500)
				return false
			});
			console.log($(document).scrollTop())
			if ($(document).scrollTop() < 500) {
				goTop.css('display', 'none');
			}
		}
	}
</script>

<style>
	#content {
		position: relative;
		width: 100%;
		background: white;
	}

	#content a:hover {
		color: #42b983;
	}

	#content a:active {
		color: #42b983;
	}

	#content_wrap {
		width: 70%;
		margin: 0 auto;
	}

	@media screen and (max-width: 767px) {
		#content_wrap {
			width: 90%;
		}
	}

	nav {
		padding-top: 6rem;
		padding-bottom: 4rem;
		font-size: 1.8rem;
		font-weight: bold;
		z-index: 999;
	}

	@media screen and (max-width: 767px) {
		nav {
			padding-top: 4rem;
			padding-bottom: 3rem;
		}
	}

	#home {
		display: inline-block;
		color: black;
	}

	#life {
		position: relative;
		display: inline-block;
		cursor: pointer;
		color: black;
		padding-left: 30px;
		padding-right: 20px;
	}

	#life_arrow {
		float: right;
		border: 8px solid;
		border-color: black transparent transparent transparent;
		margin: 0.9rem 6px;
	}

	#life_box {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 1.9rem;
		margin-left: 30px;
		font-size: 1.4rem;
		background: white;
		z-index: 999;
	}

	#life_box a {
		display: block;
		color: black;
		padding: 10px;
	}

	#about {
		display: inline-block;
		color: black;
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .6s;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}

	#goTop {
		cursor: pointer;
		text-align: center;
		width: 45px;
		height: 45px;
		color: #fff;
		font-size: 40px;
		line-height: 40px;
		background: #565a5f;
		opacity: 0.8;
		border-radius: 4px;
		bottom: 20px;
		right: 100px;
		position: fixed;
	}

	#goTop:before {
		content: "\21E7";
	}
</style>