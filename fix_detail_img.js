
const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  https.get(url, response => {
    if (response.statusCode === 302 || response.statusCode === 301) {
      download(response.headers.location, dest);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${dest}`);
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${dest}: ${err.message}`);
  });
};

download('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200', 'src/assets/pages/xdsl/detail.jpg');
