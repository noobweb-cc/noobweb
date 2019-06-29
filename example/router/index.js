const routes = [
    {
        name: 'smoking',
        path: '/',
        component: resolve => require(['../../smoking'], resolve),
    }
]

export default new VueRouter({
    routes
})