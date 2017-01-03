<template>
	<div id="home_wrap">
		<div class="posts_wrap" v-for="post in posts">
			<time class="posts_time">{{ post.time }}</time>
			<h2 class="posts_title"><a href="#">{{ post.title }}</a></h2>
			<div class="posts_gist">{{ post.gist }}<a href="#" class="readmore">阅读全文</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			posts: [
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙' +
					'浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙' +
					'浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙' +
					'浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				}
			]
		}
	}
}
</script>

<style>
	#home_wrap {
		overflow: hidden;
		margin-top: 2rem;
	}
	.posts_wrap {
		width: 60%;
		float: left;
		padding-bottom: 2rem;
	}

	.posts_time {
		color: #767676;
		font-weight: bold;
	}

	.posts_title {
		font-size: 1.4rem;
		font-weight: bold;
		padding-top: .5rem;
	}

	.posts_title a {
		color: #444;
	}

	.posts_gist {
		font-size: 1rem;
		padding-top: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #bbb;
	}

	.readmore {
		color: blue;
	}
</style>