const request = require("request-promise");
const cheerio = require("cheerio");
 
async function main(company) {
 const result = await request.get(`https://finviz.com/quote.ashx?t=${company}`);
 const $ = cheerio.load(result);
 $("body > div > div > table.snapshot-table2 > tbody > tr").each((index, element) => {
   console.log($($(element).find("td")).text());
 });
}
 
main('GOOG');
