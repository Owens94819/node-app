module.exports = function (router) {
    router.use(cors({ origin: '*' }))

    router.use(async (req, res) => {
        var url = req.query.url;
        var type = req.query.type || 'text',
            type = type.trim().toLowerCase()

        var method = req.method||'GET'

        //console.log(req.headers);

        try {
            url = await $fetch(url,{
                method,
                headers:req.headers,
                //body: req.body
            });

            type = type in url ? type : text;
         //   console.log(url.headers);

             var header = url.headers

            url = await url[type]();
            header.forEach((val,key) => {
                res.header(key,val)
            });
        } catch (error) {
              url = 'invalid url definition'
        }

        console.log(res.getHeader('content-type'));
        res.send(url);
    });

    return router;
}


