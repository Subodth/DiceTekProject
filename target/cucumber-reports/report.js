$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: subodthvidinvm@gmail.com"
    }
  ],
  "line": 3,
  "name": "Test Scenarios for DiceTek",
  "description": "",
  "id": "test-scenarios-for-dicetek",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@testcase1"
    }
  ]
});
formatter.before({
  "duration": 4198566600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Test case for UAE",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-uae",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@VerifyTitle"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on translate",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on UAE",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Assertions for UAE"
    }
  ],
  "line": 12,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I assert the text \"5.4 USD/month\" with \"LitePrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I assert the text \"10.9 USD/month\" with \"ClassicPrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I assert the text \"16.3 USD/month\" with \"PremiumPrice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 7459546200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "translate",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 3967639000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 311076600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UAE",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 1748452200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LITE",
      "offset": 19
    },
    {
      "val": "LITE",
      "offset": 31
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 95565700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CLASSIC",
      "offset": 19
    },
    {
      "val": "CLASSIC",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 30508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PREMIUM",
      "offset": 19
    },
    {
      "val": "PREMIUM",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 26530200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5.4 USD/month",
      "offset": 19
    },
    {
      "val": "LitePrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 37069300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.9 USD/month",
      "offset": 19
    },
    {
      "val": "ClassicPrice",
      "offset": 41
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 29093700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16.3 USD/month",
      "offset": 19
    },
    {
      "val": "PremiumPrice",
      "offset": 41
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 45919400,
  "status": "passed"
});
formatter.after({
  "duration": 1037777000,
  "status": "passed"
});
formatter.before({
  "duration": 1632506700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test case for Egypt",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-egypt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on translate",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on Egypt",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Assertions for Egypt"
    }
  ],
  "line": 25,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I assert the text \"0.25 USD/month\" with \"LitePrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I assert the text \"0.5 USD/month\" with \"ClassicPrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I assert the text \"1 USD/month\" with \"PremiumPrice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 6958793800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "translate",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 319762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 2362086100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Egypt",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 25854640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LITE",
      "offset": 19
    },
    {
      "val": "LITE",
      "offset": 31
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 39226700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CLASSIC",
      "offset": 19
    },
    {
      "val": "CLASSIC",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 30456800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PREMIUM",
      "offset": 19
    },
    {
      "val": "PREMIUM",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 25503700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.25 USD/month",
      "offset": 19
    },
    {
      "val": "LitePrice",
      "offset": 41
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 24788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.5 USD/month",
      "offset": 19
    },
    {
      "val": "ClassicPrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 31048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 USD/month",
      "offset": 19
    },
    {
      "val": "PremiumPrice",
      "offset": 38
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 35343400,
  "status": "passed"
});
formatter.after({
  "duration": 1034660900,
  "status": "passed"
});
formatter.before({
  "duration": 1626417500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Test case for Algeria",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-algeria",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on translate",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on Algeria",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#Assertions for Algeria"
    }
  ],
  "line": 38,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I assert the text \"2.7 USD/month\" with \"LitePrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I assert the text \"5.3 USD/month\" with \"ClassicPrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I assert the text \"8 USD/month\" with \"PremiumPrice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 13773270500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "translate",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 13504675900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 19951867000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algeria",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 17490734300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LITE",
      "offset": 19
    },
    {
      "val": "LITE",
      "offset": 31
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 38853500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CLASSIC",
      "offset": 19
    },
    {
      "val": "CLASSIC",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 27319200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PREMIUM",
      "offset": 19
    },
    {
      "val": "PREMIUM",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 27682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.7 USD/month",
      "offset": 19
    },
    {
      "val": "LitePrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 28771600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5.3 USD/month",
      "offset": 19
    },
    {
      "val": "ClassicPrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 53556600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8 USD/month",
      "offset": 19
    },
    {
      "val": "PremiumPrice",
      "offset": 38
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 26509800,
  "status": "passed"
});
formatter.after({
  "duration": 1059473800,
  "status": "passed"
});
formatter.before({
  "duration": 1774785900,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Test case for Chad",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-chad",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I click on translate",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I click on Chad",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#Assertions for Chad"
    }
  ],
  "line": 51,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I assert the text \"2.4 USD/month\" with \"LitePrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I assert the text \"4.8 USD/month\" with \"ClassicPrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I assert the text \"7.2 USD/month\" with \"PremiumPrice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 10274466700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "translate",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 2195885700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 468855300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chad",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 4588817400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LITE",
      "offset": 19
    },
    {
      "val": "LITE",
      "offset": 31
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 64447200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CLASSIC",
      "offset": 19
    },
    {
      "val": "CLASSIC",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 32302100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PREMIUM",
      "offset": 19
    },
    {
      "val": "PREMIUM",
      "offset": 34
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 26328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.4 USD/month",
      "offset": 19
    },
    {
      "val": "LitePrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 28163700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.8 USD/month",
      "offset": 19
    },
    {
      "val": "ClassicPrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 30373800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.2 USD/month",
      "offset": 19
    },
    {
      "val": "PremiumPrice",
      "offset": 40
    }
  ],
  "location": "StepDefinition.assertions(String,String)"
});
formatter.result({
  "duration": 34361800,
  "status": "passed"
});
formatter.after({
  "duration": 1005139700,
  "status": "passed"
});
});