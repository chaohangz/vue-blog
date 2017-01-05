<template>
	<div id="music_wrap">
		<div class="life_list" v-for="music in musics">
			<div class="life_img"><img src="../assets/chuangbiangushi.jpg"></div>
			<div class="life_info">
				<h2 class="life_title"><a href="https://music.douban.com/subject/26812952/">{{ music.title }}</a></h2>
				<h4 class="music_singer">歌手：{{ music.singer }}</h4>
				<h4 class="music_time">发行时间：{{ music.time }}</h4>
				<p class="life_summary">简介：{{ music.summary }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'music',
		data() {
			return {
				musics: [
					{
						title: '床边故事',
						singer: '周杰伦',
						time: '2016-06-24',
						summary: '等待是值得的！2016年周杰伦终于推出全新专辑《周杰伦的床边故事》，每次出辑都颠覆大家想象的周杰伦，这次的“床边故事”，当然精采绝伦不让你睡！整张专辑就像是本有声书，由周杰伦说书，诉说10个最与众不同、充满想象的音乐故事！ '
					},
					{
						title: '床边故事',
						singer: '周杰伦',
						time: '2016-06-24',
						summary: '等待是值得的！2016年周杰伦终于推出全新专辑《周杰伦的床边故事》，每次出辑都颠覆大家想象的周杰伦，这次的“床边故事”，当然精采绝伦不让你睡！整张专辑就像是本有声书，由周杰伦说书，诉说10个最与众不同、充满想象的音乐故事！ '
					},
					{
						title: '床边故事',
						singer: '周杰伦',
						time: '2016-06-24',
						summary: '等待是值得的！2016年周杰伦终于推出全新专辑《周杰伦的床边故事》，每次出辑都颠覆大家想象的周杰伦，这次的“床边故事”，当然精采绝伦不让你睡！整张专辑就像是本有声书，由周杰伦说书，诉说10个最与众不同、充满想象的音乐故事！ '
					}
				]
			}
		}
	}
</script>