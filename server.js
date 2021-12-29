// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.rewrite({ "/reports/:reportId/cities/:cityId": "/items/:itemId" }));
server.listen(3000, () => {
    console.log('JSON Server is running')
})
