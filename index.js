$__dirname = __dirname;

require('./control room/global functions')

const express = require('express'),
subdomain = require('express-subdomain'),
router = express.Router(),
app = express(),
fs=require('fs'),
server = app.listen(process.env.PORT || 1234,()=>{
    var port = server.address().port;
    console.log(`http://localhost:${port}`);
});

router.get('/l', function(req, res) {
    res.send('Welcome to our API!');
});

app.use(subdomain('api', router));


app.set('view engine', 'ejs')
app.use(express.static('./lib/'))
app.use(require('./control room/header'))





fs.readdirSync(path('views/html routers')).forEach(e=>{
    e = parseString(e)[0]
    e = e
    e= '/'+e
    app.get(e,(req,res)=>{
     e=req.url;
     e= e.substring(1,e.length)
        res.render(`html routers/${e}`,{name:e||'home'})
    })
})


app.use(require('./control room/404'))


//heroku logs --tail --app nimo2000

//git add . 
//git commit -m 'update'

//git push heroku main

//git push