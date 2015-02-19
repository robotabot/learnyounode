var http = require('http');
var queue = process.argv.slice(2, process.argv.length);
var results = [];
var waiting = 0;

// map creates a new array with the results of the callback function
// the function is called for each element of the array
// @param currentValue - the current array element
// @param index
// @param array - the array this map was called on
queue.map(function (url, index) {
	http.get(url, function (res) {
		// increment waiting when each element is processed
		waiting++;
		// create a local variable to hold the results of the http.get
		var alldata = '';
		res.setEncoding('utf8');
		// when data is returned concatenate it to alldata
		res.on('data', function (data) {alldata += data});
		// when the response sends the end event
		// assign the completed data to the results array
		// in the same position it was in the queue array
		res.on('end', function () {
			results[index] = alldata;
			// when waiting is 0
			// log the elements of the results array
			waiting--;
			if (!waiting) {
				results.map(function (result) {
					console.log(result);
				})
			}
		})
	})
});
