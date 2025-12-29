
const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200', dest: 'src/assets/pages/fibre/hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1516383740770-fbcc5c24770d?auto=format&fit=crop&q=80&w=1200', dest: 'src/assets/pages/xdsl/detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200', dest: 'src/assets/services/connectivity.jpg' }
];

downloads.forEach(download => {
  const file = fs.createWriteStream(download.dest);
  https.get(download.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${download.dest}`);
    });
  }).on('error', err => {
    fs.unlink(download.dest, () => {});
    console.error(`Error downloading ${download.dest}: ${err.message}`);
  });
});
