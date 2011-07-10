module.exports = function(router) {

router.get('/', function(req, res) {
    console.dir(req.vhost)
    res.send('Welcome to our API!');
});

return router;
}