module.exports = function(router) {
    
router.get('/', function(req, res) {
    res.send('Welcome to our API!');
});


return router;
}