//SPDX-License-Identifier: Apache-2.0

var tuna = require('./controller.js');

module.exports = function(app){

  app.get('/get_package/:loca', function(req, res){
    tuna.get_package(req, res);
  });
  app.get('/add_package/:tuna', function(req, res){
    tuna.add_package(req, res);
  });
  app.get('/get_all_package', function(req, res){
    tuna.get_all_package(req, res);
  });
  app.get('/change_holder/:holder', function(req, res){
    tuna.change_holder(req, res);
  });
}
