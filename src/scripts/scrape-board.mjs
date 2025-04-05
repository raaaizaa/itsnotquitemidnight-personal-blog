import puppeteer from 'puppeteer';
import fs from 'fs';

async function autoScroll(page) {
  await page.evaluate(() => {
    return new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const delay = 300;

      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve(null);
        }
      }, delay);

      setTimeout(() => {
        clearInterval(timer);
        resolve(null);
      }, 1000);
    });
  });
}

async function scrapePinterestBoard() {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1280, height: 1000 },
  });
  const page = await browser.newPage();
  await page.goto('https://www.pinterest.com/whatiamseeing/phone-cam-roll/', {
    waitUntil: 'networkidle2',
  });

  await autoScroll(page);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await page.evaluate(() => {
    const container = document.querySelector('.masonryContainer');
    if (!container) return [];

    const imageElements = container.querySelectorAll('img');

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
