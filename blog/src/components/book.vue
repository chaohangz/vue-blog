<template>
	<div id="book_wrap">
		<div class="life_list" v-for="book in books">
			<div class="life_img">
				<img src="../assets/beijingfayuansi.jpg">
			</div>
			<div class="life_info">
				<h2 class="life_title"><a href="https://book.douban.com/subject/1049584/">{{ book.title }}<a></h2>
				<h4 class="book_author">作者：{{ book.author }}</h4>
				<p class="life_summary">简介：{{ book.summary }}</p>
				<div class="book_read"><router-link to="/book">{{ book.read }}</router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'book',
		data() {
			return {
				books: [
					{
						title: '北京法源寺',
						author: '李敖',
						summary: '关于这部小说的主题和内涵，李敖自称很丰富。全书以具象的、至今屹立的古庙为纵线，以抽向的、烟消云散的历朝各代的史事人物为横剖，“写了四百多个小主题、小单元，如生死、鬼神、家国、君臣、朝野、夷夏、忠奸等，都有十分精辟的见解。”他说他写的就是一部哲理小说，是用文学的手法来表现。几乎全写男性的豪侠、男性的忠义、男性的决绝、男性的悲壮，以及男性的思想与行动。这种强烈表达思想的小说，内容丰富是十分罕见的。',
						read: '读《北京法源寺》有感'
					},
					{
						title: '北京法源寺',
						author: '李敖',
						summary: '关于这部小说的主题和内涵，李敖自称很丰富。全书以具象的、至今屹立的古庙为纵线，以抽向的、烟消云散的历朝各代的史事人物为横剖，“写了四百多个小主题、小单元，如生死、鬼神、家国、君臣、朝野、夷夏、忠奸等，都有十分精辟的见解。”他说他写的就是一部哲理小说，是用文学的手法来表现。几乎全写男性的豪侠、男性的忠义、男性的决绝、男性的悲壮，以及男性的思想与行动。这种强烈表达思想的小说，内容丰富是十分罕见的。',
					},
					{
						title: '北京法源寺',
						author: '李敖',
						summary: '关于这部小说的主题和内涵，李敖自称很丰富。全书以具象的、至今屹立的古庙为纵线，以抽向的、烟消云散的历朝各代的史事人物为横剖，“写了四百多个小主题、小单元，如生死、鬼神、家国、君臣、朝野、夷夏、忠奸等，都有十分精辟的见解。”他说他写的就是一部哲理小说，是用文学的手法来表现。几乎全写男性的豪侠、男性的忠义、男性的决绝、男性的悲壮，以及男性的思想与行动。这种强烈表达思想的小说，内容丰富是十分罕见的。'
					},
					{
						title: '北京法源寺',
						author: '李敖',
						summary: '关于这部小说的主题和内涵，李敖自称很丰富。全书以具象的、至今屹立的古庙为纵线，以抽向的、烟消云散的历朝各代的史事人物为横剖，“写了四百多个小主题、小单元，如生死、鬼神、家国、君臣、朝野、夷夏、忠奸等，都有十分精辟的见解。”他说他写的就是一部哲理小说，是用文学的手法来表现。几乎全写男性的豪侠、男性的忠义、男性的决绝、男性的悲壮，以及男性的思想与行动。这种强烈表达思想的小说，内容丰富是十分罕见的。'
					}
				]
			}
		}
	}
</script>

<style>
	.book_author {
		padding: 4px 0;
		color: #767676;
	}

	.book_read {
		padding-top: 15px;
	}

	.book_read a {
		color: #838181;
	}
</style>