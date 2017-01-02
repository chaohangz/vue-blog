<template>
	<div id="header">
		<h3>{{ name }}</h3>
		<h4>{{ title }}</h4>
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