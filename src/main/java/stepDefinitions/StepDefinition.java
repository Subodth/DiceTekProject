package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;  
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver; 
import org.openqa.selenium.chrome.ChromeOptions;
import java.io.*;
import java.util.*;
import java.util.concurrent.TimeUnit;
import io.github.bonigarcia.wdm.WebDriverManager;
import projectUtilities.ReusableMethods;	

public class StepDefinition extends ReusableMethods{
	
	@Before
	public void initialize() throws IOException  {
		WebDriverManager.chromedriver().setup();
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
	public WebElement xpathFormatter(String locator) {
		WebElement formatted = driver.findElement(By.xpath(xpath.get(locator)));
		return formatted;
	}
	
	@Given("^open the URL$")
	public void open_the_URL() throws InterruptedException{
		driver.get(properties.get("URL"));
	}

	@When("^I click on (.*)$")
	public void click(String field) throws InterruptedException {
		xpathFormatter(field).click();
	}
	
	@Then("^I assert the text \"(.*)\" with \"(.*)\"$")
	public void textAssertions(String value,String field){
		String actual = xpathFormatter(field).getText();
		String expected = value;
		Assert.assertEquals(expected, actual);
	}
	
	@Then("^I assert the title with \"(.*)\"$")
	public void titleAssertion(String value){
		String actual = driver.getTitle();
		System.out.println(actual);
		String expected = value;
		Assert.assertEquals(expected, actual);
	}
}
