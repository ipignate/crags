var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-double')(mongoose); 

//only schema, no model
var tagSchema = new Schema({
  tag: {type: String}
});

// model with tagSchema embedded
var cragSchema = new Schema({
  name: {type:String},
  region: {type:String},
  location: {type: [mongoose.SchemaTypes.Double]},
  grade: {type:String},
  tags: [tagSchema]
});
var Crag = mongoose.model('Crag', cragSchema);

function createDefaultCrags() {
  Crag.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Crag.create({name: 'As Apalpadelas na Parede',region:'Buracas',location:[40.0459,-8.495951], grade:'6A+',tags: [{tag:'Family'},{tag:'Dog'}]});
      Crag.create({name: 'Sobe Sobe',region:'Montejunto Velho',location:[39.166111,-9.053056], grade:'5+', tags:[{tag:'Restaurant'}]});
      Crag.create({name: 'Penedinho',region:'Sintra',location:[38.79221,-9.391251], grade:'4+',tags:[{tag:'Family'},{tag:'Restaurant'}]});
      Crag.create({name: 'Sem Unhas',region:'Cabo da Roca',location:[39.166111,-9.053056], grade:'5+',tags:[{tag:'Hospital'}]});
      Crag.create({name: 'Sem maos',region:'Guia',location:[38.6956,-9.446506], grade:'6+',tags:[{tag:'Family'},{tag:'Dog'},{tag:'Restaurant'}]});
      Crag.create({name: 'Fica Fica',region:'Guia',location:[38.6956,-9.446506], grade:'5+',tags:[{tag:'Family'},{tag:'Dog'},{tag:'Restaurant'}]});
      Crag.create({name: 'Escadinha',region:'Guia',location:[38.6956,-9.446506], grade:'4+',tags:[{tag:'Family'},{tag:'Dog'},{tag:'Restaurant'}]});
      Crag.create({name: 'Pocahontas',region:'Guia',location:[38.6956,-9.446506], grade:'5+',tags:[{tag:'Family'},{tag:'Dog'},{tag:'Restaurant'}]});
      Crag.create({name: 'Sem pachorra',region:'Sesimbra',location:[38.433482,-9.120501], grade:'5C',tags:[{tag:'Family'}]});
      Crag.create({name: 'O vomito salgado',region:'Encosta dos Bebados',location:[38.433482,-9.120501], grade:'5A',tags:[{tag:'Shop'}]});
      Crag.create({name: 'Crusher',region:'Bucelas',location:[38.433482,-9.120501], grade:'5+',tags:[{tag:'Restaurant'},{tag:'Shop'}]});
    }
  })
}

exports.createDefaultCrags = createDefaultCrags;