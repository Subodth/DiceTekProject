package projectUtilities;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ReusableMethods {

	public WebDriver driver;
	public Map<String, String> properties = new HashMap<String, String>();
	public Map<String, String> xpath = new HashMap<String, String>();
	
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
}
