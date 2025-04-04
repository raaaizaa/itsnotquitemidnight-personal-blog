import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapePinterestBoard() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.pinterest.com/raaaizaa/phone-cam-roll/', {
    waitUntil: 'networkidle2',
  });

  const data = await page.evaluate(() => {
    const imageElements = document.querySelectorAll('img');

    const images = Array.from(imageElements)
      .map((img) => img.src)
      .map((src) => {
        const parts = src.split('/');
        parts[3] = 'originals';
        return parts.join('/');
      });

    const finalImages = images.slice(0, 20);
    return finalImages;
  });

  fs.writeFileSync('data/pinterest-board.json', JSON.stringify(data, null, 2));

  await browser.close();
}

scrapePinterestBoard();
