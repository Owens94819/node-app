module.exports = function (req,res,next) {
  //  res.render('loading')
  var h = req.headers;

  console.log(`
  \n\n\n
  \n--------------------
  ${h.host}
  \n--------------------
  \n--------------------
  ${h["user-agent"]}
  \n---------------------
  `);
  next();
}