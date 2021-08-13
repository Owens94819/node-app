$__dirname = __dirname;

require('./control room/global functions')

const express = require('express'),
app = express(),
fs=require('fs'),
server = app.listen(process.env.PORT || 1234,()=>{
    var port = server.address().port;
    console.log(`http://localhost:${port}`);
});


app.set('view engine', 'ejs')
app.use(express.static('./lib/'))
app.use(require('./control room/header'))


var rt = fs.readdirSync(path('views/html routers'));
rt.push('');
rt.forEach(e=>{
    e = parseString(e)[0]
    e = e;
    e= '/'+e
    app.get(e,(req,res)=>{
     e=req.url;
     e= e.substring(1,e.length)
console.log(process.env);

        res.render(`html routers/${e}`,{name:e||'home'})
    })
})
rt=undefined;

app.use(require('./control room/404'))

console.log(process.env);

//heroku logs --tail --app nimo2000