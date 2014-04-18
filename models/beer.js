var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-floripa');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.once('open', function () {
  console.log('Conexão aberta.')
});

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0 },
  style: { type: String, default: '' },
  brewery: { type: String, default: '' },
  category: { type: String, default: '' },
  country: { type: String, default: '' },
  created: { type: Date, default: Date.now }
});

exports.model = mongoose.model('Beer', BeerSchema);
