var Crag = require('mongoose').model('Crag');
var log = require('morgan');

exports.getCrags = function(req, res) {
  Crag.find(function(err,crags){
          if(err)
            res.send(err);
          res.json(crags);
        });
  };

exports.getCrag = function(req,res) {
  Crag.findOne({_id:req.params.id},function(err,crag){
        if(err)
          res.send(err);
        res.json(crag);
      });
};

exports.deleteCrag = function(req, res) {
  Crag.remove({_id: req.params.id}, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Successfully deleted' });
  })
}

exports.createCrag = function(req, res) {
  //Serialise the req.body.tags into an array to update tagSchema
  var tg = req.body.tags.split(',');
  console.log('req.body:'+req.body.tags);
  console.log('tg:'+tg);
  var tagLength = tg.length;
  var newTags = [];

  for(var i=0;i<tagLength;i++){
         newTags.push({tag: tg[i]});
  }
  
  var newCrag = {
    name: req.body.name,
    region: req.body.region,
    location: req.body.location,
    grade: req.body.grade,
    tags: newTags
  }

  var crag=new Crag(newCrag);
  crag.save(function(err){
    if(err) res.send(err);
    res.send({message: 'Crag added'});
  });
};

exports.updateCrag = function(req, res) {
  Crag.findOne({_id:req.params.id},function(err,crag){
    if(err)
      res.send(err);
    // Get all body properties
    for(prop in req.body){
      crag[prop]=req.body[prop];
    }
    // Save them all to the database
    crag.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Crag updated!' });
    });
  });
};

exports.queryCrags = function(req,res){
  var name      = req.body.name;
  var region    = req.body.region;
  var grade     = req.body.grade;

  // Open a generic mongoose query - FIND everything
  var query = Crag.find({});

  // Filter the stuff user wants .. return everything on no filter
  if(name){
    query.where('name').equals(name);
  }
  if(region){
    query.where('region').equals(region);
  }
  if(grade){
    query.where('grade').equals(grade);
  }

  //Execute the query
  query.exec(function(err,queryResults){
    if(err)
      res.send(err);
    else
      res.json(queryResults);
  });
};