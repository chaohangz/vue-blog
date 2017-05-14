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

import One from './components/one.vue'
import Two from './components/two.vue'

Vue.component('my-head', Header)

Vue.component('my-content', Content)

Vue.component('my-foot', Footer)

// router
Vue.use(VueRouter)

const routes = [
	{path: '/home', component: Home},
	{path: '/book', component: Book},
	{path: '/movie', component: Movie},
	{path: '/music', component: Music},
	{path: '/photo', component: Photo},
	{path: '/about', component: About},
	{path: '2016-11-17', component: One},
	{path: '2016-11-18', component: Two}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	el: '#app',
	router: router
}).$mount('#app')


