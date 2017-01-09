<template>
	<div class="movie_wrap">
		<div class="life_list" v-for="movie in movies">
			<div class="life_img"><img src="../assets/aomanyupianjian.jpg"></div>
			<div class="life_info">
				<h2 class="life_title"><a href="https://movie.douban.com/subject/1418200/">{{ movie.title }}</a></h2>
				<h4 class="movie_director">导演：{{ movie.director }}</h4>
				<h4 class="movie_actor">主演：{{ movie.actor }}</h4>
			</div>
			<p class="life_summary">简介：{{ movie.summary }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'movie',
		data() {
			return {
				movies: [
					{
						title: '傲慢与偏见',
						director: '乔·赖特',
						actor: '凯拉·奈特莉 / 马修·麦克费登',
						summary: '根据简·奥斯汀同名小说改编。电影展示了十九世纪初英国乡村生活和社会风貌。重点是女主很美。'
					},
					{
						title: '傲慢与偏见',
						director: '乔·赖特',
						actor: '凯拉·奈特莉 / 马修·麦克费登',
						summary: '根据简·奥斯汀同名小说改编。电影展示了十九世纪初英国乡村生活和社会风貌。重点是女主很美。'
					},
					{
						title: '傲慢与偏见',
						director: '乔·赖特',
						actor: '凯拉·奈特莉 / 马修·麦克费登',
						summary: '根据简·奥斯汀同名小说改编。电影展示了十九世纪初英国乡村生活和社会风貌。重点是女主很美。'
					}
				]
			}
		}
	}
</script>

<style>

</style>