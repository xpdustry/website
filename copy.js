const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');

const start = Date.now();
fse.copySync(srcPath, buildPath, {
	overwrite: true,
	filter: i => (
		!i.endsWith('.ts') &&
		!i.endsWith('.cts') &&
		!i.endsWith('.mts')
	)
});
const end = Date.now();
console.log(`Done in ${end - start}ms.`);

if(process.argv.find(v => v === '--watch' || v === '-w')) {
	console.log('Watching for changes.');
	let last = 0;
	fs.watch(srcPath, {
		persistent: true,
		recursive: true,
	}, async (t, p) => {
		try {
			const start = Date.now();
			if(start - last < 250) return;
			const src = path.join(__dirname, 'src', p);
			const build = path.join(__dirname, 'build', p);
			fse.copySync(src, build, {
				overwrite: true,
				filter: i => (
					!i.endsWith('.ts') &&
					!i.endsWith('.cts') &&
					!i.endsWith('.mts')
				)
			});
			const end = Date.now();
			last = end;
			console.log(`Done in ${end - start}ms.`);
		} catch(e) { console.error(e); }
	});
};