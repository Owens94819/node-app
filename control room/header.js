module.exports = function (req,res,next) {
  //  res.render('loading')
  console.log(req.headers);
  next();
}