const puppeteer = require("puppeteer");

async function getData() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();
  const url = "https://dallas.craigslist.org/d/bicycles/search/bia";
  await page.goto(url);
  await page.waitFor(".result-row");
}
getData();
