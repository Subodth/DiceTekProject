#Author: subodthvidinvm@gmail.com
@diceTek
Feature: Test Scenarios for DiceTek

  	@UAE
  	Scenario: Test case for UAE
    Given open the URL
    When I click on translate
    Then I click on country
    Then I click on UAE
    #Assertions for UAE
    Then I assert the text "LITE" with "LITE"
    Then I assert the text "CLASSIC" with "CLASSIC"
    Then I assert the text "PREMIUM" with "PREMIUM"
    Then I assert the text "5.4 USD/month" with "LitePrice"
    Then I assert the text "10.9 USD/month" with "ClassicPrice"
    Then I assert the text "16.3 USD/month" with "PremiumPrice"
    
    @Egypt
    Scenario: Test case for Egypt
    Given open the URL
    When I click on translate
    Then I click on country
    Then I click on Egypt
    #Assertions for Egypt
    Then I assert the text "LITE" with "LITE"
    Then I assert the text "CLASSIC" with "CLASSIC"
    Then I assert the text "PREMIUM" with "PREMIUM"
    Then I assert the text "0.25 USD/month" with "LitePrice"
    Then I assert the text "0.5 USD/month" with "ClassicPrice"
    Then I assert the text "1 USD/month" with "PremiumPrice"
    
    @Algeria
    Scenario: Test case for Algeria
    Given open the URL
    When I click on translate
    Then I click on country
    Then I click on Algeria
    #Assertions for Algeria
    Then I assert the text "LITE" with "LITE"
    Then I assert the text "CLASSIC" with "CLASSIC"
    Then I assert the text "PREMIUM" with "PREMIUM"
    Then I assert the text "2.7 USD/month" with "LitePrice"
    Then I assert the text "5.3 USD/month" with "ClassicPrice"
    Then I assert the text "8 USD/month" with "PremiumPrice"

		@Chad
    Scenario: Test case for Chad
    Given open the URL
    When I click on translate
    Then I click on country
    Then I click on Chad
    #Assertions for Chad
    Then I assert the text "LITE" with "LITE"
    Then I assert the text "CLASSIC" with "CLASSIC"
    Then I assert the text "PREMIUM" with "PREMIUM"
    Then I assert the text "2.4 USD/month" with "LitePrice"
    Then I assert the text "4.8 USD/month" with "ClassicPrice"
    Then I assert the text "7.2 USD/month" with "PremiumPrice"
    
    