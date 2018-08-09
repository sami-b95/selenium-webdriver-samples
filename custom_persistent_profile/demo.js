const FIREFOX_BINARY = "/Users/sami/Logiciels/firefox_59_0/Firefox.app/Contents/MacOS/firefox";
const PROFILE_DIRECTORY = "/Users/sami/Programmes/selenium-webdriver-git/selenium-webdriver-samples/custom_persistent_profile/profile_09082018_1442_dir";
const MARIONETTE_PORT = 2828;

const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

let firefoxOptions = new firefox.Options()
	.addArguments("-profile")
	.addArguments(PROFILE_DIRECTORY)
	.setBinary(FIREFOX_BINARY);

let firefoxService = new firefox.ServiceBuilder()
	.addArguments("--marionette-port")
	.addArguments("" + MARIONETTE_PORT);

let driver = new webdriver.Builder()
	.forBrowser("firefox")
	.setFirefoxOptions(firefoxOptions)
	.setFirefoxService(firefoxService)
	.build();

driver.get("https://www.google.fr/")
.then(() => setTimeout(() => driver.quit(), 10000))