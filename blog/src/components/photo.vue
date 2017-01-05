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
		},
		mounted() {
			let photo_wrap = $('#photo_wrap')
			let photo_frame = $('.photo_frame')
			let frameW = photo_frame.outerWidth()
			let cols = Math.floor(photo_wrap.width() / frameW)
			let hArr = []

			photo_frame.each(function(index) {
				let h = $(this).outerHeight()

				if (index < cols) {
					hArr.push(h)
				} else {
					let minH = Math.min.apply(null, hArr)
					let minIndex = $.inArray(minH, hArr) // 返回minH的索引

					$(this).css({
						'position': 'absolute',
						'top': minH + 'px',
						'left': frameW * minIndex + 'px'
					})

					hArr[minIndex] += $(this).outerWidth()
				}
			});
		}
	}
</script>

<style>
	#photo_wrap {
		position: relative;
		overflow: hidden;
		width: 100%;
	}

	.photo_frame {
		float: left;
		width: 24%;
		height: auto;
		padding-right: 1%;
		padding-top: 8px;
	}

	.photo_frame img {
		width: 100%;
		height: auto;
	}
</style>