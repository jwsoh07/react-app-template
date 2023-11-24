const fs = require('fs-extra');

fs.copySync('public', 'dist', {
    dereference: true,
    filter: file => file !== 'public/index.html'
})
