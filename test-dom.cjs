const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "dist/index.html"), "utf8");

// We need to inject the script as actual code so jsdom executes it
const dom = new jsdom.JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "file://" + path.join(__dirname, "dist/")
});

setTimeout(() => {
  const hero = dom.window.document.querySelector(".hero");
  console.log("HERO EXISTS?", !!hero);
  if (hero) {
    console.log("HERO HEIGHT/DISPLAY:", hero.style.display, hero.getBoundingClientRect().height);
    console.log("HERO HTML:", hero.outerHTML);
  } else {
    console.log("BODY HTML:", dom.window.document.body.innerHTML);
  }
  process.exit(0);
}, 2000);
