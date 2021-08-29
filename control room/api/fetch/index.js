

module.exports = async function (req, res) {
    // router.use(cors({ origin: '*' }))
    //  router.use(async (req, res) => {

    var url = req.params['0'];
   
   // var type = req.query.type || 'text',
     //   type = type.trim().toLowerCase()

    url = new Base64(url).decode()

    var method = req.method || 'GET'


    try {
        var obj = {
            method,
            headers: req.headers
            //body: req.body
        }

        url = await fetch(url,obj);


      //  type = type in url ? type : 'text';

       res.status(url.status)

       // var header = url.headers

        url = await url.text();
console.log(url.headers);
       //url.headers.forEach((val, key) => {
       // res.header(key, val)
       // });

      //  res.header('x-powered-by', 'nimo')
        res.send(url);
    } catch (error) {
         // console.log(error);
       if (error.message) {
           res.header('x-powered-by', 'nimo')
           res.status(400).json(error)
       }
       
    }
    // });
    //  return router
}

////git push heroku main

//heroku logs --tail --app nimo2000