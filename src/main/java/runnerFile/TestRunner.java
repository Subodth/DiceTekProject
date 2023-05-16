package runnerFile;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun=false,
		features = "src/main/resources/features",
		glue="stepDefinitions",
		tags= {"@diceTek"},
		plugin = { "pretty", "html:target/cucumber-reports" }
		)

public class TestRunner {

}

