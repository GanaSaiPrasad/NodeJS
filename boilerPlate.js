const fs = require("fs");
console.log(fs);
// Getting the Argument & Storing it in a Variable - - 
// Default Argument Value Being Project - - 
const folderName = process.argv[2] || 'Project'
// Creating a Folder (Async Version) --
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the Callback !!!!")
//     if (err) throw err;
// });

// Synchronous Version Of making a directory - - 
try {
    fs.mkdirSync(folderName);

    // Creating Files Synchronously With File Path & Data as Parameters- - 
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (error) {
    console.log("Something went Wrong");
    console.log(error);
}
