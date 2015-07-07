var path = require('path');
var fs = require('fs');

module.exports = function (dirName, extention, callback){

  fs.readdir(dirName, function (err, data){
    if(err){
     return callback(err)
    }

     data = data.filter(function (file) {
      return path.extname(file) === '.' + extention;
    })

    callback(null, data)
  })
}


/*
    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/