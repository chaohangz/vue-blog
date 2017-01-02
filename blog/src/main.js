import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Header from './components/header.vue'

Vue.use(VueRouter)

const Foo = {template: '<div>foo</div>'}

const routes = [
	// {path: '/home', component: Header},
	// {path: '/app', component: App},
	{path: '/foo', component: Foo}
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



