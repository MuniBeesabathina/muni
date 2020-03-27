$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "muni",
        "123"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "munib",
        "1234"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "bmuni",
        "12345"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    },
    {
      "cells": [
        "anwesh",
        "anwi@12"
      ],
      "line": 17,
      "id": "product-store-website;login-into-product-store-website;;5"
    },
    {
      "cells": [
        "anweshd",
        "anwi@123"
      ],
      "line": 18,
      "id": "product-store-website;login-into-product-store-website;;6"
    },
    {
      "cells": [
        "danwesh",
        "anwi@1234"
      ],
      "line": 19,
      "id": "product-store-website;login-into-product-store-website;;7"
    },
    {
      "cells": [
        "gsaipriya",
        "sai@12"
      ],
      "line": 20,
      "id": "product-store-website;login-into-product-store-website;;8"
    },
    {
      "cells": [
        "saipriyag",
        "sai@123"
      ],
      "line": 21,
      "id": "product-store-website;login-into-product-store-website;;9"
    },
    {
      "cells": [
        "gunneri",
        "1234"
      ],
      "line": 22,
      "id": "product-store-website;login-into-product-store-website;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"muni\" and \"123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 38230034300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 4636401000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muni",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 11097299500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 1800553000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"munib\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 18229664200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 270493800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munib",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9577346500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 501351500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bmuni\" and \"12345\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 15118280700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 457705100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bmuni",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 10436465800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 221709800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anwesh\" and \"anwi@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 10778226900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 152703500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh",
      "offset": 22
    },
    {
      "val": "anwi@12",
      "offset": 35
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9529909200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 194264900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anweshd\" and \"anwi@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8059493900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 175019500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anweshd",
      "offset": 22
    },
    {
      "val": "anwi@123",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9004041000,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 242022200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"danwesh\" and \"anwi@1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7275044700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 219422000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "danwesh",
      "offset": 22
    },
    {
      "val": "anwi@1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9070063500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 140559600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gsaipriya\" and \"sai@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8118965700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 246547600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gsaipriya",
      "offset": 22
    },
    {
      "val": "sai@12",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9019610400,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 282224500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"saipriyag\" and \"sai@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7243776200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 303261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriyag",
      "offset": 22
    },
    {
      "val": "sai@123",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9064816600,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 165158500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gunneri\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8070133100,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 177808000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gunneri",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9059864200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 170959400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add to cart in Product_Store",
  "description": "",
  "id": "product-store-website;add-to-cart-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_02_add"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Clicking on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user clicks add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Clicking on close browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtocartstep.launch_the_chrome_application()"
});
formatter.result({
  "duration": 7391089100,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.clicking_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 796209100,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.the_user_clicks_add_to_cart()"
});
formatter.result({
  "duration": 16143571300,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.click_on_close_browser_Button()"
});
formatter.result({
  "duration": 3177177500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Delete product in Product_Store",
  "description": "",
  "id": "product-store-website;delete-product-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_03_Delete"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Clicking on item to navigate item Page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "The user delete the product",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "To close the browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Deletestep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 6801755300,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.clicking_on_item_to_navigate_item_Page()"
});
formatter.result({
  "duration": 896705200,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.the_user_clicks_add_to_cart_and_delete_the_product()"
});
formatter.result({
  "duration": 14622730200,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.to_close_the_browser_Button()"
});
formatter.result({
  "duration": 3126640400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Navigate in Product_Store",
  "description": "",
  "id": "product-store-website;navigate-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TC_04_next"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "To launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Clicking on next to navigate next Page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Clicking on browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Nextpagestep.to_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7010245500,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.clicking_on_next_to_navigate_next_Page()"
});
formatter.result({
  "duration": 7534314800,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.click_on_browser_Button()"
});
formatter.result({
  "duration": 3314628300,
  "status": "passed"
});
});