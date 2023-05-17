#Author: subodthvidinvm@gmail.com
@diceTek
Feature: Test Scenarios for DiceTek

  	@TestCase2withExamples
  	Scenario Outline: Test case for <country>
    Given open the URL
    When I click on translate
    Then I assert the title with "Jawwy TV - Watch Online movies, series & live TV | Enjoy Free Trial"
    Then I click on country
    Then I click on <country>
    #Assertions for UAE
    Then I assert the text "LITE" with "LITE"
    Then I assert the text "CLASSIC" with "CLASSIC"
    Then I assert the text "PREMIUM" with "PREMIUM"
    Then I assert the text "<price1>" with "LitePrice"
    Then I assert the text "<price2>" with "ClassicPrice"
    Then I assert the text "<price3>" with "PremiumPrice"
    
    Examples:
    |country |    price1    |   price2	  	|price3				 |
    |UAE     |5.4 USD/month |10.9 USD/month |16.3 USD/month|
    |Egypt   |0.25 USD/month|0.5 USD/month  |1 USD/month   |
   #|Algeria |2.7 USD/month |5.3 USD/month  |8 USD/month   |
   #|Chad    |2.4 USD/month |4.8 USD/month  |7.2 USD/month |
    