const firefox = require('selenium-webdriver/firefox');
const webdriver = require('selenium-webdriver');

const By = webdriver.By, until = webdriver.until;

process.on("SIGTERM", () => {
	console.log("interrupted");
	driver.quit();
});

var firefoxOptions = new firefox.Options();
firefoxOptions.addArguments("-profile");
firefoxOptions.addArguments("/Users/sami/Programmes/Selenium/new_profile_07022018_6_dir");

let driver = new webdriver.Builder()
	.forBrowser("firefox")
	.setFirefoxOptions(firefoxOptions)
	.build();

driver.get("https://www.google.fr/")
.then(() => setTimeout(() => {}, 100000));
//.then(() => driver.quit());