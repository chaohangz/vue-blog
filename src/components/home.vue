<template>
	<div id="home_wrap">
		<div class="left_wrap">
			<div class="posts_wrap" v-for="post in posts">
				<time class="posts_time">{{ post.time }}</time>
				<router-link v-bind:to="post.time" class="posts_title">{{ post.title }}</router-link>
				<div class="posts_gist">{{ post.gist }}<router-link v-bind:to="post.time" class="readmore">阅读全文</router-link>
				</div>
			</div>
		</div>
		<div class="sild_wrap">
			<div class="search">
				<input type="search" placeholder="Search...">
				<button type="sublime"><img src="../assets/search.png"></button>
			</div>
			<div class="new_posts_list">
				<h3>最新文章</h3>
				<ul>
					<li v-for="post in posts" class="new_posts_title"><router-link to="2016-11-17">{{ post.title }}</router-link></li>
				</ul>
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
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-18',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				},
				{
					time: '2016-11-17',
					title: '浅谈芭芭拉拉小魔仙',
					gist: '浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙浅谈芭芭拉拉小魔仙'
				}
			]
		}
	}
}
</script>

<style>
	#home_wrap {
		overflow: hidden;
	}

	.left_wrap {
		float: left;
		width: 60%;
	}

	@media screen and (max-width: 767px) {
		.left_wrap {
			width: 100%;
		}
	}

	.posts_wrap {
		padding-bottom: 2rem;
	}

	.posts_time {
		display: block;
		color: #767676;
		font-weight: bold;
	}

	.posts_title {
		display: block;
		font-size: 1.4rem;
		font-weight: bold;
		padding-top: .5rem;
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

	.sild_wrap {
		float: right;
		width: 30%;
	}

	@media screen and (max-width: 767px) {
		.sild_wrap {
			display: none;
		}
	}

	.search {
		position: relative;
	}

	.search input {
		width: 100%;
		height: 40px;
		padding: 10px 5px;
		border: 1px solid #bbb;
		border-radius: 3px;
		color: #666;
		background: white;
		outline: none;
	}

	.search input:focus {
		border-color: black;
	}

	.search button {
		position: absolute;
		top: 0;
		right: 0;
		width: 38px;
		height: 32px;
		margin: 4px;
		background: black;
		border: 0;
		border-radius: 3px;
		text-align: center;
		cursor: pointer;
	}

	.search button img {
		width: 20px;
	}

	.new_posts_list {
		margin-top: 2.5rem;
		font-size: 14px;
	}

	.new_posts_list ul {
		margin-top: 1rem;
		border-bottom: 1px solid #ddd;
	}

	.new_posts_title {
		padding: 12px 0;
		border-top: 1px solid #ddd;
	}

	.new_posts_title a {
		color: #222;
	}


</style>