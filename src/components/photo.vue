<template>
	<div id="photo_wrap">
		<div class="photo_frame" v-for="(photo,index) in photos">
			<img v-bind:src=" 'src/assets/photo/' + index + '.jpg' ">
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'photo',
		data() {
			return {
				photos: [
					{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
				]
			}
		}
	}
</script>

<style>
	#photo_wrap {
		text-align: center;
		width: 100%;
		overflow: hidden;
	}

	.photo_frame {
		width: 200px;
		height: 200px;
		display: inline-block;
		padding-right: 1%;
		padding-top: 8px;
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.photo_frame {
			width: 100px;
			height: 100px;
		}
	}

	.photo_frame img {
		width: 100%;
		border-radius: 3px;
	}
</style>