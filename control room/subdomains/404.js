module.exports = function(router) {

router.get('/', function(req, res) {
    console.dir(req.vhost)
    res.send('404');
});

return router;
}