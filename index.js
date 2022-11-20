// Program to identify files and folders
// of a directory

// Importing File System and Utilities module
const fs = require('fs')
const util = require('util')

// Convert callback based methods to
// promise based methods
const readDir = util.promisify(fs.readdir)
const lStat = util.promisify(fs.lstat)


const fileOrFolder = async (path) => {
	const filenames = await readDir(path)

	for (let filename of filenames) {

		// Calling lstat method to give the
		// stats object for every directory
		const stats = await lStat(filename)

		// Check file or folder
		if (stats.isFile()) {
			console.log(
			`${filename} ---------> File`)
		} else {
			console.log(
			`${filename} ---------> Folder`)
		}
	}
}

// Driver code
// The process.cwd() gives current
// working directory
fileOrFolder(process.cwd())

	// If promise is rejected
	.catch(err => {
		console.log(`Error occurs,
		Error code -> ${err.code},
		Error No -> ${err.errno} `);
	});
