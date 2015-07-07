var fs = require('fs')
var filePath = process.argv[2]
var extension = process.argv[3]

fs.readdir(filePath, function(err, data) {
	if(err){
		console.log("Error!")
		return
	}
	
	for(var i = 0; i < data.length; i++) {
		if(data[i].split('.')[1] === extension) {
			console.log(data[i])
		}
	}
})


/*
	var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/