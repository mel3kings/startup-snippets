# C4 Model Templates

## Code
### Big Bank
```js
workspace "Financial Risk System" "This is a simple (incomplete) example C4 model based upon the financial risk system architecture kata, which can be found at http://bit.ly/sa4d-risksystem" {

    model {
        businessUser = person "Business User" "A regular business user."
        businessUser1 = person "Business User 1" "A regular business user."
        businessUser2 = person "Business User 2" "A regular business user."
        businessUser3 = person "Business User 3" "A regular business user."
        configurationUser = person "Configuration User" "A regular business user who can also configure the parameters used in the risk calculations."

        financialRiskSystem = softwareSystem "Financial Risk System" "Calculates the bank's exposure to risk for product X." "Financial Risk System"
        testSystem = softwareSystem "Tests Data System" "The system of record for trades of type X."
        tradeDataSystem = softwareSystem "Trade Data System" "The systemasdasd"
        referenceDataSystem = softwareSystem "Reference Data System" "Manages reference data for all counterparties the bank interacts with."
        referenceDataSystemV2 = softwareSystem "Reference Data System v2.0" "Manages reference data for all counterparties the bank interacts with." "Future State"
        emailSystem = softwareSystem "E-mail system" "The bank's Microsoft Exchange system."
        centralMonitoringService = softwareSystem "Central Monitoring Service" "The bank's central monitoring and alerting dashboard."
        activeDirectory = softwareSystem "Active Directory" "The bank's authentication and authorisation system."

        businessUser -> testSystem "UAT environment"
        businessUser -> financialRiskSystem "Views reports using"
        financialRiskSystem -> tradeDataSystem "Gets trade data from"
        financialRiskSystem -> testSystem "tester"
        financialRiskSystem -> businessUser1 "test123"
        financialRiskSystem -> businessUser2 "test123"
        financialRiskSystem -> businessUser3 "test123"
        financialRiskSystem -> referenceDataSystem "Gets counterparty data from"
        configurationUser -> financialRiskSystem "Configures parameters using"
        financialRiskSystem -> emailSystem "Sends a notification that a report is ready to"
        emailSystem -> businessUser "Sends a notification that a report is ready to" "E-mail message" "Asynchronous"
        financialRiskSystem -> centralMonitoringService "Sends critical failure alerts to" "SNMP" "Asynchronous, Alert"
        financialRiskSystem -> activeDirectory "Uses for user authentication and authorisation"
    }

    views {

        systemContext financialRiskSystem "Context" "An example System Context diagram for the Financial Risk System architecture kata." {
            include *
            autoLayout
        }

        styles {
            element "Element" {
                color #ffffff
            }
            element "Software System" {
                background #801515
                shape RoundedBox
            }
            element "Financial Risk System" {
                background #550000
                color #ffffff
            }
            element "Future State" {
                opacity 30
            }
            element "Person" {
                background #d46a6a
                shape Person
            }
            relationship "Relationship" {
                dashed false
            }
            relationship "Asynchronous" {
                dashed true
            }
            relationship "Alert" {
                color #ff0000
            }
            relationship "Future State" {
                opacity 30
            }
       }

    }
}

```

### Bigger Bank
```js
/*
 * This is a combined version of the following workspaces:
 *
 * - "Big Bank plc - System Landscape" (https://structurizr.com/share/28201/)
 * - "Big Bank plc - Internet Banking System" (https://structurizr.com/share/36141/)
*/
workspace "Big Bank plc" "This is an example workspace to illustrate the key features of Structurizr, via the DSL, based around a fictional online banking system." {

    model {
        customer = person "Personal Banking Customer" "A customer of the bank, with personal bank accounts." "Customer"

        enterprise "Big Bank plc" {
            supportStaff = person "Customer Service Staff" "Customer service staff within the bank." "Bank Staff"
            backoffice = person "Back Office Staff" "Administration and support staff within the bank." "Bank Staff"

            mainframe = softwaresystem "Mainframe Banking System" "Stores all of the core banking information about customers, accounts, transactions, etc." "Existing System"
            email = softwaresystem "E-mail System" "The internal Microsoft Exchange e-mail system." "Existing System"
            atm = softwaresystem "ATM" "Allows customers to withdraw cash." "Existing System"

            internetBankingSystem = softwaresystem "Internet Banking System" "Allows customers to view information about their bank accounts, and make payments." {
                singlePageApplication = container "Single-Page Application" "Provides all of the Internet banking functionality to customers via their web browser." "JavaScript and Angular" "Web Browser"
                mobileApp = container "Mobile App" "Provides a limited subset of the Internet banking functionality to customers via their mobile device." "Xamarin" "Mobile App"
                webApplication = container "Web Application" "Delivers the static content and the Internet banking single page application." "Java and Spring MVC"
                apiApplication = container "API Application" "Provides Internet banking functionality via a JSON/HTTPS API." "Java and Spring MVC" {
                    signinController = component "Sign In Controller" "Allows users to sign in to the Internet Banking System." "Spring MVC Rest Controller"
                    accountsSummaryController = component "Accounts Summary Controller" "Provides customers with a summary of their bank accounts." "Spring MVC Rest Controller"
                    resetPasswordController = component "Reset Password Controller" "Allows users to reset their passwords with a single use URL." "Spring MVC Rest Controller"
                    securityComponent = component "Security Component" "Provides functionality related to signing in, changing passwords, etc." "Spring Bean"
                    mainframeBankingSystemFacade = component "Mainframe Banking System Facade" "A facade onto the mainframe banking system." "Spring Bean"
                    emailComponent = component "E-mail Component" "Sends e-mails to users." "Spring Bean"
                }
                database = container "Database" "Stores user registration information, hashed authentication credentials, access logs, etc." "Oracle Database Schema" "Database"
            }
        }

        # relationships between people and software systems
        customer -> internetBankingSystem "Views account balances, and makes payments using"
        internetBankingSystem -> mainframe "Gets account information from, and makes payments using"
        internetBankingSystem -> email "Sends e-mail using"
        email -> customer "Sends e-mails to"
        customer -> supportStaff "Asks questions to" "Telephone"
        supportStaff -> mainframe "Uses"
        customer -> atm "Withdraws cash using"
        atm -> mainframe "Uses"
        backoffice -> mainframe "Uses"

        # relationships to/from containers
        customer -> webApplication "Visits bigbank.com/ib using" "HTTPS"
        customer -> singlePageApplication "Views account balances, and makes payments using"
        customer -> mobileApp "Views account balances, and makes payments using"
        webApplication -> singlePageApplication "Delivers to the customer's web browser"

        # relationships to/from components
        singlePageApplication -> signinController "Makes API calls to" "JSON/HTTPS"
        singlePageApplication -> accountsSummaryController "Makes API calls to" "JSON/HTTPS"
        singlePageApplication -> resetPasswordController "Makes API calls to" "JSON/HTTPS"
        mobileApp -> signinController "Makes API calls to" "JSON/HTTPS"
        mobileApp -> accountsSummaryController "Makes API calls to" "JSON/HTTPS"
        mobileApp -> resetPasswordController "Makes API calls to" "JSON/HTTPS"
        signinController -> securityComponent "Uses"
        accountsSummaryController -> mainframeBankingSystemFacade "Uses"
        resetPasswordController -> securityComponent "Uses"
        resetPasswordController -> emailComponent "Uses"
        securityComponent -> database "Reads from and writes to" "JDBC"
        mainframeBankingSystemFacade -> mainframe "Makes API calls to" "XML/HTTPS"
        emailComponent -> email "Sends e-mail using"


    }

    views {
        systemlandscape "SystemLandscape" {
            include *
            autoLayout
        }

        systemcontext internetBankingSystem "SystemContext" {
            include *
            animation {
                internetBankingSystem
                customer
                mainframe
                email
            }
            autoLayout
        }

        container internetBankingSystem "Containers" {
            include *
            animation {
                customer mainframe email
                webApplication
                singlePageApplication
                mobileApp
                apiApplication
                database
            }
            autoLayout
        }

        component apiApplication "Components" {
            include *
            animation {
                singlePageApplication mobileApp database email mainframe
                signinController securityComponent
                accountsSummaryController mainframeBankingSystemFacade
                resetPasswordController emailComponent
            }
            autoLayout
        }

        dynamic apiApplication "SignIn" "Summarises how the sign in feature works in the single-page application." {
            singlePageApplication -> signinController "Submits credentials to"
            signinController -> securityComponent "Validates credentials using"
            securityComponent -> database "select * from users where username = ?"
            database -> securityComponent "Returns user data to"
            securityComponent -> signinController "Returns true if the hashed password matches"
            signinController -> singlePageApplication "Sends back an authentication token to"
            autoLayout
        }

        styles {
            element "Person" {
                color #ffffff
                fontSize 22
                shape Person
            }
            element "Customer" {
                background #08427b
            }
            element "Bank Staff" {
                background #999999
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Existing System" {
                background #999999
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Web Browser" {
                shape WebBrowser
            }
            element "Mobile App" {
                shape MobileDeviceLandscape
            }
            element "Database" {
                shape Cylinder
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
            element "Failover" {
                opacity 25
            }
        }
    }
}

```