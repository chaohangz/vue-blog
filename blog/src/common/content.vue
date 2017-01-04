<template>
	<div id="content">
		<div id="content_wrap">
			<nav>
				<router-link to="/" id="home">博客</router-link>
				<div id="life" v-on:mouseover="show = true" v-on:mouseout="show = false">
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
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'content',
		data() {
			return {
				show: false
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

	nav {
		padding-top: 6rem;
		padding-bottom: 4rem;
		font-size: 1.8rem;
		font-weight: bold;
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
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
</style>