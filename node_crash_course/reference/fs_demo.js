const fs = require('fs');
const path = require('path');

// fs = file system module

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => { //asynchronous version - there is also a synchronous 
//     if(err) throw err;
//     console.log('Folder created...');
//  }); 

 // Create and write to file

//  fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => { //asynchronous version - there is also a synchronous 
//     if(err) throw err;
//     console.log('File written to...');

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love NodeJS', err => { //asynchronous version - there is also a synchronous 
//         if(err) throw err;
//         console.log('File written to...');
//      }); 
//  }); 

//Read file
    // fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => { 
    //     if(err) throw err;
    //     console.log(data);
    //  }); 

    //  fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => { 
    //     if(err) throw err;
    //     console.log('File renamed...');
    //  }); 
 
