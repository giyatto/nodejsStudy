var argv = process.argv;
var dirName = argv[2];
var extenson = argv[3];

var module = require('./step6(module).js')

module(dirName, extenson, function (err, data){
	if(err){
		console.err("Error!" + err)
		return
	}
	data.forEach(function (list) {
		console.log(list);
	})
})



/*
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/