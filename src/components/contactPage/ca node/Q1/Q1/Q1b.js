const path=require('path');
console.log(path.dirname('./path/path.js'));// returns the directory name 
console.log(path.extname('./path/path.js'));//returns the extension
console.log(path.basename('./path/path.js'));// returns the file name with extension
console.log(path.parse('./path/path.js'));// formats a path string into a path object