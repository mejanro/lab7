var projects = require('../projects.json');

/*
 * GET home page.
 */

// exports.view = function(request, response){
//  	response.render('viewAlt', projects);
//};

exports.view = function(request, response){
  	response.render('index', projects);
};