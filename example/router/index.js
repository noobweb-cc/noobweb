const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/', component: { template: '<div>404</div>' } },
    { path: '/a', component: Foo },
    { path: '/b', component: Bar }
]

export default new VueRouter({
    routes
})