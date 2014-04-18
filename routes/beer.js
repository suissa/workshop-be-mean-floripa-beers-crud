var Model = require("../models/beer").model;

var _create = function(req, res){
  var dados = req.body;

  var model = new Model(dados);

  model.save(function (err, data) {
    if (err){
      return console.log('Erro: ', err);
    }
    console.log('Cerveja Inserida', data);
    res.json(data);
  });
}

var _retrieve = function(req, res){
  var query = {};

  Model.find(query, function (err, data) {
    if (err){
      return console.log('Erro: ', err);
    }
    console.log('Listagem', data);
    return res.json(data);

  });
}

var _findOne = function(req, res, callback){
  var query = {_id: req.params.id};

  Model.findOne(query, function (err, data) {
    if (err){
      return console.log('Erro: ', err);
    }

    console.log('Cerveja: ', data);

    var dados = {
      title: 'Cervejaria Be MEAN',
      cerveja: data
    }
    return res.json(data);

  });
}

var _update = function(req, res, callback){
  var query = {_id: req.params.id};

  var mod = req.body;

  Model.update(query, mod, function (err, data) {
    if (err){
      return console.log('Erro: ', err);
    }

    console.log('Cerveja Atualizada', data);
    var dados = {
      title: 'Cervejaria Be MEAN',
      cerveja: data
    }

    res.json(data);
  });
}

var _delete = function(req, res, callback){
  var query = {_id: req.params.id};

  Model.remove(query, function (err, data) {
    if (err){
      return console.log('Erro: ', err);
    }

    console.log('Cerveja Deletada', data);
    
    var dados = {
      title: 'Cervejaria Be MEAN',
      msg: 'CERVEJA DELETADA COM SUCESSO'
    }

    res.json(data);
  });
}

exports.create = _create;
exports.retrieve = _retrieve;
exports.update = _update;
exports.delete = _delete;
exports.findOne = _findOne;






