import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function run() {
  await download('https://i.postimg.cc/dLLYZWn2/officer1.jpg', './public/officer1.jpg');
  await download('https://i.postimg.cc/N55c2Nbd/officer2.jpg', './public/officer2.jpg');
  await download('https://i.postimg.cc/dLLYZWnW/officer3.jpg', './public/officer3.jpg');
  console.log('Downloaded');
}

run();
