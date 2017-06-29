var ghpages = require('gh-pages');
var path = require('path');




ghpages.publish('public', {
    repo: 'https://github.com/jonayGodoy/hablando_con_maquinas_dev.git'
}, function(err) {
    console.log(err || "dev_build push correct");});