const fs = require('fs');

fs.readdir('.',(err,files)=>{
	let filenames = files.map((file,ind)=>{
		return { url: "/dist/imgs/speakers/"+file};
	});
	fs.writeFile("filenames.json",JSON.stringify(filenames),(err)=>{
	console.log(err);
	});
});
