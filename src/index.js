const Koa = require('koa')
const route = require('./route')
const views = require('koa-views');
const path = require('path')
const app = new Koa

app
.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
.use(route.routes())
.use(route.allowedMethods())


app.listen(3000,()=>{
    console.log('App start at http://localhost:3000')
})