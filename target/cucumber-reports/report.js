$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCase2.feature");
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
      "name": "@diceTek"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Test case for \u003ccountry\u003e",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCase2withExamples"
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
  "name": "I assert the title with \"Jawwy TV - Watch Online movies, series \u0026 live TV | Enjoy Free Trial\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \u003ccountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Assertions for UAE"
    }
  ],
  "line": 13,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I assert the text \"\u003cprice1\u003e\" with \"LitePrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I assert the text \"\u003cprice2\u003e\" with \"ClassicPrice\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I assert the text \"\u003cprice3\u003e\" with \"PremiumPrice\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;",
  "rows": [
    {
      "cells": [
        "country",
        "price1",
        "price2",
        "price3"
      ],
      "line": 21,
      "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;;1"
    },
    {
      "cells": [
        "UAE",
        "5.4 USD/month",
        "10.9 USD/month",
        "16.3 USD/month"
      ],
      "line": 22,
      "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;;2"
    },
    {
      "cells": [
        "Egypt",
        "0.25 USD/month",
        "0.5 USD/month",
        "1 USD/month"
      ],
      "line": 23,
      "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5531100800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test case for UAE",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCase2withExamples"
    },
    {
      "line": 2,
      "name": "@diceTek"
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
  "name": "I assert the title with \"Jawwy TV - Watch Online movies, series \u0026 live TV | Enjoy Free Trial\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on UAE",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Assertions for UAE"
    }
  ],
  "line": 13,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I assert the text \"5.4 USD/month\" with \"LitePrice\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I assert the text \"10.9 USD/month\" with \"ClassicPrice\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I assert the text \"16.3 USD/month\" with \"PremiumPrice\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 136464046700,
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
  "duration": 7412046500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jawwy TV - Watch Online movies, series \u0026 live TV | Enjoy Free Trial",
      "offset": 25
    }
  ],
  "location": "StepDefinition.titleAssertion(String)"
});
formatter.result({
  "duration": 26629900,
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
  "duration": 507415900,
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
  "duration": 4293805200,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 56660200,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 48244600,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 35997000,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 37714100,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 37008100,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 34238700,
  "status": "passed"
});
formatter.after({
  "duration": 5197015900,
  "status": "passed"
});
formatter.before({
  "duration": 5551860700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Test case for Egypt",
  "description": "",
  "id": "test-scenarios-for-dicetek;test-case-for-\u003ccountry\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCase2withExamples"
    },
    {
      "line": 2,
      "name": "@diceTek"
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
  "name": "I assert the title with \"Jawwy TV - Watch Online movies, series \u0026 live TV | Enjoy Free Trial\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on country",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Egypt",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Assertions for UAE"
    }
  ],
  "line": 13,
  "name": "I assert the text \"LITE\" with \"LITE\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I assert the text \"CLASSIC\" with \"CLASSIC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I assert the text \"PREMIUM\" with \"PREMIUM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I assert the text \"0.25 USD/month\" with \"LitePrice\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I assert the text \"0.5 USD/month\" with \"ClassicPrice\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I assert the text \"1 USD/month\" with \"PremiumPrice\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_the_URL()"
});
formatter.result({
  "duration": 53315635000,
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
  "duration": 4041304600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jawwy TV - Watch Online movies, series \u0026 live TV | Enjoy Free Trial",
      "offset": 25
    }
  ],
  "location": "StepDefinition.titleAssertion(String)"
});
formatter.result({
  "duration": 44559900,
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
  "duration": 1135065500,
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
  "duration": 4066582200,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 50064100,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 26454600,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 25354100,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 34416800,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 30926900,
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
  "location": "StepDefinition.textAssertions(String,String)"
});
formatter.result({
  "duration": 28013800,
  "status": "passed"
});
formatter.after({
  "duration": 5690981200,
  "status": "passed"
});
});