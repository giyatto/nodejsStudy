var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function callback(err, data){
	if(err){
		console.log("Error!")
		return
	}

	console.log(data.toString().split('\n').length -1)
})


/*
    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/