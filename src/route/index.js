const Router = require('koa-router')
const route = new Router
const home = require('./home')

route
.get('home','/', async (ctx,next)=>{
   const excel_data =  await home.read_excel()
   await ctx.render('home', {
    title:excel_data[0] || ['question','answer'],
    data:excel_data.slice(1,10) || []
  });
})
.get('home_search','/search',async (ctx, next)=>{
    const querystring = ctx.querystring
    const excel_data =  await home.read_excel()
    excel_data2=excel_data.slice(1)
    const result = []
    for(var i=0;i<excel_data2.length;i++){
        if(excel_data2[i].toString().indexOf(querystring)>-1){
            result.push(excel_data2[i])
        }
    }
    ctx.body = {result}
})

module.exports = route