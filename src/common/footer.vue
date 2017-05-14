<template>
	<div id="footer">
		<p>
			© Power for
			<a href="https://github.com/chaohangz/vue-blog">CHAOHANGZ</a>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'footer'
	}
</script>

<style>
	#footer {
		position: relative;
		text-align: center;
		background: white;
		padding-top: 4rem;
		padding-bottom: 2rem;
	}

	#footer p,
	#footer p a {
		font-size: 1rem;
		font-weight: bold;
		font-family: 'Play', sans-serif;
	}

	#footer p {color: #767676;}

	#footer p a {color: #444;}

	#footer p a:hover {color: #42b983;}

	#footer img {
		width: 1.2rem;
	}
</style>