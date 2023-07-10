const fs = require('fs');

var data = 'This is a message!';


// write file
// fs.writeFile('message2.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });


// read file
fs.readFile('message2.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 