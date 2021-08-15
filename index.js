$__dirname = __dirname;

require('./control room/global functions')

const express = require('express'),
    subdomain = require('express-subdomain'),
router = express.Router(),
app = express(),
fs=require('fs'),
fetch = require('node-fetch'),
server = app.listen(process.env.PORT || 1234,()=>{
    var port = server.address().port;
    console.log(`http://localhost:${port}`);
});

app.set('view engine', 'ejs')
app.use(express.static('./lib/'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(require('./control room/header'))
app.use(subdomain('api', require('./control room/subdomain')(router)));

fs.readdirSync(path('views/html routers')).forEach(e=>{
    e = parseString(e)[0]
    e = e
    e= '/'+e
    $e=e
    app.get(e,(req,res)=>{
         e= e.substring(1,e.length)
        res.render(`html routers/${e}`,{name:e||'home'})
    })


})


app.use(require('./control room/404'))

//heroku logs --tail --app nimo2000
//heroku logs --tail --app nimo2000

//git add . 
//git commit -m 'update'

//git push heroku main

//git push