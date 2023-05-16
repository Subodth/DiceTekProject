package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

import org.junit.Assert;
import org.openqa.selenium.By;  
import org.openqa.selenium.JavascriptExecutor;  
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver; 
import org.openqa.selenium.chrome.ChromeOptions;
import java.io.*;
import java.util.*;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StepDefinition {
	WebDriver driver;
	Map<String, String> properties = new HashMap<String, String>();
	Map<String, String> xpath = new HashMap<String, String>();
	
	@Before
	public void initialize() throws IOException  {
		System.setProperty("webdriver.chrome.driver","src/main/resources/driver/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized");
		driver=new ChromeDriver(options);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		loadFilestoMap("properties");
		loadFilestoMap("xpath");
	}
	
	@After
	public void destroy() {
		driver.quit();
	}
	
	@Given("^open the URL$")
	public void open_the_URL() throws InterruptedException{
		driver.get(properties.get("URL"));  
	}
	
	public void loadFilestoMap(String filename) throws IOException {
		File file = new File("src/main/resources/" + filename + ".txt");
		BufferedReader br = new BufferedReader(new FileReader(file));
		String line = null;
		while ((line = br.readLine()) != null) {
			String[] parts = line.split("@@");
			if (filename.equalsIgnoreCase("properties")) {
				properties.put(parts[0], parts[1]);
			} else if (filename.equalsIgnoreCase("xpath")) {
				xpath.put(parts[0], parts[1]);
			}
		}
	}

	@When("^I click on (.*)$")
	public void click(String field) throws InterruptedException {
		xpathFormatter(field).click();
	}

	public WebElement xpathFormatter(String locator) {
		WebElement formatted = driver.findElement(By.xpath(xpath.get(locator)));
		return formatted;
	}
	
	@Then("^I assert the text \"(.*)\" with \"(.*)\"$")
	public void assertions(String value,String field){
		String actual = xpathFormatter(field).getText();
		String expected = value;
		Assert.assertEquals(expected, actual);
	}
}
