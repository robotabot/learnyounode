// add numbers passed in
if(process.argv.length > 2) {
	var total = 0;
	for(i=2; i<process.argv.length; i++) {
		total += Number(process.argv[i]);
	}
}else {
	console.log('No args passed...');
}

console.log(total);
