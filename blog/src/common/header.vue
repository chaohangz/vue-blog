<template>
	<div id="header">
		<img src="../assets/header2.jpg">
		<div class="text_box">
			<div class="text">
				<router-link to="/home"><h1>{{ name }}</h1></router-link>
				<h2>{{ title }}</h2>
			</div>
		</div>
		<div class="button_down">
			<div class="arrow"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				name: 'CHAOHANGZ',
				title: '不如吃茶去'
			}
		}
	}
</script>

<style>
	#header {
		position: relative;
		height: 600px;
		height: 100vh;
	}

	#header img {
		width: 100%;
		width: 100vw;
		height: 100%;
		height: 100vh;
		object-fit: cover;
		position: fixed;
		left: 0;
		top: 0;
	}

	#header .text_box {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
	}

	#header .text_box .text {
		padding-left: 4rem;
		padding-left: 10vw;
		padding-bottom: 3rem;
		padding-top: 3rem;
	}

	@media screen and (max-width: 767px) {
	  #header .text_box .text {
	  	padding-left: 20px;
	  }
	}

	#header .text_box h1 {
		color: white;
		font-size: 3rem;
	}

	#header .text_box h2 {
		color: white;
		font-size: 2rem;
	}

	.button_down {
		position: absolute;
		bottom: 3rem;
		right: 4rem;
		right: 10vw;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		border: 1px solid white;
		cursor: pointer;
	}

	.button_down .arrow {
		width: 0;
		height: 0;
		border: 0.8rem solid;
		margin: 0.7rem auto;
		border-color: white transparent transparent transparent;
	}

	@media screen and (max-width: 767px) {
	  .button_down {
	  	display: none;
	  }
	}
</style>