import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './common/header.vue'
import Footer from './common/footer.vue'

Vue.use(VueRouter)

Vue.component('my-head', Header)

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



