const puppeteer = require("puppeteer");

async function getData() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();
  const url = "https://dallas.craigslist.org/d/bicycles/search/bia";
  await page.goto(url);
  await page.waitForTimeout(".result-row");
  const results = await page.$$eval(".result-row", rows => {
    return rows.map(row => {
      const obj = {};
      const title = row.querySelector(".result-title");

      obj.title = title.innerHTML;
      obj.link = title.getAttribute("href");
      return obj;
    });
  });
  console.log(results);
}
getData();
