
$__dirname = __dirname;

require('./control room/global functions')

const express = require('express'),
app = express(),
fs=require('fs'),

server = app.listen(process.env.PORT || 1234,()=>{
    var port = server.address().port;
    console.log(`http://localhost:${port}`);
});

//hh
app.set('view engine', 'ejs')
app.use(express.static('./lib/'))
app.use(require('./control room/header'))


var rt = fs.readdirSync(path('views/html routers'));
rt.push('');


rt.forEach(e=>{
    e = parseString(e)[0]
    e = e;
    var $e=e
    e= '/'+e
    app.get(e,(req,res)=>{
        res.render(`html routers/${$e||'home'}`,{name:$e||'home'})
    })
})

rt=undefined;

app.use(require('./control room/404'))

//heroku logs --tail --app nimo2000