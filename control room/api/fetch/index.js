

module.exports = async function (req, res) {
    // router.use(cors({ origin: '*' }))
    //  router.use(async (req, res) => {

    var url = req.params['0'];
    var type = req.query.type || 'text',
        type = type.trim().toLowerCase()

    url = new Base64(url).decode()

    var method = req.method || 'GET'

    //console.log(req.headers);

    try {
        url = await fetch(url, {
            method,
            //headers: req.headers,
            //body: req.body
        });

        type = type in url ? type : text;
        res.status(url.status)
        var header = url.headers

        url = await url[type]();

        header.forEach((val, key) => {
            res.header(key, val)
        });
        res.header('x-powered-by', 'nimo')
        res.send(url);
    } catch (error) {
        res.header('x-powered-by', 'nimo')
        res.status(400).json(error)
    }
    // });
    //  return router;
}