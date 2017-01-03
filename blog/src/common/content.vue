<template>
	<div id="content">
		<div id="content_wrap">
			<nav>
				<router-link to="/home" id="home">BLOG</router-link>
				<div id="life" v-on:mouseover="show = true" v-on:mouseout="show = false">
					LIFE<div id="life_arrow"></div>
					<transition name="fade">
						<div id="life_box" v-show="show">
							<router-link to="/book">BOOK</router-link>
							<router-link to="/movie">MOVIE</router-link>
							<router-link to="music">MUSIC</router-link>
							<router-link to="/photo">PHOTO</router-link>
						</div>
					</transition>
				</div>
				<router-link to="/about" id="about">ABOUT</router-link>
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
		width: 60%;
		margin: 0 auto;
	}

	nav {
		padding-top: 6rem;
		font-size: 1.2rem;
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
		padding-left: 20px;
		padding-right: 10px;
	}

	#life_arrow {
		float: right;
		border: 6px solid;
		border-color: black transparent transparent transparent;
		margin: 8px 6px;
	}

	#life_box {
		position: absolute;
		top: 0;
		left: 0;
		padding-top: 1.2rem;
		padding-left: 20px;
	}

	#life_box a {
		color: black;
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