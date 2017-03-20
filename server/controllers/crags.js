var Crag = require('mongoose').model('Crag');

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
  //Get the length of tags object
  var tagLength=0;
  var newTags = [];
  var tg = [];

  for (var i in req.body.tags) {
    if (req.body.tags.hasOwnProperty(i)) {
        tagLength++;
    }
  } 
  //create an array of tags to save
  for(var i=0;i<tagLength;i++){
         tg[i] = req.body.tags[i];
         newTags.push({text: tg[i]});
  }
  console.log('tags',JSON.stringify(newTags));
  //populate Crag Schema to save to db
  var newCrag = {
    name: req.body.name,
    region: req.body.region,
    location: req.body.location,
    grade: req.body.grade,
    tags: newTags
  }

  console.log('newCrag',JSON.stringify(newCrag));
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