package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.productstore.pages.addToCart;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Addtocartstep {
	WebDriver driver;
	public addToCart adc;// Creating Object for add to cart Pages

//@TC_02_add
	//To launch the browser
	@Given("^Launch the Chrome application$")
	public void launch_the_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		adc = new addToCart(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();
	}
//Navigate to product page
	@When("^Clicking on product to navigate product Page$")
	public void clicking_on_product_to_navigate_product_Page() {
		// Write code here that turns the phrase above into concrete actions
		adc.selectproduct();

	}
//Clicking on the product
	@Then("^The user clicks add to cart")
	public void the_user_clicks_add_to_cart() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		adc.add();
		Thread.sleep(4000);
	}
//To close the browser
	@Then("^Clicking on close browser button$")
	public void click_on_close_browser_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		adc.closebrowser();
	}

}
