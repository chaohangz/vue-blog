import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './common/header.vue'
import Content from './common/content.vue'
import Footer from './common/footer.vue'

import Home from './components/home.vue'
import Book from './components/book.vue'
import Movie from './components/movie.vue'
import Music from './components/music.vue'
import Photo from './components/photo.vue'
import About from './components/about.vue'

Vue.component('my-head', Header)

Vue.component('my-content', Content)


// router
Vue.use(VueRouter)

const routes = [
	{path: '/home', component: Home},
	{path: '/book', component: Book},
	{path: '/movie', component: Movie},
	{path: '/music', component: Music},
	{path: '/photo', component: Photo},
	{path: '/about', component: About},
]

const router = new VueRouter({
	routes
})

// router.redirect({
// 	'*': '/home'
// })

const app = new Vue({
	router
}).$mount('#app')


