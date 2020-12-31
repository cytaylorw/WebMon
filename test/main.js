const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const { server } = require('../index');

after(function() {
    server.close();
    console.log('Server stopped')
})

describe('Main', function() {
    it('should run the test', function() {
        expect(true).to.be.ok;
    })

    describe('services', function() {
        requireTestFiles('services');
    });

    describe('api', function() {
        requireTestFiles('api');
    });
})

function requireTestFiles(dir) {
    const testFilesExt = [ 
        '.spec.js', 
        '.test.js',
    ];
    let fullDir = path.join(__dirname, dir);
    fs.readdirSync(fullDir).forEach(file => {
        testFilesExt.some(ext => {
            if(file.endsWith(ext)) {
                require(path.join(fullDir, file));
                return true;
            }
        })
    });
}
