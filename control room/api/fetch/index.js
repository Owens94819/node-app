module.exports = function (router) {
    router.use(cors({ origin: '*' }))
    router.use(function(req,res,next){
         next()
    })

    router.use(async (req, res)=> {
        var url = req.query.url;
        var type = req.query.type||'text';
      
        try {
            url = await $fetch(url);
            type = type in url?type:text;

            url = await url[type]();
        } catch (error) {
            
        }
        res.send(url);
    });

    return router;
}


